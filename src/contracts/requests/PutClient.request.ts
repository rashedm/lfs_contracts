import * as yup from 'yup';

export class PutClientRequest {
    id: string;
    clientType: PutClientRequestTypes;
    individual?: PutClientRequestIndividual;
    organization?: PutClientRequestOrganization;
}

export enum PutClientRequestTypes {
    Organization = "Organization",
    Individual = "Individual"
}

export class PutClientRequestIndividual {
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

export class PutClientRequestOrganization {
    type:PutClientRequestOrganizationTypes;
    name: string;
    commercialRecord: string;
    delegates:PutClientRequestOrganizationDelegate[];
}

export class PutClientRequestOrganizationDelegate {
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

export enum PutClientRequestOrganizationTypes {
    Establishment = "Establishment",
    Corportation = "Corportation",
    LimitedCompany = "LimitedCompany",
    GovernmentAgency = "GovernmentAgency",
    NonProfitableOrganization = "NonProfitableOrganization"
}

export const PutClientRequestSchema = yup.object<PutClientRequest>({
    id: yup.string().required(),
    clientType: yup.mixed<PutClientRequestTypes>().oneOf([PutClientRequestTypes.Individual, PutClientRequestTypes.Organization]),
    individual: yup.object<PutClientRequestIndividual>({
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
    organization: yup.object<PutClientRequestOrganization>({
        type: yup.mixed<PutClientRequestOrganizationTypes>().oneOf([PutClientRequestOrganizationTypes.Corportation, PutClientRequestOrganizationTypes.Establishment, PutClientRequestOrganizationTypes.GovernmentAgency, PutClientRequestOrganizationTypes.LimitedCompany, PutClientRequestOrganizationTypes.NonProfitableOrganization]),
        name: yup.string().min(2).required(),
        commercialRecord: yup.string().required(),
        delegates: yup.array<PutClientRequestOrganizationDelegate>().of(yup.object<PutClientRequestOrganizationDelegate>({
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