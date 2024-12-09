import VideoSection from "../components/VideoSection";

const Contact = () => {
    return (
        <>
            <VideoSection videoUrl="videos/mainvideo.mp4" title={"Contactez-nous"} subtitle={"pour prendre rendez-vous"} />
            <section class="bg-white py-12 px-4 md:px-0">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire di bosco Mazzella</p>
                        <h1 className="text-5xl font-bold text-cyan-700">Un rendez-vous? Une <span className='text-red-400'>question?</span></h1>
                        <p class="mt-4 text-lg text-gray-600">
                            N'hésitez pas à échanger avec notre secrétariat pour toute question ou demande de rendez-vous.
                        </p>
                    </div>

                    <div class="mt-12 grid grid-cols-1 lg:grid-cols-1 gap-8">

                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
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