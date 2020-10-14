import * as yup from 'yup';

export class PostClientRequest {
    clientType: PostClientRequestTypes;
    individual?: PostClientRequestIndividual;
    organization?: PostClientRequestOrganization;
}

export enum PostClientRequestTypes {
    Organization = "Organization",
    Individual = "Individual"
}

export class PostClientRequestIndividual {
    name: string;
    nationalIqamaId: string;
    email: string;
    mobile: string;
    billingAddress?: string;
    nationalAddress?: string;
    phone?: string;
    fax?: string;
    preferedLanguage?: string;
}

export class PostClientRequestOrganization {
    type:PostClientRequestOrganizationTypes;
    name: string;
    commercialRecord: string;
    delegates:PostClientRequestOrganizationDelegate[];
}

export class PostClientRequestOrganizationDelegate {
  name: string;
  nationalIqamaId: string;
  email: string;
  mobile: string;
  billingAddress?: string;
  nationalAddress?: string;
  phone?: string;
  fax?: string;
  preferedLanguage?: string;
}

export enum PostClientRequestOrganizationTypes {
    Establishment = "Establishment",
    Corportation = "Corportation",
    LimitedCompany = "LimitedCompany",
    GovernmentAgency = "GovernmentAgency",
    NonProfitableOrganization = "NonProfitableOrganization"
}

export const PostClientRequestSchema = yup.object<PostClientRequest>({
    clientType: yup.mixed<PostClientRequestTypes>().oneOf([PostClientRequestTypes.Individual, PostClientRequestTypes.Organization]),
    individual: yup.object<PostClientRequestIndividual>({
        name: yup.string().required(),
        nationalIqamaId: yup.string().max(10).min(10).required(),
        email: yup.string().email().required(),
        mobile: yup.string().min(10).max(10).required(),
        billingAddress: yup.string().optional(),
        nationalAddress: yup.string(),
        phone: yup.string().min(10).max(10).optional(),
        fax: yup.string().min(10).max(10).optional(),
        preferedLanguage: yup.string().min(2).max(2).optional()
    }).optional(),
    organization: yup.object<PostClientRequestOrganization>({
        type: yup.mixed<PostClientRequestOrganizationTypes>().oneOf([PostClientRequestOrganizationTypes.Corportation, PostClientRequestOrganizationTypes.Establishment, PostClientRequestOrganizationTypes.GovernmentAgency, PostClientRequestOrganizationTypes.LimitedCompany, PostClientRequestOrganizationTypes.NonProfitableOrganization]),
        name: yup.string().min(2).required(),
        commercialRecord: yup.string().required(),
        delegates: yup.array<PostClientRequestOrganizationDelegate>().of(yup.object<PostClientRequestOrganizationDelegate>({
            name: yup.string().required(),
            nationalIqamaId: yup.string().max(10).min(10).required(),
            email: yup.string().email().required(),
            mobile: yup.string().min(10).max(10).required(),
            billingAddress: yup.string().optional(),
            nationalAddress: yup.string(),
            phone: yup.string().min(10).max(10).optional(),
            fax: yup.string().min(10).max(10).optional(),
            preferedLanguage: yup.string().min(2).max(2).optional()
        }).required()).required()
    }).optional()
}).test('at-least-one-object',`You haven't provided any of the client types objects`, value => {
    let list = [value?.individual, value?.organization];
    return value != null || list.some(v => v != null);
});