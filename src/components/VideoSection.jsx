
import { Link } from 'react-router-dom';

const VideoSection = ({ videoUrl, title, subtitle }) => {

    return (
        <div className="relative h-[60vh] md:h-[60vh] overflow-hidden"> {/* Adjust heights for responsiveness */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content container */}
            <div className="container relative z-10 mx-auto h-full flex flex-col items-start justify-center px-4 md:px-8 ">
                {/* Small heading */}
                <div className='bg-red-400 p-1.5 rounded ml-10 sm:ml-0 md:ml-0'>
                    <h6 className="text-white text-xs md:text-base text-center font-extralight tracking-wide">
                        Cabinet dentaire Mazzella di Bosco - Cannes
                    </h6>
                </div>

                {/* Title */}
                <div className='bg-slate-50 p-2 rounded mt-2 font-catamaran font-semibold md:pl-0 ml-10 md:ml-0'>
                    <h1 className="text-cyan-700 text-3xl md:text-5xl lg:text-6xl text-center">
                        {title}
                    </h1>
                </div>

                {/* Subtitle */}
                <div className='bg-slate-50 p-2 rounded mt-2 font-catamaran font-semibold md:pl-0 ml-10 md:ml-0'>
                    <h1 className="text-cyan-700 text-3xl md:text-5xl lg:text-6xl text-center">
                        {subtitle}
                    </h1>
                </div>

                {/* Buttons */}
                <div className="flex flex-row space-x-4 mt-4 w-full md:w-auto mx-auto ml-10 md:ml-0">
                    <Link
                        to="/soins"
                        className="text-gray-50 bg-cyan-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-md text-base md:text-lg font-medium w-auto flex items-center justify-center tracking-wide"
                    >
                        Nos soins
                    </Link>
                    <Link
                        to="/contact"
                        className="text-red-400 bg-slate-50 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-md text-base md:text-lg font-medium w-auto flex items-center justify-center tracking-wide"
                    >
                        Contact
                    </Link>
                </div>
            </div>

            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
    )
}

export default VideoSection;