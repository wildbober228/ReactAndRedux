import {useMemo} from "react";
import {getPagesArray} from "../utils/pages";

export const usePagination = (totalPages, page) =>{
    const pagesArray = useMemo( () =>{
        return getPagesArray(totalPages);
    }, [page])

    return pagesArray
}
