import React from 'react';

const MentionsLegales = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-red-400 mb-6 tracking-wide">Mentions Légales</h1>
                
                {/* Section 1: Éditeur du site */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">1. Éditeur du site</h2>
                    <p className="text-gray-600">
                        <strong>Nom de l'entreprise :</strong> DOCTEUR MAZZELLA DI BOSCO<br />
                        <strong>Forme juridique :</strong> Société d'exercice libéral à responsabilité limitée<br />
                        <strong>Adresse :</strong> 3 RUE DES MIMOSAS 06400 CANNES<br />
                        <strong>Téléphone :</strong> 01 23 45 67 89<br />
                        <strong>E-mail :</strong> selarlmdb@gmail.com<br />
                        <strong>Numéro SIRET :</strong> 839 946 704 00021<br />
                    </p>
                </section>

                {/* Section 2: Hébergement */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">2. Hébergement du site</h2>
                    <p className="text-gray-600">
                        <strong>Nom de l'hébergeur :</strong> O2SWITCH<br />
                        <strong>Adresse :</strong> Chem. des Pardiaux, 63000 Clermont-Ferrand<br />
                        <strong>Téléphone :</strong> 04 44 44 60 40<br />
                        <strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.o2switch.fr</a><br />
                        <strong>Développeur du site :</strong> <a href="https://www.salutix.fr" target="_blank">CYRIL VELLA</a><br />
                    </p>
                </section>

                {/* Section 3: Propriété intellectuelle */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">3. Propriété intellectuelle</h2>
                    <p className="text-gray-600">
                        Tous les éléments de ce site (textes, images, graphismes, logos, vidéos, etc.) sont la propriété exclusive de 
                        <strong> DOCTEUR MAZZELLA DI BOSCO</strong> ou font l’objet d’une autorisation d’utilisation. Toute reproduction est interdite sans autorisation préalable.
                    </p>
                </section>

                {/* Section 4: Protection des données personnelles */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">4. Protection des données personnelles</h2>
                    <p className="text-gray-600">
                        Conformément au RGPD, vous disposez de droits sur vos données : accès, rectification, suppression. 
                        Pour exercer vos droits, contactez-nous à :<br />
                        <strong>E-mail :</strong> selarlmdb@gmail.com<br />
                        <strong>Adresse :</strong> 3 RUE DES MIMOSAS 06400 CANNES<br />
                    </p>
                </section>

                {/* Section 5: Limitation de responsabilité */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">5. Limitation de responsabilité</h2>
                    <p className="text-gray-600">
                        DOCTEUR MAZZELLA DI BOSCO met tout en œuvre pour assurer l'exactitude des informations sur ce site, mais ne peut être tenue responsable des erreurs, omissions ou conséquences de l'utilisation de ces informations.
                    </p>
                </section>

                {/* Section 7: Droit applicable */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-cyan-700 mb-2">6. Droit applicable</h2>
                    <p className="text-gray-600">
                        Les présentes mentions légales sont régies par les lois françaises. Tout litige sera soumis aux tribunaux compétents.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;