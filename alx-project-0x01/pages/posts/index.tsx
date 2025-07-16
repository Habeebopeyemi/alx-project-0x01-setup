import React, { useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";
import PostModal from "@/components/common/PostModal";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };
  //console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              key={key}
              id={id}
            />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

//fetching posts data
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();
  return { props: { posts } };
}
export default Posts;
