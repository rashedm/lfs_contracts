import * as yup from 'yup';

export class PutUserRoleRequest {
    id:string;
    name:string;
    description?:string;
    privileges:string[];
}


export const PutUserRoleRequestSchema = yup.object<PutUserRoleRequest>({
    id: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().optional(),
    privileges: yup.array().of(yup.string().required()).required()
});