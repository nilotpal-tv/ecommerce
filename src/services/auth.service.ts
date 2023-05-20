import { PrismaClient, User } from '@prisma/client';
import httpErrors from 'http-errors';

import { UserRegistrationDto } from '@/app/api/auth/signup/route';
import prisma from '@/lib/prisma';
import hashService from './hash.service';

class AuthService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async findUserByEmail(
    email: string,
    shouldThrow = true
  ): Promise<User | null> {
    const user = await this.prismaClient.user.findUnique({
      where: { email },
    });

    if (!user && shouldThrow)
      throw new httpErrors.NotFound(`User with ${email} doesn't exist.`);
    return user;
  }

  async register(registrationDto: UserRegistrationDto): Promise<User> {
    const { email, firstName, lastName, password, username } = registrationDto;
    const user = await this.findUserByEmail(email, false);

    if (user) throw new httpErrors.Conflict('Email is already registered.');

    const hashedPassword = await hashService.hash(password);
    return this.prismaClient.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        emailVerified: new Date(),
        name: firstName && lastName ? `${firstName} ${lastName}` : '',
      },
    });
  }
}

export default new AuthService(prisma);
