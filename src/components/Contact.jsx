import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-inner">

        <p className="contact-label">
          CONTACT
        </p>

        {/* PC表示 */}
        <h2 className="pc-only">
          お問い合わせ
        </h2>

        {/* スマホ表示 */}
        <h2 className="sp-only">
          お問い合わせ
        </h2>

        {/* PC表示 */}
        <p className="contact-text pc-only">
          事業に関するご相談やご依頼など、
          <br />
          お気軽にお問い合わせください。
        </p>

        {/* スマホ表示 */}
        <p className="contact-text sp-only">
          事業に関する
          <br />
          ご相談やご依頼など、
          <br />
          お気軽に
          <br />
          お問い合わせください。
        </p>

        <div className="contact-buttons">

          <a href="tel:09011433008" className="contact-phone">
            電話で問い合わせる
          </a>

          <a href="mailto:zero.one02018@gmail.com" className="contact-mail">
            メールで問い合わせる
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;