import * as yup from 'yup';

export class PostUserRequest {
    email:string;
    name:string;
    roles:PostUserRequestRole[];
}

export class PostUserRequestRole {
    id:string;
}

export const PostUserRequestSchema = yup.object<PostUserRequest>({
    name: yup.string().required(),
    email: yup.string().email().required(),
    roles: yup.array().of(yup.object<PostUserRequestRole>({
        id: yup.string().required()
    }).required()).required()
});