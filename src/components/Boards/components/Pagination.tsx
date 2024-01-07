import { useCallback } from 'react';
import styled from 'styled-components';

type Props = {
  currentPage: number;
  totalPages: number;
  buttonsPerPage: number;
  onPageChange: (newPage: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  buttonsPerPage,
  onPageChange,
  onPrevPage,
  onNextPage,
}: Props) => {
  const renderPageButtons = useCallback(() => {
    const pageButtons = [];
    const startPage = Math.floor((currentPage - 1) / buttonsPerPage) * buttonsPerPage + 1;

    for (let i = startPage; i < startPage + buttonsPerPage && i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          disabled={i === currentPage}
          className={`pagination-button ${i === currentPage ? 'active' : ''}`}
        >
          {i}
        </button>,
      );
    }

    return pageButtons;
  }, [currentPage, totalPages, buttonsPerPage, onPageChange]);

  return (
    <Container>
      <button onClick={onPrevPage} disabled={currentPage === 1} className='pagination-button'>
        ←
      </button>
      {renderPageButtons()}
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className='pagination-button'
      >
        →
      </button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0;

  button {
    margin: 0 5px;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 25px;
    background-color: #fff;
    transition: 0.15s ease;
    font-weight: 600;
    font-family: 'Lato';
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  .active {
    background-color: #80cbc4;
    color: #fff;
  }
`;
