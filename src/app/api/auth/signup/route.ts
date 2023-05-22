import { NextResponse } from 'next/server'
import z from 'zod'

import { returnErrorResponse, returnSuccessResponse } from '@/lib/response'
import authService from '@/services/auth.service'

export const registrationValidationSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  email: z.string().email(),
  password: z.string().min(5).max(30),
  username: z
    .string()
    .min(5)
    .regex(
      /^[a-z0-9_-]{5,15}$/,
      'User should only contain lowercase letters and numbers.'
    )
})

export type UserRegistrationDto = z.infer<typeof registrationValidationSchema>

export async function POST (request: Request) {
  try {
    const body = (await request.json()) as UserRegistrationDto
    const schema = await registrationValidationSchema.parseAsync(body)

    const user = await authService.register(schema)
    return NextResponse.json(returnSuccessResponse(user))
  } catch (error) {
    console.log(error)
    return NextResponse.json(returnErrorResponse({ error }))
  }
}
