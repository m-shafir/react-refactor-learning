import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModelIsVisible] = useState(true);

  function hideModelHandler() {
    setModelIsVisible((prev) => !prev);
  }
  return (
    <>
      <MainHeader isOpen={modalIsVisible} onOpen={hideModelHandler} />
      <main>
        <PostList isOpen={modalIsVisible} onClose={hideModelHandler} />
      </main>
    </>
  );
}

export default App;
