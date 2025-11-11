export default function Hero() {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Simplifying Loans for Everyone 💰
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get easy access to Home, Personal, and Business loans — guided by an experienced consultant.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
