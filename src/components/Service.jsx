import "../styles/service.css";
import { motion } from "framer-motion";

function Service() {
  return (
    <section className="service" id="service">

      <div className="service-inner">

        <motion.p
          className="service-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SERVICE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          事業内容
        </motion.h2>

        <div className="service-list">

          <motion.div
            className="service-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >

            <h3>運送事業</h3>

            <p>
              高品質な配送サービスを提供し、
              <br />
              確実でスピーディーな物流を実現します。
              <br /><br />
              お客様の大切な荷物を責任を持って届け、
              <br />
              信頼される物流パートナーを目指します。
            </p>

          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >

            <h3>飲食店FC事業</h3>

            <p>
              飲食ブランドのフランチャイズ展開を
              <br />
              通じて、新しい価値とサービスを提供します。
              <br /><br />
              地域に愛される店舗づくりを目指し、
              <br />
              挑戦し続ける事業を展開します。
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Service;