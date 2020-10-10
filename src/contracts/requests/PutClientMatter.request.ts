import * as yup from 'yup';

export class PutClientMatterRequest {
    matterId: string;
    matterTypeId: number;
    case?: PutClientMatterRequestCase;
    contract?: PutClientMatterRequestContract;
    consultation?: PutClientMatterRequestConsultation;
}

export class PutClientMatterRequestCase {
    name: string;
}

export class PutClientMatterRequestContract {
    name: string;
}

export class PutClientMatterRequestConsultation {
    name: string;
}

export const PutClientMatterRequestSchema = yup.object<PutClientMatterRequest>({
    matterId: yup.string().required(),
    matterTypeId: yup.number().required(),
    case: yup.object<PutClientMatterRequestCase>({
        name: yup.string().required()
    }),
    contract: yup.object<PutClientMatterRequestContract>({
        name: yup.string().required()
    }),
    consultation: yup.object<PutClientMatterRequestConsultation>({
        name: yup.string().required()
    })
}).test('at-least-one-object',`You haven't provided any of the matter types objects`, value => {
    let list = [value?.case, value?.contract, value?.consultation];
    return value != null || list.some(v => v != null);
});