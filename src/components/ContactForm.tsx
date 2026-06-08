"use client";

import { useState, useRef } from "react";
import anime from "animejs";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    anime({
      targets: `.${styles.successMessage}`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: "easeOutExpo"
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>Связаться с нами</span>
          <h2 className={styles.sectionTitle}>Ваше мнение важно</h2>
          <p className={styles.sectionDesc}>
            Есть вопросы или предложения? Напишите нам!
          </p>
        </div>

        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={`${styles.successMessage} ${styles.visible}`}>
              <div className={styles.successIcon}>✓</div>
              <h3>Спасибо за ваше сообщение!</h3>
              <p>Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="example@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder="Ваше сообщение..."
                  rows={5}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Отправить сообщение
                <span className={styles.submitBtnArrow}>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
