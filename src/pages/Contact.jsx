import VideoSection from "../components/VideoSection";

const Contact = () => {
    return (
        <>
            <VideoSection videoUrl="videos/mainvideo.mp4" title={"Contactez-nous"} subtitle={"pour prendre rendez-vous"} />
            <section class="bg-white py-12 px-4 md:px-0">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire Di bosco Mazzella</p>
                        <h1 className="text-5xl font-bold text-cyan-700">Un rendez-vous? Une <span className='text-red-400'>question?</span></h1>
                        <p class="mt-4 text-lg text-gray-600">
                            N'hésitez pas à échanger avec notre secrétariat pour toute question ou demande de rendez-vous.
                        </p>
                    </div>

                    <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <form action="#" method="POST" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
                                    <input type="text" name="name" id="name" placeholder="Nom complet..." required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-400 focus:border-red-400 sm:text-sm" />
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email..." required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-400 focus:border-red-400 sm:text-sm" />
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" placeholder="Votre message..." rows="4" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-400 focus:border-red-400 sm:text-sm"></textarea>
                                </div>
                                <div>
                                    <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" >
                                        Envoyer le message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold text-cyan-700 mb-6 text-center">Nos informations de contact</h3>
                            <ul class="space-y-4 text-gray-700">
                                <li>
                                    <strong className="text-cyan-700">Adresse :</strong> <br />
                                    3 Rue des Mimosas, 06400 Cannes
                                </li>
                                <li>
                                    <strong className="text-cyan-700">Téléphone :</strong> <br />
                                    <a href="tel:+0493391000" class="text-red-400 hover:text-red-500">04 93 39 10 00</a>
                                </li>
                                <li>
                                    <strong className="text-cyan-700">Email :</strong> <br />
                                    <a href="mailto:selarlmdb@gmail.com" class="text-red-400 hover:text-red-500">selarlmdb@gmail.com</a>
                                </li>
                                <li>
                                    <strong className="text-cyan-700">Horaires d'ouverture :</strong> <br />
                                    <p>
                                        Lundi : 9h00 à 13h00 et de 14h00 à 18h30
                                    </p>
                                    <p>
                                        Mardi : 9h00 à 14h00 et de 15h00 à 18h00
                                    </p>
                                    <p>
                                        Mercredi : 10h00 à 13h00
                                    </p>
                                    <p>
                                        Jeudi : 9h00 à 14h00 et de 15h00 à 18h00
                                    </p>
                                    <p>
                                        Vendredi : 9h00 à 13h00 et de 14h à 17h00
                                    </p>
                                    <p>
                                        Samedi : Fermé
                                    </p>
                                    <p>
                                        Dimanche : Fermé
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact;