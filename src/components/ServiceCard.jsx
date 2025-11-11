export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
