import styled from 'styled-components';
import { Post } from '../Boards';
import { Link } from 'react-router-dom';
import '../styles/Posts.scss';

type Props = {
  displayedPosts: Post[];
};

const Posts = ({ displayedPosts }: Props) => {
  return (
    <Container>
      <table>
        <colgroup>
          <col width='10%' />
          <col width='70%' />
          <col width='20%' />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성 날짜</th>
          </tr>
        </thead>
        <tbody>
          {displayedPosts.map((post, i) => (
            <tr>
              <td>{post.id + 1}</td>
              <td>
                <Link to={`/boards/post-detail?id=` + post.id}>{post.title}</Link>
              </td>
              <td>{post.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Posts;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
