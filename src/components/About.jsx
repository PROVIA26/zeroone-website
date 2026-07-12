import "../styles/about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-inner">

        <p className="about-label">
          ABOUT ZERO-ONE
        </p>

        <h2>
          挑戦する人と、
          <br />
          未来を創る。
        </h2>

        <p className="about-text">
          ZERO-ONEは、物流を通じて
          <br />
          人と企業をつなぐ会社です。
          <br /><br />
          高品質なサービスとスピード対応、
          <br />
          そして挑戦し続ける姿勢で、
          <br />
          新しい物流の未来を創ります。
        </p>

      </div>
    </motion.section>
  );
}

export default About;