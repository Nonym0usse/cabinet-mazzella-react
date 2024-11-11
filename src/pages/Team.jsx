import { CheckIcon } from "@heroicons/react/24/outline";
import ImageSection from "../components/ImageSection";
import TeamPerson from "../components/TeamPerson";

const Team = () => {
    return (
        <>
            <ImageSection title={"On vous présente"} subtitle={"l'équipe du cabinet"} imgUrl={"images/cabinet.jpg"} />

            <TeamPerson />

            <section className="bg-red-400 px-4 md:px-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="lg:w-2/3 relative">
                            <div className="absolute top-0 left-0 text-gray-50 text-6xl font-bold opacity-20">
                                “
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-50 relative z-10">
                                En tant que chirurgien-dentiste
                            </h2>
                            <p className="mt-4 text-gray-50 relative z-10">
                                J’ai poursuivi la philosophie que m’avait enseigné le docteur Mazzella di Bosco Jean-Claude, mon père. A savoir mettre autant d’attention à un acte classique de détartrage qu’à une chirurgie de greffe osseuse.
                            </p>
                            <p className="mt-4 text-gray-50 relative z-10">
                                J’ai plaisir à dire que mon métier me passionne et qu’après vingt huit ans d’activité je garde toujours le même plaisir à soigner mes patients et à les voir satisfaits.
                            </p>
                            <p className="mt-4 text-gray-50 relative z-10">
                                Avec l’aide de mon assistante nous avons à cœur d’être très disponibles et à l’écoute de nos patients et aussi d’apporter un suivi dans le temps afin de pérenniser les soins réalisés.
                            </p>
                            <div className="absolute bottom-0 right-0 text-gray-50 text-6xl font-bold opacity-20">
                                ”
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white py-12 px-4 md:px-0">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="space-y-8 text-gray-700">
                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h2 class="text-2xl font-extrabold text-cyan-700 mb-4">
                                Déborah, l’assistante dentaire
                            </h2>
                            <p>
                                Déborah vous accueillera au sein du cabinet. Elle est une assistante diplômée qui a derrière elle vingt ans de métier, ce qui fait d’elle une collaboratrice extrêmement compétente dans tous les domaines.
                            </p>
                            <p class="mt-4">
                                D’une empathie sincère vis-à-vis des patients, toujours disponible et souriante, en un mot, l’assistante idéale !!
                            </p>
                        </div>

                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h2 class="text-2xl font-extrabold text-cyan-700 mb-4">
                                Docteur Vincent Mazzella di Bosco
                            </h2>
                            <p>
                                Le Docteur Vincent Mazzella di Bosco est diplômé en chirurgie dentaire de la faculté de Nice, avec vingt-huit années d’expérience. Ancien attaché d’enseignement au service d’occlusodontie de la faculté dentaire de Nice, il continue de se former, particulièrement en implantologie et parodontologie. Dernièrement, il a validé un diplôme universitaire de chirurgie pré-implantaire.
                            </p>
                            <p class="mt-4">
                                Praticien amoureux de son métier, toujours extrêmement motivé, il se passionne particulièrement pour les cas complexes nécessitant de longs mois de préparation. Très exigeant sur son travail, il implique pleinement le patient dans le protocole mis en place, garantissant ainsi une meilleure osmose.
                            </p>
                            <blockquote class="mt-6 pl-4 border-l-4 border-red-400 italic">
                                « Il n’y a à mon sens aucun bon résultat dans un plan de traitement choisi sans un bon praticien pour l’appliquer et un bon patient pour le pérenniser » – Docteur Vincent Mazzella di Bosco.
                            </blockquote>
                        </div>

                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h2 class="text-2xl font-extrabold text-cyan-700 mb-4">
                                Martin Espinasse, Prothésiste Dentaire
                            </h2>
                            <p>
                                Il ne faudrait pas oublier une personne très importante mais souvent effacée : le prothésiste dentaire, Martin Espinasse. Formé dans l’un des meilleurs cabinets dentaires de Monaco chez le Docteur Fissor, ainsi que par le céramiste réputé en France, Monsieur Ubassy, Martin exerce depuis 27 ans et travaille avec nous depuis 10 ans en totale confiance et avec le même niveau d’exigence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Team;