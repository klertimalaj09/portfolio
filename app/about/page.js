import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Rreth Meje</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <Image
            src="/photo.jpeg"
            alt="My Avatar"
            width={192} 
            height={192}
            className="rounded-full object-cover border-4 border-gray-800"
          />
        </div>

        <div className="text-gray-200">
          <p className="text-xl mb-4">
            Përshendetje! Unë jam Klerti Malaj dhe studioj Inxhinieri Software në shkollën Hermann Gmeiner!
          </p>
          <p className="text-lg mb-4">
            Disa nga pasionet e mia janë teknologjia, AI, makinat dhe muzika. Më pëlqen të mësoj rreth teknologjive të reja dhe të zhvilloj projekte inovative. Qëllimi im është të kombinoj aftësitë e mia me pasionet dhe fushat e ndryshme, si inxhinieria, për të zhvilluar një impakt kuptimplotë në botë!
          </p>
          <p className="text-lg">
            Në kohën e lirë, më pëlqen të lexoj, dëgjoj muzikë dhe të luaj futboll.
          </p>
        </div>
      </div>
    </div>
  );
}
