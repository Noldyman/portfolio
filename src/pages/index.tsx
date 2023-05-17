import Link from "next/link";
import differenceInYears from "date-fns/differenceInYears";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Head from "next/head";

export default function Profile() {
  const currentAge = differenceInYears(new Date(), new Date("1993-12-22"));
  const code = `const me = {
    name: "Noud Verstijnen",
    age: ${currentAge},
    nickName: "Noldy",
    livingIn: "Nijmegen (NL)",
    sports: ["Climbing", "Bouldering", "Mountainbiking", "Running"],
    hobbies: ["Board games", "Concerts", "Movies", "Cooking & fermentation"],
    interests: ["Music", "Domotics", "Science", "Nature"],
    fanOf: ["The Big Lebowski", "Vulfpeck", "Rick & Morty"],
  }`;

  return (
    <>
      <Head>
        <title>Profile | Noud Verstijnen</title>
      </Head>
      <div className="face-and-name">
        <picture>
          <img className="mugshot" src="/images/mugshot.jpg" alt="mugshot" />
        </picture>
        <h2>Noud Verstijnen</h2>
      </div>
      <h2>Profile</h2>
      <p>
        Welcome to my website!
        <br /> I&apos;m a <b>JavaScript</b> developer who is transitioning from organic chemistry to
        software development. Currently, I&apos;m mostly focused on the front-end, using{" "}
        <b>React</b>, <b>TypeScript</b>, and <b>Next.js</b>. However, I&apos;ve also played around
        with <b>Node.js</b>, <b>Express.js</b> and <b>MongoDB</b>. I&apos;m self-taught and eager to
        learn. I would love to develop my skills further and expand my knowledge on all aspects of
        (web-)development. Let me introduce myself with this js object:
      </p>
      {SyntaxHighlighter && (
        <SyntaxHighlighter style={darcula} className="code-block" language="javascript">
          {code}
        </SyntaxHighlighter>
      )}
      <p>
        On the <Link href="/portfolio">Portfolio</Link> page you&apos;ll find some of my recent
        programming projects. If you have any further questions, don&apos;t hesitate to{" "}
        <Link href="/contact">contact</Link> me.
      </p>
    </>
  );
}
