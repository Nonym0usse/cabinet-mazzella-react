import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoSection from '../components/VideoSection';

const Home = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <VideoSection videoUrl="videos/mainvideo.mp4" title={"Une passion et une expertise"} subtitle={"au service de nos patients"} />



            <div className="bg-gray-100 py-16 px-4 md:px-0">
                <div className="container mx-auto text-center mb-12">
                    <p className="text-red-400 uppercase mb-2">Cabinet dentaire di Bosco Mazzella</p>
                    <h1 className="text-5xl font-bold text-cyan-700">Une <span className='text-red-400'>équipe </span>à votre écoute</h1>
                    <p className="text-lg text-gray-600 mt-4 px-4 md:px-0">
                        Découvrez nos services professionnels pour un sourire éclatant
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/cabinet">
                            <img className="rounded-t-lg min-h-[300px]" src="/images/cabinet-bg2.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/cabinet">
                                <h5 className="mb-2 text-2xl tracking-tight text-cyan-700">Bienvenue au cabinet Dentaire du Dr. Mazzella di-Bosco</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Découvrez les technologies de pointe que nous utilisons pour des soins dentaires avancés, des systèmes d'implantologie innovants aux outils de radiologie de dernière génération.
                            </p>
                            <a href="/cabinet" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Voir plus
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="/equipe">
                            <img className="rounded-t-lg min-h-[300px]" src="/images/team.jpg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="/equipe">
                                <h5 className="mb-2 text-2xl tracking-tight text-cyan-700">L'équipe</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Rencontrez notre équipe d'experts dédiée à vous offrir les meilleurs soins dentaires. Chacun de nos professionnels apporte une expertise unique pour répondre à vos besoins.
                            </p>
                            <a href="/equipe" className="inline-flex items-center px-3 py-2 mt-7 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Voir plus
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-sm rounded-lg">
                        <a href="#">
                            <img className="rounded-t-lg min-h-[200px]" src="/images/horaires.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 px-4 md:px-0">
                {/* Centered Text */}
                <div className="container mx-auto text-center mb-12">
                    <p className="text-red-400 uppercase mb-2">Principales prestations</p>
                    <h1 className="text-5xl font-bold text-cyan-700">Nos <span className='text-red-400'>services</span></h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Découvrez nos services professionnels pour un sourire éclatant
                    </p>
                </div>

                {/* Row of Images with Text Below */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* First Image and Text */}
                    <div className="flex flex-col items-center">
                        <img
                            src="images/soins.png"
                            alt="Service 1"
                            className="w-30 h-30 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Interventions classiques</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Détartrage, extraction, dévitalisation, traitement des carries.
                        </p>
                    </div>

                    {/* Second Image and Text */}
                    <div className="flex flex-col items-center">
                        <img
                            src="images/implantologie.png"
                            alt="Service 2"
                            className="w-30 h-30 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Implantologie</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Des solutions fiables et durables pour remplacer vos dents manquantes.
                        </p>
                    </div>

                    {/* Third Image and Text */}
                    <div className="flex flex-col items-center">
                        <img
                            src="images/paradontologie.png"
                            alt="Service 3"
                            className="w-30 h-30 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Endodontie</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Surfaçage et greffe.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16">

                {/* Row of Images with Text Below */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* First Image and Text */}
                    <div className="flex flex-col items-center">
                        <img
                            src="images/alignementdentaire.png"
                            alt="Service 1"
                            className="w-30 h-30 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Alignement dentaire</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Gouttières transparentes.
                        </p>
                    </div>

                    {/* Second Image and Text */}
                    <div className="flex flex-col items-center">
                        <img
                            src="images/prothese.png"
                            alt="Service 2"
                            className="w-30 h-30 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Prothèses dentaires
                        </h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Fixes et amovibles.
                        </p>
                    </div>

                    {/* Third Image and Text */}
                    <div className="flex flex-col items-center">
                        <img
                            src="images/pathologie.png"
                            alt="Service 3"
                            className="w-30 h-30 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Chirurgie</h2>
                        <p className="text-gray-600 mt-2 text-center">
                            Dermatologie buccale.
                        </p>
                    </div>
                </div>
            </div>


            <div
                className="relative h-[60vh] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('images/cabinet-bg.jpg')" }}  // Set your image URL here
            >
                <div className="container relative z-10 mx-auto h-full flex flex-col items-start justify-center">
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-red-400 uppercase mb-2 px-4 md:px-0">Équipe professionnelle</p>
                        <p className="text-white text-xl md:text-2xl font-bold text-left px-4 md:px-0">
                            Le cabinet est doté d’un matériel neuf sur l’ensemble de son fonctionnement qui apporte une ergonomie, une technicité et donc un confort de travail pour le patient et le praticien. L’attention apportée à la décoration du cabinet permet aux patients de se sentir à l’aise dans un cadre chaleureux.
                        </p>

                        <div className="flex flex-row space-x-4 mt-4 px-4 md:px-0">
                            <Link to="/soins" className="text-gray-50 bg-cyan-600 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">
                                Nos soins
                            </Link>
                            <Link to="/contact" className="text-neutral-400 bg-slate-50 hover:bg-gray-700 hover:text-white px-4 py-3 rounded-md text-lg font-medium">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Overlay to darken the image for better text visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>

            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                        onClick={() => handleTabClick("tab1")}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold ${activeTab === "tab1" ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-300"
                            }`}
                    >
                        Soins
                    </button>
                    <button
                        onClick={() => handleTabClick("tab2")}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold ${activeTab === "tab2" ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-300"
                            }`}
                    >
                        Chirurgie
                    </button>
                    <button
                        onClick={() => handleTabClick("tab3")}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold ${activeTab === "tab3" ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-300"
                            }`}
                    >
                        Blanchiment
                    </button>
                    <button
                        onClick={() => handleTabClick("tab4")}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold ${activeTab === "tab4" ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-300"
                            }`}
                    >
                        Alignement dentaire
                    </button>
                    <button
                        onClick={() => handleTabClick("tab5")}
                        className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold ${activeTab === "tab5" ? "bg-red-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-300"
                            }`}
                    >
                        Occlusodontie
                    </button>
                </div>

                {activeTab === "tab1" && (
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 px-4 md:px-0">
                        {/* Text Section for Tab 1 */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Soins</h2>
                            <div className="text-lg text-gray-600">
                                <ul>
                                    <li className='mt-5'>
                                        <strong>Traitement de caries uniquement par technique « collée » à des fins
                                            esthétiques (couleur dent) :</strong>
                                        <ul>
                                            <li>Les composites directs pour de faibles volumes</li>
                                            <li>Par technique d’onlay ou inlay en céramique (technique indirecte faisant
                                                appel au prothésiste) lorsqu’un point de contact est concerné avec la dent
                                                adjacente.</li>
                                        </ul>
                                    </li>
                                    <li className='mt-5'>
                                        <strong>Détartrage en profondeur :</strong> Avec des inserts de parondontologie très
                                        fins (ultrasons) pour réduire le désagrément du patient, associé à un aéropolissage
                                        systématique (bicarbonate projeté sous pression qui élimine toutes les tâches
                                        causées par le café, cigarettes, thé et assure un nettoyage très précis et complet
                                        après les ultrasons).
                                    </li>
                                    <li className='mt-5'>
                                        <strong>Endodontie par rotation continue :</strong> Deux cas :
                                        <ul>
                                            <li>Dévitalisation dès lors que le nerf est touché après traitement d’une carie
                                                ou sur dent nécrosée.</li>
                                            <li>Reprise de traitement canalaire sur dent déjà dévitalisée en présence d’une
                                                infection apicale.</li>
                                        </ul>
                                    </li>
                                    <li className='mt-5'>
                                        <strong>Prothèse dentaire :</strong> PLUS DE METAL au cabinet depuis 20 ans
                                        uniquement des couronnes 100% céramique :
                                        <ul>
                                            <li>Couronne ou bridge scellés</li>
                                            <li>Facettes collées céramique à des fins esthétiques</li>
                                            <li>Couronne sur implant scellée ou transvissée</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <img
                                src="images/soins-photo.jpg"
                                alt="Tab 1"
                                className="w-auto h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "tab2" && (
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Chirurgie</h2>
                            <div className="text-lg text-gray-600">
                                <ul>
                                    <li className='mt-5'>
                                        <strong>Comblements osseux :</strong>
                                        <p className='mt-5'><strong>Ps :</strong> Utilisation systématique d’os humain
                                            (traçabilité avec la
                                            société Biobank) ou bovin (avec la société Bio Os2).</p>
                                        <ul>
                                            <li className='mt-5'><strong>Systématique après extraction</strong> (excepté les dents de
                                                sagesse) : Afin de maintenir le niveau osseux, soit pour de futurs implants,
                                                soit dans la confection d’un bridge dans le but de conserver l’anatomie
                                                initiale.</li>
                                            <li className='mt-5'><strong>Ps :</strong> Utilisation du PRF (concentré plaquettaire composé de
                                                fibrines, de leucocytes et de facteurs de croissance). Le PRF est utilisé
                                                systématiquement au cabinet lors des chirurgies pour être soit associé à de
                                                l’os pour former un pack osseux stable et combler une alvéole, soit pour
                                                fabriquer des membranes naturelles qui accélèrent la cicatrisation des sites
                                                de chirurgies.</li>
                                        </ul>
                                    </li>
                                    <li className='mt-5'><strong>Augmentation de crêtes :</strong> On peut aujourd’hui
                                        compenser une perte de
                                        volume osseux après un édentement prolongé par des techniques d’apport osseux
                                        latérales ou verticales (la technique varie en fonction du site, voir cas par cas).
                                    </li>
                                    <li className='mt-5'>
                                        <strong>Chirurgie parodontale :</strong>
                                        <ul>
                                            <li>Le lambeau d’assainissement classique dans le cas de problèmes parodontaux
                                                sévères.</li>
                                            <li>La chirurgie « à rétro » par voie latérale lors d’infection de racine sur
                                                dent accessible.</li>
                                            <li>Résection de crêtes, remodelage osseux par « piézo » à des fins
                                                pré-prothétiques.</li>
                                            <li>Régénérations parodontales.</li>
                                            <li>Greffes gingivales.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="images/chirurgie-photo.jpg"
                                alt="Tab 2"
                                className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "tab3" && (
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Blanchiment</h2>
                            <div className="text-lg text-gray-600">

                                <li className='mt-5'>
                                    <strong>Éclaircissement dentaire</strong>
                                    <p className='mt-5'>Nettoyage en surface de l’émail par
                                        action d’une molécule, H2O2 (eau oxygénée) sous la forme de peroxyde d’hydrogène qui
                                        casse les molécules encrassant l’émail</p>

                                </li>
                                <li className='mt-5'>
                                    <strong>Augmentation de crêtes :</strong> On peut aujourd’hui
                                    compenser une perte de
                                    volume osseux après un édentement prolongé par des techniques d’apport osseux
                                    latérales ou verticales (la technique varie en fonction du site, voir cas par cas).
                                </li>

                                <li className='mt-5'>
                                    <strong>Système de blanchiment au fauteuil</strong> : Gain de
                                    temps et d’efficacité sans douleur et sans risque de sensibilité pour les dents
                                </li>

                                <li className='mt-5'>
                                    <strong>Traitement d’Alignement Dentaire (Orthodontie par
                                        Gouttières Thermoformées)</strong></li>
                                <ul>
                                    <li className='mt-5'>Système français « Smilers ».</li>
                                    <li className='mt-5'>Avantages : Gouttières invisibles, fines (élocution non perturbée) avec ou sans
                                        taquet collé. Souplesse du traitement avec gestion d’arcade séparée si nécessaire.
                                    </li>
                                    <li className='mt-5'>Principe : Système avec un déplacement « lent » des dents, évitant des contraintes
                                        sur l’os, non douloureux pour le patient lors du port des gouttières.</li>
                                </ul>

                                <ul className='mt-5'>
                                    <li>Gouttières de déspasmation lors de bruxisme articulaire.</li>
                                    <li>Analyse occlusale lors de troubles articulaires.</li>
                                    <li>Réglages occlusaux par coronoplastie.</li>
                                </ul>

                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="images/blanchiment-photo.jpg"
                                alt="Tab 2"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}

                {activeTab === "tab4" && (
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Alignement dentaire</h2>
                            <div className="text-lg text-gray-600">

                                <li className='mt-5'>
                                    <strong>Éclaircissement dentaire</strong>
                                    <p className='mt-5'>Nettoyage en surface de l’émail par
                                        action d’une molécule, H2O2 (eau oxygénée) sous la forme de peroxyde d’hydrogène qui
                                        casse les molécules encrassant l’émail</p>

                                </li>
                                <li className='mt-5'>
                                    <strong>Augmentation de crêtes :</strong> On peut aujourd’hui
                                    compenser une perte de
                                    volume osseux après un édentement prolongé par des techniques d’apport osseux
                                    latérales ou verticales (la technique varie en fonction du site, voir cas par cas).
                                </li>

                                <li className='mt-5'>
                                    <strong>Système de blanchiment au fauteuil</strong> : Gain de
                                    temps et d’efficacité sans douleur et sans risque de sensibilité pour les dents
                                </li>

                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="images/alignement-photo.jpg"
                                alt="Tab 2"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}


                {activeTab === "tab5" && (
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Occlusodontie</h2>
                            <div className="text-lg text-gray-600">

                                <li className='mt-5'>
                                    <strong>Éclaircissement dentaire</strong>
                                    <p className='mt-5'>Nettoyage en surface de l’émail par
                                        action d’une molécule, H2O2 (eau oxygénée) sous la forme de peroxyde d’hydrogène qui
                                        casse les molécules encrassant l’émail</p>

                                </li>
                                <li className='mt-5'>
                                    <strong>Augmentation de crêtes :</strong> On peut aujourd’hui
                                    compenser une perte de
                                    volume osseux après un édentement prolongé par des techniques d’apport osseux
                                    latérales ou verticales (la technique varie en fonction du site, voir cas par cas).
                                </li>

                                <li className='mt-5'>
                                    <strong>Système de blanchiment au fauteuil</strong> : Gain de
                                    temps et d’efficacité sans douleur et sans risque de sensibilité pour les dents
                                </li>

                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="images/equipement.jpg"
                                alt="Tab 2"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                )}
            </div>


        </>
    );
};

export default Home;