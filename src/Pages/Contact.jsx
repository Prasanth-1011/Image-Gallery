function Contact() {
    return (
        <>
            <section className="contact">
                <span className="contact__message">
                    <p>Got Something On Your Mind?</p>
                    <p>Drop Your Message</p>
                </span>

                <input type="text" className="contact__input" placeholder="Enter Your Name" />
                <input type="email" className="contact__input" placeholder="Enter Your Mail" />
                <textarea className="contact__textarea" rows={10} placeholder="Enter Your Message"></textarea>
                <button type="button">Send Message</button>
            </section>
        </>
    )
}

export default Contact;