import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex mt-auto h-10 md:h-20 md:text-l items-center justify-center">
      <Link to="/">
        <p>go home</p>
      </Link>
    </footer>
  );
}
