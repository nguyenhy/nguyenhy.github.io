import { describe, expect, test } from "vitest";
import {
  createPaginationNumber,
  getPageIndexFromItemIndex,
} from "../index.services";

describe("index.ts", () => {
  test("at page 0, total 10, 3 item/page", () => {
    const pagination = createPaginationNumber({
      totalItems: 10,
      currentPageIndex: getPageIndexFromItemIndex(1, 3),
      itemPerPage: 3,
    });

    expect(pagination.totalPages).toEqual(4);
    expect(pagination.pages).toEqual([0, 1, 2, 3]);
    expect(pagination.firstPageIndex).toEqual(0);
    expect(pagination.lastPageIndex).toEqual(3);
    expect(pagination.currentPageIndex).toEqual(0);
  });

  test("totalItems", () => {
    const pagination = createPaginationNumber({
      totalItems: 3,
      currentPageIndex: 100,
      itemPerPage: 3,
    });

    expect(pagination.totalPages).toEqual(1);
    expect(pagination.pages).toEqual([0]);
    expect(pagination.firstPageIndex).toEqual(0);
    expect(pagination.lastPageIndex).toEqual(0);
    expect(pagination.currentPageIndex).toEqual(0);
  });
});
