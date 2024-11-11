import { Link } from 'react-router-dom';

const ImageSection = ({ imgUrl, title, subtitle }) => {
    return (
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
            {/* Background Image */}
            <img
                src={imgUrl}
                className="absolute bottom-0 left-0 right-0 mx-auto w-full h-full object-cover"
                alt="Background"
            />
            
            {/* Content Overlay */}
            <div className="container relative z-10 mx-auto h-full flex flex-col items-start justify-center px-4 md:px-8">
                {/* Small Heading */}
                <div className="bg-red-400 p-1.5 rounded">
                    <h6 className="text-white text-xs md:text-base text-center font-extralight tracking-wide">
                        Cabinet dentaire Mazzella Di Bosco - Cannes
                    </h6>
                </div>

                {/* Title */}
                <div className="bg-slate-50 p-2 rounded mt-2 font-catamaran font-semibold">
                    <h1 className="text-cyan-700 text-3xl md:text-5xl lg:text-6xl text-center">{title}</h1>
                </div>

                {/* Subtitle */}
                <div className="bg-slate-50 p-2 rounded mt-2 font-catamaran font-semibold">
                    <h1 className="text-cyan-700 text-3xl md:text-5xl lg:text-6xl text-center">{subtitle}</h1>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 w-full md:w-80">
                    <Link
                        to="/soins"
                        className="text-gray-50 bg-cyan-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-md text-base md:text-lg font-medium w-full flex items-center justify-center tracking-wide"
                    >
                        Nos soins
                    </Link>
                    <Link
                        to="/contact"
                        className="text-red-400 bg-slate-50 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-md text-base md:text-lg font-medium w-full flex items-center justify-center tracking-wide"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Dark overlay for better text visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
    );
}

export default ImageSection;