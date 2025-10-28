import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({ onCancel, setPosts }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [author, setAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setAuthor(e.target.value);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author,
    };

    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-Type": "application/json",
      },
    });

    setPosts((prev) => [...prev, postData]);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={HandleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
