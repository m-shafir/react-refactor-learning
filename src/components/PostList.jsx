import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";

function PostList({ isOpen, onClose }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [author, setAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function changeAuthor(e) {
    setAuthor(e.target.value);
  }

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <NewPost
            changeBodyHandler={changeBodyHandler}
            changeAuthor={changeAuthor}
            onCancel={onClose}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={author} body="React is Awesome" />
        <Post author={author} body="React with NEXT JS is Superb!!!" />
      </ul>
    </>
  );
}

export default PostList;
