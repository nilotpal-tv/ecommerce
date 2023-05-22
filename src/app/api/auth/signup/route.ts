import { NextResponse } from 'next/server';

import {
  UserRegistrationDto,
  registrationValidationSchema,
} from '@/app/(auth)/signup/page';
import { returnErrorResponse, returnSuccessResponse } from '@/lib/response';
import authService from '@/services/auth.service';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as UserRegistrationDto;
    const schema = await registrationValidationSchema.parseAsync(body);

    const user = await authService.register(schema);
    return NextResponse.json(returnSuccessResponse(user));
  } catch (error) {
    console.log(error);
    return NextResponse.json(returnErrorResponse({ error }));
  }
}
