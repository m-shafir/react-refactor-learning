import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Merin Cyriac" body="React is Awesome" />
        <Post author="Muhammed Shafir" body="React with NEXT JS is Superb!!!" />
      </ul>
    </>
  );
}

export default PostList;
