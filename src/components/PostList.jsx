import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function PostList({ isOpen, onClose }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");

      const resData = await response.json();

      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} setPosts={setPosts} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post author={post.author} body={post.body} key={index} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <h1 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem" }}>
          There are no posts yet. Start adding one!
        </h1>
      )}
      {isFetching && <p>Loading Posts.....</p>}
    </>
  );
}

export default PostList;
