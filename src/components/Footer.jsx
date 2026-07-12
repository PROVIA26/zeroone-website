import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <h2 className="footer-logo">
          ZERO-ONE
        </h2>

        <p className="footer-text">
          高品質・スピード対応で、
          <br />
          新しい価値を届ける企業へ。
        </p>

        <nav className="footer-nav">
          <a href="#about">会社紹介</a>
          <a href="#service">事業内容</a>
          <a href="#strength">会社の強み</a>
          <a href="#recruit">採用情報</a>
          <a href="#company">会社概要</a>
          <a href="#contact">お問い合わせ</a>
        </nav>

        <p className="footer-copy">
          © 2025 ZERO-ONE All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;