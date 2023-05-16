import PostButtonGroup from "@/components/postButtonGroup";
import { PostMetaData } from "@/models/posts";

export default function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <p>
        On this page, you&apos;ll find some of my programming projects. I included simple console
        applications and Arduino projects, but also more complex web applications. Some of these are
        also in production. Take a look around and let me know what you think!
      </p>
      <div className="portfolio-posts">
        {posts.map((post, i) => (
          <>
            {i > 0 && <hr />}
            <div className="portfolio-post-preview" key={post.name}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <PostButtonGroup metaData={post} isListItem />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export const posts: PostMetaData[] = [
  {
    title: "Sudoku",
    name: "sudoku",
    description: "A state of the art Sudoku generator. You can finally play Sudoku on the web!",
    gitHubPath: "https://github.com/Noldyman/sudoku",
    websitePath: "https://superdoku.nl",
  },
  {
    title: "Chemprove",
    name: "chemprove",
    description:
      "A website that provides a variety of tools designed to help organic chemists with complex calculations and analyses. I use it all the time!",
    gitHubPath: "https://github.com/Noldyman/chemprove",
    websitePath: "https://chemprove.com/",
  },
  {
    title: "Climate sensor",
    name: "climate-sensor",
    description: "A battery powered sensor that measures temperature and humidity.",
    gitHubPath: "https://github.com/Noldyman/climate-sensor",
  },
  {
    title: "Herb-O-Matic",
    name: "herb-o-matic",
    description:
      "An automatic irrigation system for my precious herbs. My basil and parsley have never been better.",
    gitHubPath: "https://github.com/Noldyman/herb-o-matic",
  },
  {
    title: "Cryptonizer",
    name: "cryptonizer",
    description:
      "Console application that lets you encrypt and decrypt text files. Very convenient when you are as secretive as me.",
    gitHubPath: "https://github.com/Noldyman/cryptonizer",
  },
];
