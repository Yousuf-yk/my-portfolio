import "../index.css"

function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("working");
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("number"),
            message: formData.get("text")
        };
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
    };
    return (
    <>
        <section className="contact-box" id="contact">
            <h1 className="c-name">let's work together</h1>
            <p className="c-message">send me a message </p>
            <p className="c-info">Fill out the form</p>
        </section>
        <section className="c-inputs">
            <form onSubmit={handleSubmit} >
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