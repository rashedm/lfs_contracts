import { IPagedRequest } from "./PagedRequest";

export interface IPagedResponse<T> {
    data:T[];
    meta:IMetaResponse;
}

export interface IMetaResponse extends IPagedRequest {
    count:number;
    pages:number[];
}