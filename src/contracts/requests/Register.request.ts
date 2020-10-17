import * as yup from 'yup';

export class PostRegisterRequest {
    email: string;
    name: string;
    password: string;
    firm: PostRegisterRequestFirm;
}

export class PostRegisterRequestFirm {
    name: string;
    logoUrl?: string;
}

export const PostRegisterRequestSchema = yup.object<PostRegisterRequest>({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    firm: yup.object<PostRegisterRequestFirm>({
        name: yup.string().required(),
        logoUrl: yup.string().optional()
    }).required()
})