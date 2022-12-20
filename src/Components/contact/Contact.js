import "./contact.css"

const Contact = () => {


    return (
        <section id="contact-outer" class="main">
            <header id="salutation">
                <div class="container">
                    <h2>Get in touch:</h2>
                    <p>My email is always open to inquiries about my work or job opportunities--feel free to drop me a
                        message!</p>
                </div>
            </header>

            <div class="form-container">
                <form method="post" action="https://formspree.io/f/mpznpdez">
                    <div class="fields">
                        <div class='row'>
                            <div class="name"><input type="text" placeholder="Name" /></div>
                            <div class="email"><input type="text" placeholder="Email" /></div>
                        </div>
                        <div class="message"><textarea name="message" placeholder="Message"></textarea></div>
                        <div class="actions">
                            <input type="submit" class="button" value="Send Message" />
                            <input type="reset" class="button alt" value="Clear Form" />
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact;
