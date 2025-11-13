import { Routes, Route, Link, useNavigate } from "react-router";

function NotFound() {
  return (
    <>
      <h2>Not found</h2>
      <Link to="/">Tilbage</Link>
    </>
  );
}

export default NotFound