export default function Aftesite() {
  const skills = [
    { name: "Arkitekture Kompjuterike", level: 85 },
    { name: "Mendim Kritik", level: 85 },
    { name: "C++", level: 70 },
    { name: "Zhvillim Software", level: 75 },
    { name: "Zhvillim Web", level: 85 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Aftësitë</h1>
      <p className="text-lg text-gray-300 mb-8">
        Këtu janë aftësitë që kam zhvilluar:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-200">{skill.name}</h2>

            <div className="flex justify-between text-gray-400 text-sm">
              <span>I Ulët</span>
              <span>I Mesëm</span>
              <span>I Lartë</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-4 relative">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
