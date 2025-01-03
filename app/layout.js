import './globals.css';
import NavLink from './navlink';

export const metadata = {
  title: 'Portofoli',
  description: 'Një ekspozitë e projekteve dhe aftësive të mia.',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Portofoli Im</h1>
            <div className="flex space-x-6">
              <NavLink href="/">Faqja Kryesore</NavLink>
              <NavLink href="/about">Rreth Meje</NavLink>
              <NavLink href="/aftesite">Aftësitë</NavLink>
              <NavLink href="/projects">Projektet</NavLink>
              <NavLink href="/kontakti">Kontakti</NavLink>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
