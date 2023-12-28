import styled from 'styled-components';
import './styles/Boards.scss';
import { useCallback, useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import FakeData from './FakeData.json';

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const itemsPerPage: number = 20;
const buttonsPerPage: number = 5;

const posts: Post[] = FakeData;

const Boards = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);

  // 게시글 리스트 업데이트
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedPosts(posts.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, posts]);

  const totalPages: number = Math.ceil(posts.length / itemsPerPage);

  // 현재 페이지 업데이트
  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  // 이전
  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  // 다음
  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  return (
    <Container>
      <div className='header'>
        <p className='header-title'>게시판</p>
        <p className='header-paging'>
          {currentPage}/{totalPages}
        </p>
      </div>
      <Posts displayedPosts={displayedPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        buttonsPerPage={buttonsPerPage}
        onPageChange={handlePageChange}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </Container>
  );
};

export default Boards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
