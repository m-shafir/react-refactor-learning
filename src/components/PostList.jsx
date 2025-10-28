import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ isOpen, onClose }) {
  const [posts, setPosts] = useState([]);

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} setPosts={setPosts} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post author={post.author} body={post.body} key={index} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <h1 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem" }}>
          There are no posts yet. Start adding one!
        </h1>
      )}
    </>
  );
}

export default PostList;
