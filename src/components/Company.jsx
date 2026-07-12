import "../styles/company.css";
import { motion } from "framer-motion";

function Company() {
  const rows = [
    ["会社名", "ZERO-ONE"],
    ["事業内容", "運送事業・飲食店FC事業"],
    ["代表", "廣瀬 冬依"],
    ["所在地", "滋賀県草津市草津1丁目2-2"],
    ["設立", "2025年　設立"],
  ];

  return (
    <section className="company" id="company">

      <div className="company-inner">

        <motion.p
          className="company-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          COMPANY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          会社概要
        </motion.h2>

        <div className="company-table">

          {rows.map((row, index) => (
            <motion.div
              className="company-row"
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <span>{row[0]}</span>
              <p>{row[1]}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Company;