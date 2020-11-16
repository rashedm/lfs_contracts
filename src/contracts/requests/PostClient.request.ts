import * as yup from "yup";

export class PostClientRequest {
  clientType?: PostClientRequestTypes;
  individual?: PostClientRequestIndividual;
  organization?: PostClientRequestOrganization;
}

export enum PostClientRequestTypes {
  Organization = "Organization",
  Individual = "Individual",
}

export class PostClientRequestIndividual {
  name?: string;
  nationalIqamaId?: string;
  email?: string;
  mobile?: string;
  billingAddress?: string;
  nationalAddress?: string;
  phone?: string;
  fax?: string;
  preferedLanguage?: string;
}

export class PostClientRequestOrganization {
  type?: PostClientRequestOrganizationTypes;
  name?: string;
  commercialRecord?: string;
  delegates?: PostClientRequestOrganizationDelegate[];
}

export class PostClientRequestOrganizationDelegate {
  name?: string;
  nationalIqamaId?: string;
  email?: string;
  mobile?: string;
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
  NonProfitableOrganization = "NonProfitableOrganization",
}

// TODO add max to string validation
export const PostClientRequestSchema = yup
  .object<PostClientRequest>({
    clientType: yup
      .mixed<PostClientRequestTypes>()
      .oneOf([
        PostClientRequestTypes.Individual,
        PostClientRequestTypes.Organization,
      ])
      .required(),
    individual: yup.object<PostClientRequestIndividual>().when("clientType", {
      is: (val) => val === PostClientRequestTypes.Individual,
      then: yup.object<PostClientRequestIndividual>({
        name: yup.string().required(),
        nationalIqamaId: yup.string().length(10).required(),
        email: yup.string().email().required(),
        mobile: yup.string().length(10).required(),
        billingAddress: yup.string(),
        nationalAddress: yup.string(),
        phone: yup.string().length(10),
        fax: yup.string().length(10),
        preferedLanguage: yup.string().length(2),
      }),
    }),
    organization: yup
      .object<PostClientRequestOrganization>()
      .when("clientType", {
        is: (val) => val === PostClientRequestTypes.Organization,
        then: yup.object<PostClientRequestOrganization>({
          type: yup
            .mixed<PostClientRequestOrganizationTypes>()
            .oneOf([
              PostClientRequestOrganizationTypes.Corportation,
              PostClientRequestOrganizationTypes.Establishment,
              PostClientRequestOrganizationTypes.GovernmentAgency,
              PostClientRequestOrganizationTypes.LimitedCompany,
              PostClientRequestOrganizationTypes.NonProfitableOrganization,
            ]),
          name: yup.string().min(2).required(),
          commercialRecord: yup.string().required(),
          delegates: yup
            .array<PostClientRequestOrganizationDelegate>()
            .of(
              yup
                .object<PostClientRequestOrganizationDelegate>({
                  name: yup.string().required(),
                  nationalIqamaId: yup.string().length(10).required(),
                  email: yup.string().email().required(),
                  mobile: yup.string().length(10).required(),
                  billingAddress: yup.string(),
                  nationalAddress: yup.string(),
                  phone: yup.string().length(10),
                  fax: yup.string().length(10),
                  preferedLanguage: yup.string().length(2),
                })
                .required()
            )
            .required(),
        }),
      }),
  })
  .test(
    "at-least-one-object",
    `You haven't provided any of the client types objects`,
    (value) => {
      let list = [value?.individual, value?.organization];
      return value != null || list.some((v) => v != null);
    }
  );
