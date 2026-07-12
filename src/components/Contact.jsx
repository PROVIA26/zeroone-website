import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-inner">

        <p className="contact-label">
          CONTACT
        </p>

        <h2>
          お問い合わせ
        </h2>

        <p className="contact-text">
          事業に関するご相談やご依頼など、
          <br />
          お気軽にお問い合わせください。
        </p>


        <div className="contact-buttons">

          <a href="tel:0000000000" className="contact-phone">
            電話で問い合わせる
          </a>

          <a href="mailto:info@example.com" className="contact-mail">
            メールで問い合わせる
          </a>

        </div>


      </div>

    </section>
  );
}

export default Contact;