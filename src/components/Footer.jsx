const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-teal-700 text-gray-300 py-12 px-4 md:px-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Nos horaires d'ouverture</h3>
            <p>Lun : 9h00 à 13h00 - 14h00 à 18h30</p>
            <p>Mar : 9h00 à 14h00 - 15h00 à 18h00</p>
            <p>Mer : 10h00 à 13h00</p>
            <p>Jeu : 9h00 à 14h00 - 15h00 à 18h00</p>
            <p>Ven : 9h00 à 13h00 - 14h00 à 17h00</p>
          </div>

          {/* Column 2 - Services */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Cabinet Dentaire Mazzella</a>
              </li>
              <li>
                <a href="/soins" className="hover:text-white">Les soins du cabinet</a>
              </li>
              <li>
                <a href="/equipe" className="hover:text-white">Découvrez notre équipe</a>
              </li>
              <li>
                <a href="https://www.doctolib.fr/dentiste/cannes/vincent-mazzella-di-bosco" className="hover:text-white">Prendre RDV en ligne</a>
              </li>
              <li>
                <a href="/plandusite" className="hover:text-white">Plan du site</a>
              </li>
              <li>
                <a href="/mentions-legales" className="hover:text-white">Mentions légales</a>
              </li>
            </ul>
          </div>
          {/* Column 3 - Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Nous contacter</h3>
            <p className="text-white">04 93 39 10 00</p>
            <p className="text-white">selarlmdb@gmail.com</p>
            <p className="text-white">3 Rue des Mimosas, 06400 Cannes</p>
          </div>

          {/* Column 4 - Google Map */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Notre adresse</h3>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2545.009196935638!2d7.023044515090644!3d43.5536540584538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce81a5bf7feded%3A0x6e053d37e82805da!2sDr%20Vincent%20MAZZELLA%20DI%20BOSCO!5e0!3m2!1sfr!2sfr!4v1726945057543!5m2!1sfr!2sfr"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-red-400 py-4">
        <p className="text-center text-sm sm:text-base text-gray-50">
          &copy; {currentYear} Cabinet dentaire Dr. Mazzella di Bosco - Design du site Cyril VELLA
        </p>
      </div>
    </>
  );
};

export default Footer;