function Post({ author, body }) {
  return (
    <div className="my-12">
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}

export default Post;
