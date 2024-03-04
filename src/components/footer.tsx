export const Footer = () => {
  return (
    <footer className="w-full justify-center items-center flex p-2 text-muted">
      <small className="text-foreground/50 text-center">
        &#169; Designed and developed by{" "}
        <a
          href="https://portfolio-jessesinivuori.vercel.app/"
          className="hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jesse Sinivuori
        </a>
      </small>
    </footer>
  );
};
