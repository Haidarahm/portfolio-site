"use client"
import styles from "./ContactSection.module.scss";
import { GlobeDemo } from "./ui/GlobeDemo";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    setMessage(null);
    setMessageType(null);

    emailjs
      .sendForm(
        "service_mbhvtqr",    // e.g., "service_xxx"
        "template_i79h9t1",   // e.g., "template_xxx"
        form.current,
        "VRj9cTVUcGD2DX7XU"     // e.g., "user_xxx" or "public_xxx"
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          setMessageType('success');
          form.current?.reset();
        },
        (error) => {
          setMessage("Failed to send message. Please try again later.");
          setMessageType('error');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.contactSection}>
      {/* Left Section - Contact Form */}
      <div className={styles.formContainer}>
        <h2>Contact Me</h2>

        <form ref={form} onSubmit={sendEmail}>
          {message && (
            <div
              className={`${styles.formMessage} ${messageType === 'success' ? styles.formMessageSuccess : styles.formMessageError}`}
            >
              {message}
            </div>
          )}
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message here..."
              required
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? (
              <span className={styles.loader}>
                <svg width="20" height="20" viewBox="0 0 50 50" style={{marginRight: 8}}>
                  <circle cx="25" cy="25" r="20" fill="none" stroke="#fff" strokeWidth="5" strokeDasharray="31.4 31.4" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
                  </circle>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      {/* Right Section - Globe */}
      <div className={styles.globeContainer}>
        <div className={styles.globeWrapper}>
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
}
