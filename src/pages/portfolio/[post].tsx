import { posts } from "./index";
import { getAllPostIds, getPost } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostMetaData } from "@/models/posts";
import PostButtonGroup from "@/components/postButtonGroup";
import Head from "next/head";

interface Props {
  metaData: PostMetaData;
  htmlContent: string;
}

export default function Post({ metaData, htmlContent }: Props) {
  return (
    <>
      <Head>
        <title>Portfolio | Noud Verstijnen</title>
      </Head>
      <h2>{metaData.title}</h2>
      <PostButtonGroup metaData={metaData} />
      <div className="post" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <PostButtonGroup metaData={metaData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const metaData = await posts.find((p) => p.name === params?.post);
  const htmlContent = await getPost(params?.post as string);
  return {
    props: {
      metaData,
      htmlContent,
    },
  };
};
