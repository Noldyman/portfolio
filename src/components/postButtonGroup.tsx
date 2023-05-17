import { posts } from "@/pages/portfolio/index";
import { PostMetaData } from "@/models/posts";
import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface Props {
  metaData: PostMetaData;
  isListItem?: boolean;
}

export default function PostButtonGroup({ metaData, isListItem }: Props) {
  const router = useRouter();
  const currPostIndex = posts.findIndex((p) => p.name === metaData.name);
  const prevPost = posts[currPostIndex - 1]?.name;
  const nextPost = posts[currPostIndex + 1]?.name;

  const handlePrevPost = () => {
    if (!prevPost) return;
    router.replace(prevPost);
  };

  const handleNextPost = () => {
    if (!nextPost) return;
    router.replace(nextPost);
  };

  return (
    <div className="button-group">
      {isListItem ? (
        <Link href={`portfolio/${metaData.name}`}>
          <Button highlight>Read more</Button>
        </Link>
      ) : (
        <Link href="/portfolio">
          <Button>&#x2190; Back</Button>
        </Link>
      )}
      {!isListItem && (
        <>
          <Button onClick={handlePrevPost} disabled={!prevPost} title="Previous post">
            &#x2191;
          </Button>
          <Button onClick={handleNextPost} disabled={!nextPost} title="Next post">
            &#x2193;
          </Button>
        </>
      )}
      <Link href={metaData.gitHubPath} target="_blank">
        <Button>GitHub</Button>
      </Link>
      {metaData.websitePath && (
        <Link href={metaData.websitePath} target="_blank">
          <Button>Website</Button>
        </Link>
      )}
    </div>
  );
}
