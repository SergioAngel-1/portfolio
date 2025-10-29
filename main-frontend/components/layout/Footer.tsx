'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { href: '/', label: 'Inicio' },
      { href: '/servicios', label: 'Servicios' },
      { href: '/blog', label: 'Blog' },
      { href: '/contacto', label: 'Contacto' },
    ],
    recursos: [
      { href: 'https://portfolio.sergioja.com', label: 'Portfolio', external: true },
      { href: '/privacidad', label: 'Privacidad' },
      { href: '/terminos', label: 'Términos' },
    ],
  };

  const socialLinks = [
    { href: 'https://github.com/sergiojaregui', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/sergiojaregui', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/sergiojaregui', icon: Twitter, label: 'Twitter' },
    { href: 'mailto:contacto@sergioja.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold">
                Sergio<span className="text-primary-400">Ja</span>
              </div>
            </Link>
            <p className="text-dark-300 mb-6 max-w-md">
              Desarrollo de soluciones tecnológicas que combinan ingeniería, automatización y estrategia para generar valor real.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-300 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-dark-400 text-sm">
            © {currentYear} Sergio Jáuregui. Todos los derechos reservados.
          </p>
          <p className="text-dark-400 text-sm">
            Hecho con ❤️ en Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
