import { PostMetaData } from "@/models/posts";
import Link from "next/link";
import { Button } from "./button";

interface Props {
  metaData: PostMetaData;
  isListItem?: boolean;
}

export default function PostButtonGroup({ metaData, isListItem }: Props) {
  return (
    <div className="button-group">
      {isListItem ? (
        <Link href={`portfolio/${metaData.name}`}>
          <Button>Read more</Button>
        </Link>
      ) : (
        <Link href="/portfolio">
          <Button>&lt;- Go back</Button>
        </Link>
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
