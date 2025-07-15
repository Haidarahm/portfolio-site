// components/ContactSection.tsx
import styles from "./ContactSection.module.scss";
import { GlobeDemo } from "./ui/GlobeDemo";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      {/* Left Section - Contact Form */}
      <div className={styles.formContainer}>
        <h2>Contact Me</h2>

        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section - Globe */}
      <div className={styles.globeContainer}>
        <div className={styles.globeWrapper}>
          <GlobeDemo />
        </div>
      </div>
    </section>
  );
}
