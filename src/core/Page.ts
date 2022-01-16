import { Pageable } from "./Pageable"
import { Sort } from "./Sort"

export interface Page<T> {
    content: T[],
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    pageable: Pageable,
    size: number,
    sort: Sort,
    totalElements: number,
    totalPages: number,
}