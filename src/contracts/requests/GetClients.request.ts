import * as yup from 'yup';
import { IFilterable, IPagedRequest } from '../common/PagedRequest';

export interface GetClientsRequest extends IPagedRequest {}

export const GetClientsRequestSchema = yup.object<GetClientsRequest>({});