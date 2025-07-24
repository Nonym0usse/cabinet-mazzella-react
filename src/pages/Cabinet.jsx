import { CheckIcon } from "@heroicons/react/24/outline";
import ImageSection from "../components/ImageSection";

const Cabinet = () => {
    return (
        <>
            <ImageSection title={"Un cabinet moderne et chaleureux"} subtitle={"à Cannes"} imgUrl={"images/cabinet.jpg"} />

            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 mt-4">
                    <div className="md:w-1/2">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire Mazzella di Bosco</p>

                        <h2 className="text-3xl font-bold text-teal-600 mb-4">Au coeur du centre ville de Cannes !</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            En plein centre de Cannes proche de la rue d’Antibes avec le parking « Lamy »
                            à 50 m du cabinet (gratuité les deux premières heures).
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <img
                            src="images/cannes-bg.jpg"
                            alt="Tab 1"
                            className="w-auto h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 mt-8">
                    <div className="md:w-1/2">
                        <img
                            src="images/chirurgie-photo.jpg"
                            alt="Tab 1"
                            className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-teal-600 mb-4">Équipement de dernière génération</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Le cabinet est doté d’un matériel neuf sur l’ensemble de son fonctionnement
                            qui apporte une ergonomie, une technicité et donc un confort de travail pour le
                            patient et le praticien.
                            L’attention apportée à la décoration du cabinet permet aux patients de se
                            sentir à l’aise dans un cadre chaleureux.
                        </p>
                        <div className="text-lg text-gray-600 space-y-4">
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="flex-1 text-gray-600">
                                    <strong>Implantologie :</strong> le système « global D » de fabrication française pour la pose d’implants.
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="flex-1 text-gray-600">
                                    <strong>Endodontie :</strong> rotation continue avec le « protaper ».
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="flex-1 text-gray-600">
                                    <strong>Radiologie :</strong> une radio panoramique ainsi qu’un « cone beam » (système 3D pour la recherche de pathologie lors d’une infection et pour la planification implantaire).
                                </li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="flex-1 text-gray-600">
                                    <strong>Stérilisation :</strong> présence d’un autoclave NSK de classe B (stérilisateur le plus performant pour éliminer tous les virus) ainsi qu’un « gamasonique » pour la désinfection initiale des instruments avant stérilisation.
                                </li>
                            </ul>
                            <ul className="flex items-start space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="flex-1 text-gray-600">
                                    <strong>Chirurgie :</strong>
                                    <ul className="list-decimal list-inside ml-5 mt-2 space-y-2">
                                        <li>Un système « piezo » (EMS) pour le remodelage osseux.</li>
                                        <li>Une centrifugeuse (PRF process) pour le prélèvement sanguin au fauteuil lors des chirurgies (création de membranes naturelles (aPRF) et de (sPRF) pour le sticky bone).</li>
                                        <li>Bistouri électrique pour les gingivoplasties par « cautérisation » (absence de saignement), idéal pour négocier les défauts de gencives à des fins esthétiques.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cabinet;