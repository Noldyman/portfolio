import { Button } from "@/components/button";
import Head from "next/head";

export default function Contact() {
  const links = [
    { label: "LinkedIn", path: "https://www.linkedin.com/in/noud-verstijnen-311794b2/" },
    { label: "GitGub", path: "https://github.com/Noldyman" },
    { label: "GitGub Symeres", path: "https://github.com/NoudV" },
  ];

  return (
    <>
      <Head>
        <title>Contact | Noud Verstijnen</title>
      </Head>
      <h2>Contact</h2>
      <p>
        If you have any questions, don&apos;t hesitate to contact me. Feel free to send me an{" "}
        <a href="mailto:contact@noudverstijnen.nl">email</a>, or snoop around on one of these
        platforms.
      </p>
      <div className="button-group">
        {links.map((link) => (
          <a key={link.path} href={link.path} target="_blank" rel="noreferrer">
            <Button>{link.label}</Button>
          </a>
        ))}
      </div>
    </>
  );
}
