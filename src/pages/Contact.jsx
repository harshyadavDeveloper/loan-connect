export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-8">
        Have questions or want to apply for a loan? Send me a message below.
      </p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg"></textarea>
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
