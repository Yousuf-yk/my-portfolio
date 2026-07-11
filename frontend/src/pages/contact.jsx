import "../index.css";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt, FaLocationDot } from "react-icons/fa6";
// import { HiOutlineGlobeAlt } from "react-icons/hi2";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("number"),
      message: formData.get("text"),
    };

    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <>
      <section className="contact-section" id="contact">

        <div className="contact-heading">
          <h1 className="text-gradient">Let's Work Together</h1>
          <p>
            Have an idea or project? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h2>Contact Information</h2>

            <div className="info-box">
              {/* <MdEmail /> */}
              <div>
                <h4>Email</h4>
                <p>yk0574292@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              {/* <FaPhoneAlt /> */}
              <div>
                <h4>Phone</h4>
                <p>+91 **********</p>
              </div>
            </div>

            <div className="info-box">
              {/* <FaLocationDot /> */}
              <div>
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </div>
            </div>

            <div className="info-box">
              {/* <HiOutlijneGlobeAlt /> */}
              <div>
                <h4>Availability</h4>
                <p>Open for Freelance & Remote Work</p>
              </div>
            </div>

          </div>

          <div className="contact-form">

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="contact-input"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="contact-input"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                name="number"
                className="contact-input"
              />

              <textarea
                placeholder="Tell me about your project..."
                name="text"
                className="contact-input"
                required
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;