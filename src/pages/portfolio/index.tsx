import PostButtonGroup from "@/components/postButtonGroup";
import { PostMetaData } from "@/models/posts";

export default function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <p>
        On this page, you&apos;ll find some of my recent programming projects. I included simple
        console applications and Arduino projects, but also more complex web applications. Some of
        these projects are also in production. Take a look around and let me know what you think!
      </p>

      <ul>
        {posts.map((post) => (
          <li key={post.postName}>
            <p>
              <strong>{post.title}</strong>: {post.description}
            </p>
            <PostButtonGroup metaData={post} isListItem />
          </li>
        ))}
      </ul>
    </>
  );
}

export const posts: PostMetaData[] = [
  {
    title: "Sudoku",
    description: "A state of the art Sudoku generator. You can finally play Sudoku on the web!",
    postName: "sudoku",
    gitHubPath: "https://github.com/Noldyman/sudoku",
    websitePath: "https://superdoku.nl",
  },
  {
    title: "Chemprove",
    description:
      "A website that provides a variety of tools designed to help organic chemists with complex calculations and analyses. I use it all the time!",
    postName: "chemprove",
    gitHubPath: "https://github.com/Noldyman/chemprove",
    websitePath: "https://chemprove.com/",
  },
  {
    title: "Climate sensor",
    description: "A battery powered sensor that measures temperature and humidity.",
    postName: "climate-sensor",
    gitHubPath: "https://github.com/Noldyman/climate-sensor",
  },
  {
    title: "Herb-O-Matic",
    description:
      "An automatic watering system for my precious herbs. My basil and parsley have never been better.",
    postName: "herb-o-matic",
    gitHubPath: "https://github.com/Noldyman/herb-o-matic",
  },
  {
    title: "Cryptonizer",
    description:
      "Console application that lets you encrypt and decrypt text files. Very convenient when you are as secretive as me.",
    postName: "cryptonizer",
    gitHubPath: "https://github.com/Noldyman/cryptonizer",
  },
];
