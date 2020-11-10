import {Response} from '../common/Response';

export class LoginResponse extends Response {
    token?: string;
    refreshToken?: RefreshTokenLoginResponse;
    user?: UserLoginResponse;
}

export class UserLoginResponse {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    createDateTime: Date;
    updateDateTime: Date;
    firm?: FirmUserLoginResponse;
}

export class FirmUserLoginResponse {
    id?: string;
    name: string;
    logoUrl?: string;
    isActive?: boolean;
    createDateTime?: Date;
    updateDateTime?: Date;
}

export class RefreshTokenLoginResponse {
    token: string;
    validUntil: Date;
}