import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wtqjrj9",     // your service ID
        "template_nirstsk",    // your template ID
        formData,
        "EhUlqtZhY7QAXyu1E"    // your public key
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ from_name: "", reply_to: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed:", err);
        toast.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-16 px-6 max-w-3xl mx-auto text-center">
      {/* Hot Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-8">
        Have questions or want to apply for a loan? Send me a message below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          value={formData.reply_to}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
