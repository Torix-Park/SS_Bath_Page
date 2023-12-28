import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FakeData from '../FakeData.json';
import { useEffect, useState } from 'react';
import { Post } from '../Boards';

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

  return (
    <Container>
      <div className='post-createdAt'>작성된 날짜 : {postInfo.createdAt}</div>
      <div className='post-title'>
        <b>제목:&nbsp;</b>
        {postInfo.title}
      </div>
      <div className='post-content'>{postInfo.content}</div>
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  width: 1000px;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  .post-createdAt {
    flex: 1;
    font-size: 15px;
    align-items: end;
    display: flex;
    color: #666;
  }

  .post-title {
    flex: 1;
    border: 1px solid #ddd;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }

  .post-content {
    flex: 16;
    border: 1px solid #ddd;
    padding: 4px;
    font-size: 14px;
  }
`;
