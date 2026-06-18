import "../index.css"

function Contact() {
    return (
    <>
        <section className="contact-box">
            <h1 className="c-name">let's work together</h1>
            <p className="c-message">send me a message </p>
            <p className="c-info">Fill out the form</p>
        </section>
        <section className="c-inputs">
            <form action="" >
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="tel" placeholder="Number" name="number" />
                <textarea type="text" placeholder="textarea" name="text" required />
                <button type="submit">Submit</button>
            </form>
        </section>
    </>
    )
}

export default Contact;