import styled from 'styled-components';
import { Post } from '../Boards';
import { Link } from 'react-router-dom';

type Props = {
  displayedPosts: Post[];
};

const Posts = ({ displayedPosts }: Props) => {
  return (
    <Container>
      {displayedPosts.map((post, i) => (
        <Link to={`/boards/post-detail?id=` + post.id}>
          <div className='post-info' key={post.id + i}>
            <div className='post-title'>{post.title}</div>
            <div className='post-createdAt'>작성일 : {post.createdAt}</div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;

  .post-info {
    width: 100%;
    border: 1px solid #ddd;
    padding: 4px 8px;
    display: flex;
    flex-direction: row;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }

    .post-title {
      flex: 7;
      color: #333;
      text-align: left;
      font-size: 16px;
      font-weight: bold;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .post-createdAt {
      flex: 1;
      font-size: 14px;
      color: #bbbbbb;
      margin-left: auto;
    }
  }
`;
