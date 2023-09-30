import "./contact.css"

const Contact = () => {


    return (
        <section id="contact-outer" className="main">
            <header id="salutation">
                <div className="container">
                    <h2>Get in touch:</h2>
                    <p>My email is always open to inquiries about my work or job opportunities--feel free to drop me a
                        message!</p>
                </div>
            </header>

            <div className="form-container">
                <form method="post" action="https://formspree.io/f/mpznpdez">
                    <div className="fields">
                        <div className='row'>
                            <div className="name">Name<input type="text" placeholder="Name" /></div>
                            <div className="email">Email<input type="text" placeholder="Email" /></div>
                        </div>
                        <div className="message"><textarea name="message" placeholder="Message"></textarea></div>
                        <div className="actions">
                            <input type="submit" className="button" value="Send Message" />
                            <input type="reset" className="button alt" value="Clear Form" />
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact;
