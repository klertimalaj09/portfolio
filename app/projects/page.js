import Image from 'next/image';

const projects = [
  { title: 'Car Rental Program using Angular', description: 'A car rental website made by using Angular. Fully functional UI, which stores data locally and helps coordinate bookings on different dates with price calculation.', image: '/foto1.jpg' },
  { title: 'Konkursi TIS: Sistemi Inteligjent i Monitorimit të Sigurisë Rrugore (SIMS)', description: 'Participation in Transport, Innovation and Road Safety technology competition.\nSistemi Inteligjent I Monitorimit të Sigurisë Rrugore synon ne permiresimin e sigurise rrugore dhe qarkullimit, duke ulur numrin e shkeljeve dhe ndotjes akustike.', image: '/foto2.jpg' },
];

export default function Projects() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Projektet e Mia</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <div className="mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
