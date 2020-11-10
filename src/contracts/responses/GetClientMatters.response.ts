import { IMetaResponse, IPagedResponse } from '../common/PagedResponse';
import {Response} from '../common/Response';
import { Matter } from '../entities/Matter.entity';


export class GetClientMattersResponse extends Response implements IPagedResponse<Matter> {
    data: Matter[];
    meta: IMetaResponse;
}