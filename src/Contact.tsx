import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export default function Contact() {
    const [state, handleSubmit] = useForm("xbdoezwa");
    if (state.succeeded) {
        return <p>Thanks for contacting me, I will get back to you soon!</p>;
    }
    return (
        <><h1 className="contact-title">Contact</h1>
        <form style={{ display: "flex", flexDirection: "column", gap: "1em" }} onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="Include your email if you'd like a reply (optional)"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                style ={{ minHeight: "150px" }}
                id="message"
                name="message"
                placeholder="Feel free to ask me questions, or just say hi!"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} style ={{width: "10em", margin: "0 auto"}}>
                Send
            </button>
        </form>
        {/* Obfuscated email to prevent scraping by bots */}
        <p style={{marginTop: "5em"}}>Or if you prefer, you can email me directly at <a href='&#109;&#97;ilto&#58;s%74&#37;6&#53;p&#104;&#101;&#110;&#46;st&#101;%66ani&#37;&#54;4i&#115;&#64;g%&#54;&#68;ai%6C&#46;&#99;o&#109;'>stephen&#46;stefa&#110;i&#100;is&#64;gm&#97;il&#46;&#99;om</a></p> 
        <span className='spacer'></span>
        </>
    );
}