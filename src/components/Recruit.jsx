import "../styles/recruit.css";
import { motion } from "framer-motion";

function Recruit() {
  return (
    <section className="recruit" id="recruit">

      <div className="recruit-inner">

        <motion.p
          className="recruit-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          RECRUIT
        </motion.p>

        {/* PC表示 */}
        <motion.h2
          className="pc-only"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          仲間と共に、
          <br />
          未来を創る。
        </motion.h2>

        {/* スマホ表示 */}
        <motion.h2
          className="sp-only"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          仲間と共に、
          <br />
          未来を創る。
        </motion.h2>

        {/* PC表示 */}
        <motion.p
          className="recruit-text pc-only"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ZERO-ONEでは、一緒に働く仲間を募集しています。
          <br />
          経験よりも成長したいという想いを大切にしています。
          <br /><br />
          未来を一緒につくる仲間として、
          <br />
          あなたの挑戦を待っています。
        </motion.p>

        {/* スマホ表示 */}
        <motion.p
          className="recruit-text sp-only"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ZERO-ONEでは、
          <br />
          一緒に働く仲間を募集しています。
          <br /><br />
          経験よりも
          <br />
          成長したいという想いを
          <br />
          大切にしています。
          <br /><br />
          未来を一緒につくる仲間として、
          <br />
          あなたの挑戦を待っています。
        </motion.p>

        <motion.a
          href="#contact"
          className="recruit-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          採用について問い合わせる
        </motion.a>

      </div>

    </section>
  );
}

export default Recruit;