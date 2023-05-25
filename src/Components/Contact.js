function Contact() {
    return ( 
        <div>
            <div className="contact">
                <div>
                    <h2>Contact Me</h2>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>
                <div className="contact-contents">
                    <form action="#" method="POST" >
                        <div>
                            <label htmlFor="Name">Name</label>
                            <input type="text" placeholder="Enter Your Name" id="Name" autoComplete="off" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter Your Email" id="email" autoComplete="off" name="email" required/>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="Message" id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                        </div>
                        <button>Submit</button>
                    </form>

                
                </div>
            </div>
        </div>
     );
}

export default Contact;