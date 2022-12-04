import React from 'react'
import '../pagination/Pagination.css'
import ReactPaginate from 'react-paginate';

const Pagination = ({numpages,handlePagination,currentPage}) => {
    const pagesLinks = []

    for(let numpage=1; numpage<=numpages;numpage++){
        let activate = currentPage===numpage ? 'active':'';
        
        pagesLinks.push(<li className={`page-item ${activate}`}><button class="page-link" onClick={()=>handlePagination(numpage)}>{numpage}</button></li>)
    }

    const handlePageClick = (event) => {
        console.log(event.selected+1)
        handlePagination(event.selected+1)
      };
    

    return (
        <>
      
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={numpages}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName="lol"

      />
    </>
        
        
    )
}

export default Pagination
