export default function TeamPerson() {
    return (
        <div className="bg-gray-100 py-16">
            {/* Centered Text */}
            <div className="container mx-auto text-center mb-12">
                <p className="text-red-400 uppercase mb-2">Cabinet dentaire Mazzella di Bosco</p>
                <h1 className="text-5xl font-bold text-cyan-700">Une <span className='text-red-400'>équipe</span> à votre écoute</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Découvrez leurs profils
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <img
                        src="images/vincent.png"
                        alt="Service 1"
                        className="w-[200px] h-[200px] object-cover rounded-full"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Dr. Vincent Mazzella di Bosco</h2>
                    <p className="text-gray-600 mt-2 text-center">
                        Chirurgien dentiste
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="images/person.png"
                        alt="Service 1"
                        className="w-[200px] h-[200px] object-cover rounded-full"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Déborah</h2>
                    <p className="text-gray-600 mt-2 text-center">
                        Assistante dentaire
                    </p>
                </div>

                {/* Second Image and Text */}
                <div className="flex flex-col items-center">
                    <img
                        src="images/random.png"
                        alt="Service 2"
                        className="w-[200px] h-[200px] object-cover rounded-full"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Martin Espinasse</h2>
                    <p className="text-gray-600 mt-2 text-center">
                        Prothésiste Dentaire (photo a fournir)
                    </p>
                </div>
            </div>
        </div>
    )
}