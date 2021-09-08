import React from 'react'
import '../pagination/Pagination.css'
const Pagination = ({numpages,handlePagination,currentPage}) => {
    const pagesLinks = []

    for(let numpage=1; numpage<=numpages;numpage++){
        let activate = currentPage===numpage ? 'active':'';
        
        pagesLinks.push(<li className={`page-item ${activate}`}><button class="page-link" onClick={()=>handlePagination(numpage)}>{numpage}</button></li>)
    }
    

    return (
        <nav  className="lol">
            <ul className="pagination">
                {pagesLinks}
            </ul>
        </nav>
    )
}

export default Pagination
