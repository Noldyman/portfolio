export default function Contact() {
  const links = [
    { label: "LinkedIn", path: "https://www.linkedin.com/in/noud-verstijnen-311794b2/" },
    { label: "GitGub (personal)", path: "https://github.com/Noldyman" },
    { label: "GitGub (Symeres)", path: "https://github.com/NoudV" },
  ];

  return (
    <>
      <h2>Contact</h2>
      <p>
        Feel free to contact me via <a href="mailto:contact@noudverstijnen.nl">email</a>, or snoop
        around on one of these platforms.
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
