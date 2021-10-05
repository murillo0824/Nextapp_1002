import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostsId, getPostData } from "../../lib/posts";

export default function post({ post }) {
  if (!post) {
    return <div>Now loading ...</div>;
  }
  return (
    <Layout title="post.title">
      <p className="m-4">
        {"ID:"}
        {post.id}
      </p>
      <p className="mb-8 font-bold text-xl">{post.title}</p>
      <p className="px-10">{post.body}</p>

      <Link href="/blog-page">
        <div className="cursor-pointer flex mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>back to blog page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsId();
  return {
    paths,
    fallback: false,
    //1-100まであるが、のっとファンドの場合は、404にする
    //fallback false:404error true:動的にページ数が増える
  };
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
