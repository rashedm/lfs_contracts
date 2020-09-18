import {ResponseStatuses} from './ResponseStatuses';

export class ResponseComposite {
    status: ResponseStatuses;
    errorCode?: string;
    errorMessage?: string | string[];
}