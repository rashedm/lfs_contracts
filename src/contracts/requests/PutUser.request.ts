import * as yup from 'yup';

export class PutUserRequest {
    id:string;
    name:string;
    roles:PutUserRequestRole[];
}

export class PutUserRequestRole {
    id:string;
}

export const PutUserRequestSchema = yup.object<PutUserRequest>({
    id: yup.string().required(),
    name: yup.string().required(),
    roles: yup.array().of(yup.object<PutUserRequestRole>({
        id: yup.string().required()
    }).required()).required()
});