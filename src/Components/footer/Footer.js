import "./footer.css"

const Footer = () => {


    return (
        <section id="footer-outer">
            <footer id="footer">
                <ul className="icons">
                    <li>
                        <a href="https://www.linkedin.com/in/eebrowning/" target="_blank" className="icon brands fa-linkedin"
                            rel="noopener noreferer"></a>
                    </li>
                    <li>
                        <a href="https://angel.co/u/ethan-browning" target="_blank" className="icon brands fa-angellist"
                            rel="noopener noreferer"></a>
                    </li>
                    <li>
                        <a href="mailto:eebrowning828@gmail.com" target="_blank" className="icon fa fa-envelope"
                            rel="noopener noreferer"></a>
                    </li>
                    <li>
                        <a href="https://github.com/eebrowning" target="_blank" className="icon brands fa-github"
                            rel="noopener noreferer"></a>
                    </li>
                </ul>
            </footer>
        </section>
    )
}

export default Footer;
