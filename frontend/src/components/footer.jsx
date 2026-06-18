import "../index.css"

// Source - https://stackoverflow.com/a/67396295
// Posted by Winter
// Retrieved 2026-06-13, License - CC BY-SA 4.0

let currentDate = new Date();
let year = currentDate.getFullYear();



function Footer(){
    return(
        <footer className="footer-content">
            <p className="copyright-title"> copyright © by yusuf khan {year}</p>
            {/* <p className="dynamic-year" > {year} </p> */}
        </footer>
    );
}

export default Footer;