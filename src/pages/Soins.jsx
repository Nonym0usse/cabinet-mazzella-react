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

            <div className="container mx-auto py-16 min-h-[70vh] px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mt-4">
                    <div className="md:w-1/3 text-center md:text-left">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire Mazzella di Bosco</p>
                        <h2 className="text-3xl font-bold text-cyan-700 mb-4">Des soins de pointe !</h2>
                        <p>
                            Nous vous proposons des soins dentaires de qualité, réalisés par des professionnels de la santé bucco-dentaire.
                            Notre équipe est composée de chirurgiens dentistes expérimentés, qui sauront vous accompagner dans votre démarche
                            de soins dentaires.
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
            <div className="container mx-auto py-16 px-4 md:px-0">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 mt-4">
                    <div className="md:w-1/2">
                        <p className="text-red-400 uppercase mb-2">Cabinet dentaire Mazzella di Bosco</p>

                        <h1 className="text-4xl font-bold text-cyan-700">Interventions <span className='text-red-400'>courantes </span></h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Voici la liste des principaux soins dentaires que nous proposons dans notre cabinet dentaire :
                        </p>
                        <div className="text-lg text-gray-600 space-y-4">
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">Le bilan bucco-dentaire</li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">Le traitement des caries</li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">Le détartrage</li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">L'endodontie</li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">Les couronnes</li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">Les prothèses</li>
                            </ul>
                            <ul className="flex items-center space-x-2">
                                <CheckIcon className="h-6 w-6 text-red-400" />
                                <li className="text-gray-600">L'extraction dentaire</li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <img
                            src="images/cabinet-machine2.jpg"
                            alt="Tab 1"
                            className="w-auto h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/*<div className="flex justify-center items-center min-h-[70vh] bg-gray-100">
                <div className="w-full max-w-6xl p-4 bg-white rounded-lg shadow-md">
                    <div className="border-b border-gray-200">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-cyan-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-cyan-500"
                            onClick={() => handleToggle(1)}
                        >
                            <span>L'esthétique dentaire</span>
                            <svg
                                className={`w-5 h-5 transform ${activeIndex === 1 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeIndex === 1 ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="p-4 text-gray-600">
                                Content for Section 1. This is the detailed content that will be shown when the accordion is opened.
                            </p>
                        </div>
                    </div>

                    <div className="border-b border-gray-200">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-cyan-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-cyan-500"
                            onClick={() => handleToggle(2)}
                        >
                            <span>L'implantologie</span>
                            <svg
                                className={`w-5 h-5 transform ${activeIndex === 2 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeIndex === 2 ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="p-4 text-gray-600">
                                Content for Section 2. This is the detailed content that will be shown when the accordion is opened.
                            </p>
                        </div>
                    </div>

                    <div className="border-b border-gray-200">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-cyan-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-cyan-500"
                            onClick={() => handleToggle(3)}
                        >
                            <span>La paradontologie</span>
                            <svg
                                className={`w-5 h-5 transform ${activeIndex === 3 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeIndex === 3 ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="p-4 text-gray-600">
                                Content for Section 3. This is the detailed content that will be shown when the accordion is opened.
                            </p>
                        </div>
                    </div>

                    <div className="border-b border-gray-200">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-cyan-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-cyan-500"
                            onClick={() => handleToggle(4)}
                        >
                            <span>Les prothèses dentaires</span>
                            <svg
                                className={`w-5 h-5 transform ${activeIndex === 4 ? 'rotate-180' : 'rotate-0'} transition-transform`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeIndex === 4 ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="p-4 text-gray-600">
                                Content for Section 3. This is the detailed content that will be shown when the accordion is opened.
                            </p>
                        </div>
                    </div>
                </div>
            </div>*/}
            <TeamPerson />
        </>
    );

}

export default Soins;