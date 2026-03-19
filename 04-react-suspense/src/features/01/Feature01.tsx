import { Suspense, use, useState, useTransition } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPost(postId: number): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load post.");
  }

  const data = await response.json();
  return data as Promise<Post>;
}

function PostDetails({ promisePost }: { promisePost: Promise<Post> }) {
  const post: Post = use(promisePost);
  return (
    <div>
      <small>Post #{post.id}</small>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

function Feature01() {
  const [postId, setPostId] = useState(1);
  const [promisePost, setPromisePost] = useState(() => getPost(1));
  const [isPending, startTransition] = useTransition();

  function handleChangePost(nextPostId: number) {
    startTransition(() => {
      setPostId(nextPostId);
      setPromisePost(getPost(nextPostId));
    });
  }

  return (
    <section>
      <div>
        <button
          type="button"
          disabled={isPending || postId === 1}
          onClick={() => handleChangePost(1)}
        >
          Post 1
        </button>{" "}
        <button
          type="button"
          disabled={isPending || postId === 2}
          onClick={() => handleChangePost(2)}
        >
          Post 2
        </button>{" "}
        <button
          type="button"
          disabled={isPending || postId === 3}
          onClick={() => handleChangePost(3)}
        >
          Post 3
        </button>
      </div>

      {isPending ? <p>Loading next post...</p> : null}

      <Suspense fallback="Loading...">
        <PostDetails promisePost={promisePost} />
      </Suspense>
    </section>
  );
}
export default Feature01;
