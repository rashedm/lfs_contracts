import * as yup from 'yup';

export class PostForgetPasswordRequest {
    email: string;
}

export const PostForgetPasswordRequestSchema = yup.object<PostForgetPasswordRequest>({
    email: yup.string().email().required()
});