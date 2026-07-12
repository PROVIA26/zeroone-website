import "../styles/header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="logo">
          <img src={logo} alt="ZERO-ONE" />
        </div>

        <nav>

          <a href="#strength">会社の強み</a>

          <a href="#service">事業内容</a>

          <a href="#recruit">採用情報</a>

          <a href="#company">会社概要</a>

          <a href="#contact" className="contact-btn">
            お問い合わせ
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Header;