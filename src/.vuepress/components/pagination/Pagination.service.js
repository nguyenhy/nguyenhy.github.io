/**
 *
 * @param {number} offset index of first item in list
 * @param {number} limit number of item in each page
 * @param {number} total number of item in list
 * @param {number} show number of pagination item
 * @returns number[]
 */
export function parsePagination(offset, total, limit = 10, show = 3) {
  var list = []
  var numberOfPages = Math.ceil(total / limit)
  var currentPage = getCurrentPageIndexFrom(offset, limit)
  var start = currentPage
  var end = currentPage + show < numberOfPages ? currentPage + show : numberOfPages
  if (end - start < show) {
    start = end - show < 0 ? 0 : end - show
  }
  for (var index = start; index < end; index++) {
    list.push(index)
  }

  return {
    list,
    currentPage,
    numberOfPages
  }
}

export function getCurrentPageIndexFrom(offset, limit = 10) {
  return Math.ceil((offset + 1) / limit) - 1
}
