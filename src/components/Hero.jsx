import "../styles/hero.css";
import hero from "../assets/hero.JPG";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg">
        <img src={hero} alt="ZEROONE" />
      </div>

      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="sub-title">
          ZERO-ONE
        </p>

        <h1>
          何度倒れても挑戦し
          <br />
          成長し続ける
        </h1>

        <p className="description">
          A Dynamic Organization
          <br />
          高品質、スピード対応
        </p>

        <a href="#contact" className="hero-btn">
          お問い合わせ
        </a>

      </motion.div>

    </section>
  );
}

export default Hero;