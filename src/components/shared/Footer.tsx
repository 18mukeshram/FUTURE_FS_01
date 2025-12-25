export default function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-neutral-500">
      <p>
        © {new Date().getFullYear()} Mukesh Ram ·{" "}
        <a
          href="https://github.com/18mukeshram"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="https://linkedin.com/in/bellamkonda-sai-mukesh-ram-60619731b"
          target="_blank"
          className="underline"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
