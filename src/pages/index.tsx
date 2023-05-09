import Link from "next/link";
import differenceInYears from "date-fns/differenceInYears";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Profile() {
  const currentAge = differenceInYears(new Date(), new Date("1993-12-22"));
  const codeBlock = `const me = {
    name: "Noud Verstijnen",
    age: ${currentAge},
    nickName: "Noldy",
    livingIn: "Nijmegen (NL)",
    sports: ["Climbing", "Bouldering", "Mountainbiking", "Running"],
    hobbies: ["Board games", "Concerts", "Movies", "Cooking & fermenting"],
    interests: ["Music", "Domotics", "Science", "Nature"],
    fanOf: ["The Big Lebowski", "Vulfpeck", "Rick & Morty"],
  }`;

  return (
    <>
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
        <SyntaxHighlighter className="code-block" language="javascript" style={vs2015}>
          {codeBlock}
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
