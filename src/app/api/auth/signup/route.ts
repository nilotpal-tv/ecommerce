import { returnErrorResponse, returnSuccessResponse } from '@/lib/response';
import hashService from '@/services/hash.service';
import { NextResponse } from 'next/server';
import z from 'zod';

export const registrationValidationSchema = z.object({
  email: z.string().email(),
  username: z.string().min(5),
  password: z.string().min(5).max(30),
});

export type RegistrationBodyType = z.infer<typeof registrationValidationSchema>;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegistrationBodyType;
    const schema = await registrationValidationSchema.parseAsync(body);

    return NextResponse.json(
      returnSuccessResponse({
        ...schema,
        password: await hashService.hash(schema.password),
      })
    );
  } catch (error: any) {
    return NextResponse.json(returnErrorResponse({ error }));
  }
}
