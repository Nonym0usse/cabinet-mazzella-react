import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    const sitemapLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Soins', path: '/soins' },
        { name: 'Cabinet', path: '/cabinet' },
        { name: 'Équipe', path: '/equipe' },
        { name: 'Contact', path: '/contact' },
        {
            name: 'Prendre RDV en ligne',
            path: 'https://www.doctolib.fr/dentiste/cannes/vincent-mazzella-di-bosco',
            external: true,
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-red-400 mb-6 tracking-wide">Plan du site</h1>
                <ul className="space-y-4">
                    {sitemapLinks.map((link, index) => (
                        <li key={index}>
                            {link.external ? (
                                <a
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-600 hover:underline text-lg"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="text-teal-600 hover:underline text-lg"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sitemap;