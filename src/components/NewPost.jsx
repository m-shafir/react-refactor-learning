import styles from "./NewPost.module.css";

function NewPost({ changeBodyHandler,  changeAuthor }) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthor} />
      </p>
    </form>
  );
}

export default NewPost;
