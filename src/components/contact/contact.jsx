import React, { useState, useEffect } from "react";
import Title from "../layouts/title";
import Map from "./maps";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormData({
            name: "",
            email: "",
            message: "",
        });

        try {
            const response = await fetch("https://formspree.io/f/xbjvzkky", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success, e.g., show a success message
                console.log("Form submitted successfully");
            } else {
                // Handle error, e.g., show an error message
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };



    return (
        <section id="contact" className="container mx-auto py-20 px-3 text-black">
            <div className="text-center mt-8 px-8 sm:px-14">
                <Title title="Contact Me" desc="get in touch" />

                <div className="mt-16 flex flex-col md:flex-row gap-6 max-w-5xl md:p-6 p-2 rounded-lg mx-auto justify-center text-center">
                    <Map value="block" value2="hidden" />
                    <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={10}
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        <div className="flex justify-center text-center"><button className="btn-primary w-fit hover:bg-[cyan] hover:text-black" type="submit">
                            Send Message
                        </button></div>
                    </form>
                    <Map value="hidden" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
