export class RegisterRequest {
    email: string;
    name: string;
    password: string;
    firmId?: string;
    firm?: FirmRegisterRequest;
}

export class FirmRegisterRequest {
    name: string;
    logoUrl?: string;
}