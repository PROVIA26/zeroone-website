import { useEffect, useState } from "react";
import "../styles/topButton.css";

function TopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!show) return null;

  return (
    <button
      className="top-button"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}

export default TopButton;