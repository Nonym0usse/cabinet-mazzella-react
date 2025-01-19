import { CheckIcon } from '@heroicons/react/24/outline';
import VideoSection from '../components/VideoSection';
import { useState } from 'react';
import TeamPerson from '../components/TeamPerson';

const Soins = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <VideoSection videoUrl="videos/soins.mp4" title={"Notre expertise au"} subtitle={"service de votre sourire"} />

            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mt-4">
                    <div className="md:w-1/3 text-center md:text-left">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire Mazzella di Bosco</p>
                        <h2 className="text-3xl font-bold text-teal-600 text-teal-600 mb-4">Des soins de qualité !</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Au sein du cabinet nous proposons, des soins
                            de qualité dans tous les domaines d’actes dentaires des plus simples (détartrage avec
                            aéropolissage, compposites esthétiques …) aux plus complexes ( Régénération osseuse
                            guidée (ROG), implantologie …).
                        </p>
                    </div>
                    <div className="flex justify-center md:w-1/3">
                        <img
                            src="images/cabinet-machine.jpg"
                            alt="Vincent Mazzella di Bosco"
                            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-cover rounded"
                        />
                    </div>
                    <div className="flex justify-center md:w-1/3">
                        <img
                            src="images/scanner.jpg"
                            alt="Déborah"
                            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-cover rounded"
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 mt-4">
                    <div className="md:w-1/2">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire Mazzella di Bosco</p>
                        <p className="text-lg text-gray-600 mb-4">
                            Liste non exhaustive des soins dentaires que nous proposons au cabinet :
                        </p>
                        <div className="text-lg text-gray-600 space-y-4">
                            <ul className="flex flex-col space-y-4">
                                <li className="text-gray-600">
                                    <p className="font-bold text-teal-600">Interventions classiques:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Traitement de caries uniquement par composites esthétiques ou par technique inlay-onlay</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Détartrage en profondeur avec aéropolissage</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Endodontie mécanisée (dévitalisation)</span>
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-gray-600">
                                    Implantologie (implants français : Global D)
                                </li>

                                <li className="text-gray-600">
                                    <p className="font-bold text-teal-600">Parodontologie:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Surfaçage radiculaire, lambeaux d’assainissements</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Greffe osseuse (ROG), PRF (membranes naturelles par prélèvement sanguin)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Comblement osseux</span>
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-gray-600">
                                    <p className="font-bold text-teal-600">Chirurgie:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Elongation coronaire, ostéoplastie</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Freinectomie, amputation radiculaire</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Chirurgie à rétro (endodontie)</span>
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-gray-600">
                                    <p className="font-bold text-teal-600">Alignement dentaire:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Système français « Smilers » avec gouttières invisibles</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Contention collée par attelle personnalisée</span>
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-gray-600">
                                    <p className="font-bold text-teal-600">Prothèse dentaire:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Prothèse fixe 100% céramique, scellée (couronne ou bridge)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Prothèse collée (facettes)</span>
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-gray-600">
                                    <p className="font-bold text-teal-600">Occlusodontie:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Gestion des cas de bruxisme</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Gouttière de désappamation</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <CheckIcon className="h-6 w-6 text-red-400" />
                                            <span>Réglages occlusaux par coronoplasties et contentions personnalisées</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <img
                            src="images/cabinet.jpg"
                            alt="Tab 1"
                            className="w-auto h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <TeamPerson />
        </>
    );

}

export default Soins;