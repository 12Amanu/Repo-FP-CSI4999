// This Contact component provides contact information and ways for users to connect with the Mashed Potatoes team,
// fostering interaction and feedback.
import React from "react"; //import the React library into the file.
import "./Contact.css"; // Import CSS for styling the Contact

function Contact() {
  return (
    <div className="contact-us">
      <h1>Contact Us:</h1>
      <h3>We would Love to Hear from you!</h3>
      <br />
      <p>
        Whether you have a burning question, a brilliant suggestion, or just
        want to share your favorite piece of media, the Mashed Potatoes team is
        here to connect with you.
      </p>
      <br />
      <h3>Feel free to reach out if: </h3>
      * You’ve found a hidden gem we should add to our archive.
      <br />* You have ideas to make Mashed Potatoes even better.
      <br />* You need help navigating our platform or have feedback for us.
      <br />
      <h2>Ways to Reach Us: </h2>
      📧 Email Us: Got something to share? Drop us a message at
      contact@mashedpotatoes.com.
      <br />
      💬 Connect on Social Media: Follow, message, or tag us to join the
      conversation!
      <br />
      <b>Twitter: @MashedPotatoesHQ</b>
      <br />
      <b>Instagram: @MashedPotatoesMedia </b>
      <br />
      <b>Facebook: Mashed Potatoes Community</b>
      <br />
      <b>LinkedIn: Mashed Potatoes Official</b>
      <br />
      <b> TikTok:@MashedPotatoesVibes</b>
      <br />
      <h2>📍Visit Us:</h2>
      <p>
        &nbsp;If you’re in town, stop by our headquarters: 123 Media Lane,
        Creative City, Storyland
      </p>
      <h3>Let’s Keep in Touch!</h3>
      <p>
        Have a media-related question or a unique recommendation? Use the form
        below to get in touch, and we’ll get back to you faster than you can say
        "extra gravy!"
      </p>
      <p>
        At Mashed Potatoes, your voice matters. After all, this platform is all
        about celebrating the stories you love. So go ahead – reach out and
        let’s make something amazing together!
      </p>
    </div>
  );
}

export default Contact;
