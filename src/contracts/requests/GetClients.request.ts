import * as yup from 'yup';
import { IFilterable, IPagedRequest } from '../common/PagedRequest';

export class GetClientsRequest implements IPagedRequest {
    filters?: IFilterable[];
    page: number;
    itemsPerPage?: number | undefined;
    sortBy?: string | undefined;
    desc?: boolean | undefined;
    keyword?: string | undefined;
}

export const GetClientsRequestSchema = yup.object<GetClientsRequest>({
    page: yup.number().required()
});