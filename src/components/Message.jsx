import "../styles/message.css";
import messageImage from "../assets/ceo-message.JPG";
import { motion } from "framer-motion";

function Message() {
  return (
    <section className="message-section" id="message">
      <div className="message-container">

        {/* タイトル */}
        <motion.div
          className="message-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="message-top-line"></span>
          <p>MESSAGE FROM THE CEO</p>
          <span className="message-top-line"></span>
        </motion.div>

        {/* PC版：画像全体を表示 */}
        <motion.div
          className="message-photo message-pc"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={messageImage}
            alt="ZERO-ONE 代表挨拶"
            loading="lazy"
          />
        </motion.div>

        {/* スマホ版 */}
        <div className="message-sp">

          {/* 代表写真 */}
          <motion.div
            className="message-sp-photo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={messageImage}
              alt="ZERO-ONE代表"
              loading="lazy"
            />
          </motion.div>

          {/* メッセージ */}
          <motion.div
            className="message-sp-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="message-sp-label">
              OUR PHILOSOPHY
            </p>

            <h2>
              0から1へ、
              <br />
              そして、その先へ。
            </h2>

            <div className="message-sp-line"></div>

            <p>
              ZERO-ONEという名前には、
              「0から1を生み出す」という意味を込めています。
            </p>

            <p>
              しかし、私たちが大切にしているのは、
              それだけではありません。
            </p>

            <p>
              人生、何度失敗して0になったとしても、
              仲間と力を合わせれば、
              そこからまた「1」を作り出せる。
            </p>

            <p>
              何度でもリスタートできる。
              <br />
              何度でも挑戦できる。
            </p>

            <p>
              そんな想いを「ZERO-ONE」という名前に込めています。
            </p>

            <p>
              私たちは、失敗を恐れて立ち止まるのではなく、
              失敗さえも経験として力に変え、
              仲間と共に新しい価値を生み出していきます。
            </p>

            <p>
              これからもZERO-ONEは、
              一人ひとりの可能性を信じ、
              何事にも挑戦し続ける会社でありたいと思っています。
            </p>

            <div className="message-sp-sign">
              <span>ZERO-ONE 代表</span>
              <strong>廣瀬 冬依</strong>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Message;