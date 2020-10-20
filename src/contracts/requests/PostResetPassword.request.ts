import * as yup from 'yup'

export class PostResetPasswordRequest {
    token: string;
    password: string;
}

export const PostResetPasswordRequestSchema = yup.object<PostResetPasswordRequest>({
    token: yup.string().required(),
    password: yup.string().required()
})