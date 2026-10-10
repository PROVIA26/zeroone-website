import "../styles/hero.css";
import hero from "../assets/hero.JPG";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="top">

      {/* 背景画像 */}
      <div className="hero-bg">
        <img src={hero} alt="ZERO-ONE 高速道路の夜景" />
      </div>

      {/* 背景を暗くするレイヤー */}
      <div className="hero-overlay"></div>

      {/* メインコンテンツ */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >

        <motion.p
          className="sub-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          ZERO-ONE TRANSPORT
        </motion.p>

        {/* PC表示 */}
        <h1 className="pc-only">
          何度倒れても挑戦し
          <br />
          成長し続ける
        </h1>

        {/* スマホ表示 */}
        <h1 className="sp-only">
          何度倒れても
          <br />
          挑戦し成長し続ける
        </h1>

        <div className="hero-line"></div>

        <p className="description">
          A Dynamic Organization
          <br />
          高品質、スピード対応
        </p>

        <a href="#contact" className="hero-btn">
          お問い合わせ
          <span className="hero-arrow">→</span>
        </a>

      </motion.div>

      {/* スクロール案内 */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;