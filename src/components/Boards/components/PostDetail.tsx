import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FakeData from '../FakeData.json';
import { useCallback, useEffect, useState } from 'react';
import { Post } from '../Boards';
import '../styles/PostDetail.scss';

const PostDetail = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams: URLSearchParams = new URLSearchParams(search);
  const postId: string = queryParams.get('id') ?? '';
  const [postInfo, setPostInfo] = useState<Post>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
  });

  useEffect(() => {
    const post: Post | undefined = FakeData.find((post) => post.id === Number(postId));

    if (!post) {
      alert('존재하지 않는 게시글입니다!.');
      navigate('/boards');
    } else {
      setPostInfo(post);
    }
  }, [postId, FakeData]);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <Container>
      <div className='post-detail-header'>
        <p className='post-title'>{postInfo.title}</p>
        <p className='post-createdAt'>{postInfo.createdAt}</p>
      </div>
      <div className='post-content'>{postInfo.content}</div>
      <button className='goback' onClick={handleGoBack}>
        목록
      </button>
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
