export interface IPagedRequest {
    page:number;
    itemsPerPage?:number;
    sortBy?:string;
    desc?:boolean;
    keyword?:string;
    filters?:IFilterable[];
}

export interface IPagedResponse<T> extends IPagedRequest {
    data:T[];
    count:number;
    pages:number[];
}

export interface IFilterable {
    key:string;
    value:string|number;
}