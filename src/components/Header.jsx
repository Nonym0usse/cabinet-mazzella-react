import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-cyan-800 py-1">
                <div className="container mx-auto hidden md:flex justify-between">
                    <div className="md:w-1/2">
                        <div className="flex items-center space-x-2">
                            <ClockIcon className="h-6 w-6 text-gray-50" />
                            <p className="text-gray-50 font-extralight">OUVERTURE : Du lundi au vendredi</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-end items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="h-6 w-6 text-gray-50" />
                            <p className="text-gray-50 font-extralight">04 93 39 10 00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-6 w-6 text-gray-50" />
                            <p className="text-gray-50 font-extralight">selarlmdb@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-6 w-6 text-gray-50" />
                            <p className="text-gray-50 font-extralight">3 Rue des Mimosas, 06400 Cannes</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <Link to="/" className="text-neutral-400 font-bold text-xl">
                                Cabinet dentaire Dr. Mazzella Di Bosco
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Accueil
                                </Link>
                                <Link
                                    to="/soins"
                                    className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Soins
                                </Link>
                                <Link
                                    to="/cabinet"
                                    className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Cabinet
                                </Link>
                                <Link
                                    to="/equipe"
                                    className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Équipe
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </Link>

                                <a href="https://www.doctolib.fr/dentiste/cannes/vincent-mazzella-di-bosco" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-cyan-700 text-white font-extralight py-2 px-4 rounded uppercase tracking-widest w-full">
                                        Prendre rdv en ligne
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                            >
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Accueil
                            </Link>
                            <Link
                                to="/soins"
                                className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Soins
                            </Link>
                            <Link
                                to="/cabinet"
                                className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Cabinet
                            </Link>
                            <Link
                                to="/contact"
                                className="text-neutral-400 tracking-widest hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </Link>
                            <a href="https://www.doctolib.fr/dentiste/cannes/vincent-mazzella-di-bosco" target="_blank" rel="noopener noreferrer">
                                <button className="bg-cyan-700 text-white font-extralight py-2 px-4 rounded uppercase tracking-widest w-full">
                                    Prendre rdv en ligne
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;