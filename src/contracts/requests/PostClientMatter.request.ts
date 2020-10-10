import * as yup from 'yup';

export class PostClientMatterRequest {
    clientId: string;
    matterTypeId: number;
    case?: PostClientMatterRequestCase;
    contract?: PostClientMatterRequestContract;
    consultation?: PostClientMatterRequestConsultation;
}

export class PostClientMatterRequestCase {
    name: string;
}

export class PostClientMatterRequestContract {
    name: string;
}

export class PostClientMatterRequestConsultation {
    name: string;
}

export const PostClientMatterRequestSchema = yup.object<PostClientMatterRequest>({
    clientId: yup.string().required(),
    matterTypeId: yup.number().required(),
    case: yup.object<PostClientMatterRequestCase>({
        name: yup.string().required()
    }),
    contract: yup.object<PostClientMatterRequestContract>({
        name: yup.string().required()
    }),
    consultation: yup.object<PostClientMatterRequestConsultation>({
        name: yup.string().required()
    })
}).test('at-least-one-object',`You haven't provided any of the matter types objects`, value => {
    let list = [value?.case, value?.contract, value?.consultation];
    return value != null || list.some(v => v != null);
});