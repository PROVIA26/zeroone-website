import "../styles/strength.css";
import { motion } from "framer-motion";

function Strength() {
  return (
    <section className="strength" id="strength">

      <div className="strength-inner">

        <motion.p
          className="strength-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          STRENGTH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          ZERO-ONEの強み
        </motion.h2>

        <div className="strength-list">

          <motion.div
            className="strength-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3>高品質</h3>
            <p>
              一つひとつの仕事に責任を持ち、
              <br />
              お客様から信頼される品質を提供します。
            </p>
          </motion.div>

          <motion.div
            className="strength-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3>スピード対応</h3>
            <p>
              素早い判断と行動力で、
              <br />
              あらゆるニーズに柔軟に対応します。
            </p>
          </motion.div>

          <motion.div
            className="strength-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3>挑戦</h3>
            <p>
              現状に満足せず、
              <br />
              新しい事業へ挑戦し続けます。
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Strength;