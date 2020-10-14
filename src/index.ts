export {LoginRequest, LoginRequestSchema} from "./contracts/requests/Login.request";
export {RegisterRequest,FirmRegisterRequest} from "./contracts/requests/Register.request";

export {LoginResponse,FirmUserLoginResponse,RefreshTokenLoginResponse,UserLoginResponse} from "./contracts/responses/Login.response";
export {GetClientsRequest, GetClientsRequestSchema} from './contracts/requests/GetClients.request';
export {PostClientMatterRequest, PostClientMatterRequestCase, PostClientMatterRequestConsultation, PostClientMatterRequestContract, PostClientMatterRequestSchema} from './contracts/requests/PostClientMatter.request';
export {PutClientMatterRequest, PutClientMatterRequestCase, PutClientMatterRequestConsultation, PutClientMatterRequestContract, PutClientMatterRequestSchema} from './contracts/requests/PutClientMatter.request';

export {PostClientRequest, PostClientRequestIndividual, PostClientRequestOrganization, PostClientRequestOrganizationDelegate, PostClientRequestOrganizationTypes, PostClientRequestSchema} from './contracts/requests/PostClient.request';

export {ResponseStatuses} from "./contracts/common/ResponseStatuses";
export {ResponseComposite} from "./contracts/common/Response.composite";

