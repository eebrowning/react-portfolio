

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
            <div class="content style4 featured">
                <div class="container medium">
                    <form method="post" action="https://formspree.io/f/mpznpdez">
                        <div class="row gtr-50">
                            <div class="col-6 col-12-mobile"><input type="text" placeholder="Name" /></div>
                            <div class="col-6 col-12-mobile"><input type="text" placeholder="Email" /></div>
                            <div class="col-12"><textarea name="message" placeholder="Message"></textarea></div>
                            <div class="col-12">
                                <ul class="actions special">
                                    <li><input type="submit" class="button" value="Send Message" /></li>
                                    <li><input type="reset" class="button alt" value="Clear Form" /></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
