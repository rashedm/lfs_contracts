import * as yup from 'yup';

export class PostUserRoleRequest {
    name:string;
    description?:string;
    privileges:string[];
}


export const PostUserRoleRequestSchema = yup.object<PostUserRoleRequest>({
    name: yup.string().required(),
    description: yup.string().optional(),
    privileges: yup.array().of(yup.string().required()).required()
});