import { FirmComposite } from "./Firm.composite";

export class UserComposite {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    createDateTime: Date;
    updateDateTime: Date;
    firm?: FirmComposite;
}