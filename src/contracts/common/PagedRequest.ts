export interface IPagedRequest {
    page?:number;
    itemsPerPage?:number;
    sortBy?:string;
    desc?:boolean;
    // keyword?:string;
    filters?:IFilterable[];
}

export interface IFilterable {
    key:string;
    value:string|number;
}