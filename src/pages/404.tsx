import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <picture>
        <img className="mugshot" src="/images/walter.jpg" alt="walter" />
      </picture>
      <h2>Over the line!</h2>
      <p>
        Excuse me! Mark it zero. <Link href="/">Next frame</Link>...
      </p>
    </div>
  );
}
