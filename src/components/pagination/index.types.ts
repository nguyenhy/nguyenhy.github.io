export interface ICreatePaginationNumberOptions
  extends Partial<ICreatePaginationNumberOptional> {
  totalItems: number;
  currentPageIndex: number;
}

export interface ICreatePaginationNumberOptional {
  itemPerPage: number;
  maxPreviousPage: number;
  maxNextPage: number;
  includeFirstPage: boolean;
  includeLastPage: boolean;
}

export interface IPaginationData {
  pages: number[];
  firstPageIndex: number;
  lastPageIndex: number;
  totalPages: number;
  currentPageIndex: number;
  options: ICreatePaginationNumberOptions;
}

export interface IPaginationProps {
  options?: ICreatePaginationNumberOptions;
  pagination?: IPaginationData;
  url: string | ((index: number) => string);
}
