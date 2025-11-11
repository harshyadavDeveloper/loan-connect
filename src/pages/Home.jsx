import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  const services = [
    { title: "Home Loans", description: "Get the best deals on home loans with expert guidance.", icon: "🏠" },
    { title: "Personal Loans", description: "Flexible personal loans tailored to your needs.", icon: "💳" },
    { title: "Business Loans", description: "Funding solutions for your growing business.", icon: "🏢" },
  ];

  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
