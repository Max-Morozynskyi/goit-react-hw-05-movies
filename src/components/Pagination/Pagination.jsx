import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

const MyPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.selected a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const Pagination = ({ pages, changePage }) => {
  return (
    <MyPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={changePage}
      pageRangeDisplayed={3}
      pageCount={pages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
