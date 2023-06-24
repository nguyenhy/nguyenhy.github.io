export interface ICreatePaginationNumberOptions {
  totalItems: number;
  currentPageIndex: number;
  itemPerPage?: number;
  maxPreviousPage?: number;
  maxNextPage?: number;
  includeFirstPage?: boolean;
  includeLastPage?: boolean;
}

export interface IPaginationData {
  pages: number[];
  firstPageIndex: number;
  lastPageIndex: number;
  totalPages: number;
  currentPageIndex: number;
}

export interface IPaginationProps {
  options?: ICreatePaginationNumberOptions;
  pagination?: IPaginationData;
  url: string | ((index: number) => string);
}
