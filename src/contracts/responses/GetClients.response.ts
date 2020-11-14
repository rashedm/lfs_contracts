import { IMetaResponse, IPagedResponse } from '../common/PagedResponse';
import { Response } from '../common/Response';
import { Client } from '../entities/Client.entity';

export class GetClientsResponse extends Response implements IPagedResponse<Client> {
    data: Client[];
    meta: IMetaResponse;
}