export interface IPagedRequest {
    page?:number;
    itemsPerPage?:number;
    sortBy?:string;
    desc?:boolean;
    // keyword?:string;
    filters?:IFilterable[];
}

export interface IPagedResponse<T> {
    data:T[];
    meta:IMetaResponse;
}

export interface IMetaResponse extends IPagedRequest {
    count:number;
    pages:number[];
}

export interface IFilterable {
    key:string;
    value:string|number;
}