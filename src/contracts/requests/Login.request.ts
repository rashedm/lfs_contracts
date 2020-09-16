import * as yup from 'yup';

export class LoginRequest {
    email: string;
    password: string;
}

export const LoginRequestSchema = yup.object<LoginRequest>({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
});