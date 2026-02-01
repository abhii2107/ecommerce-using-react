import { useState } from "react"

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({
            ...prev,
            [name]: value,//email: "abhishek@gmail.com"
        }))
    }

   const handleFormSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/mzdvbddw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });

  if (response.ok) {
    alert("Message sent successfully!");
  }
};

    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27851.48541910252!2d77.01291049999999!3d29.240149250000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc6018e7f421f%3A0x7523ff575254283c!2sSamalkha%2C%20Haryana!5e0!3m2!1sen!2sin!4v1769907106711!5m2!1sen!2sin" width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="container">
                <div className="card">

                    <form onSubmit={handleFormSubmit} >
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={contact.username}


                        />
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name="email"
                            required
                            autoComplete="off"
                            value={contact.email}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            type="text"
                            required
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={contact.message}
                            rows="6"
                        ></textarea>
                        <div className="clearfix">
                            <button type="submit" className="btn">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}