import { getOptions } from "~/services/options";
import type {
  ICreatePaginationNumberOptions,
  ICreatePaginationNumberOptional,
  IPaginationData,
} from "./index.types";

export const PaginationDefaultOptions: ICreatePaginationNumberOptional = {
  itemPerPage: 5,
  maxPreviousPage: 3,
  maxNextPage: 3,
  includeFirstPage: true,
  includeLastPage: true,
};

export function getPageIndexFromItemIndex(
  index: number,
  itemPerPage: number
): number {
  return Math.floor(index / itemPerPage);
}

export function createPaginationNumber(
  options: ICreatePaginationNumberOptions
): IPaginationData {
  const itemPerPage = getOptions(
    "itemPerPage",
    options,
    PaginationDefaultOptions
  );
  const maxPreviousPage = getOptions(
    "maxPreviousPage",
    options,
    PaginationDefaultOptions
  );
  const maxNextPage = getOptions(
    "maxNextPage",
    options,
    PaginationDefaultOptions
  );
  const includeFirstPage = getOptions(
    "includeFirstPage",
    options,
    PaginationDefaultOptions
  );
  const includeLastPage = getOptions(
    "includeLastPage",
    options,
    PaginationDefaultOptions
  );

  let currentPageIndex = options.currentPageIndex;

  let totalItems = options.totalItems;
  if (totalItems <= 0) {
    totalItems = currentPageIndex * itemPerPage;
  }

  const totalPages = Math.ceil(totalItems / itemPerPage);
  const firstPageIndex = 0;
  const lastPageIndex = totalPages - 1;

  if (currentPageIndex > lastPageIndex) {
    currentPageIndex = lastPageIndex;
  } else if (currentPageIndex < firstPageIndex) {
    currentPageIndex = firstPageIndex;
  }

  const isValidPageIndex = (pageIndex: number) => {
    return pageIndex >= firstPageIndex && pageIndex <= lastPageIndex;
  };

  const prependIndex = (pageIndex: number) => {
    if (isValidPageIndex(pageIndex)) {
      pages.unshift(pageIndex);
    }
  };

  const appendIndex = (pageIndex: number) => {
    if (isValidPageIndex(pageIndex)) {
      pages.push(pageIndex);
    }
  };

  const pages: number[] = [];
  for (let index = 0; index < maxPreviousPage; index++) {
    const pageIndex = currentPageIndex - 1 - index;
    prependIndex(pageIndex);
  }

  appendIndex(currentPageIndex);

  for (let index = 0; index < maxNextPage; index++) {
    const pageIndex = currentPageIndex + 1 + index;
    appendIndex(pageIndex);
  }

  if (includeFirstPage && !pages.includes(firstPageIndex)) {
    pages.unshift(firstPageIndex);
  }

  if (includeLastPage && !pages.includes(lastPageIndex)) {
    pages.push(lastPageIndex);
  }

  return {
    pages: pages,
    firstPageIndex: firstPageIndex,
    lastPageIndex: lastPageIndex,
    totalPages: totalPages,
    currentPageIndex: currentPageIndex,
    options: options,
  };
}
