import axios from "axios";
import React, { useRef } from "react";
import { Element } from "react-scroll";

const Contact = () => {
    const hendelname = useRef();
    const hendelemail = useRef();
    const hendelmessage = useRef();
    const hendelClick = (e) => {
        e.preventDefault();
        var name = hendelname.current.value;
        var email = hendelemail.current.value;
        var message = hendelmessage.current.value;

        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }

        const obj = {
            "name": name,
            "email": email,
            "message": message,
        }
        console.log(obj);
        axios.post('http://localhost:4000/contact', obj)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert("Message sent successfully!");
                    // Clear input fields
                    hendelname.current.value = "";
                    hendelemail.current.value = "";
                    hendelmessage.current.value = "";
                }
            })
            .catch(function (error) {
                console.error("Error sending message:", error);
                alert("Failed to send message.");
            })

    }
    return (
        <>
            <Element name="contact">
                <div className="contact-main">
                    <div className="container">
                        <div className="contact-main-inner">
                            <div className="title">
                                <h1>LET’S CONTACT</h1>
                            </div>
                            <div className="contact">
                                <form method="POST" onSubmit={hendelClick} encType="multipart/form-data">
                                    <div className="item">
                                        <input type="text" placeholder="name" name="name" ref={hendelname} />
                                    </div>
                                    <div className="item">
                                        <input type="text" placeholder="email" name="email" ref={hendelemail} />
                                    </div>
                                    <div className="item">
                                        <textarea name="message" placeholder="message" ref={hendelmessage}></textarea>
                                    </div>
                                    <div className="item send">
                                        <input type="submit" value="SEND" name="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contact;