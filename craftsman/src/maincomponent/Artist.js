import React from 'react';

const Artist = () => {
    return (
        <div className="p-4 sm:p-6 flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-1/2 flex justify-around h-full p-3">
                <img className="w-1/3 p-1" src="https://res.cloudinary.com/dpok16gsr/image/upload/v1718533628/artisan-doing-woodcutting_23-2150600783_pbp77c.jpg" alt="Image 1" />
                <img className="w-1/3 p-1" src="https://res.cloudinary.com/dpok16gsr/image/upload/v1718533628/ceramic-pottery-tools-still-life_23-2150197340_ygdjhv.jpg" alt="Image 2" />
                <img className="w-1/3 p-1" src="https://res.cloudinary.com/dpok16gsr/image/upload/v1718533629/carpets-market-marrakech_23-2148129867_bgv1a4.jpg" alt="Image 3" />
            </div>
            <div className="w-full lg:w-1/2 flex items-center h-full">
                <p className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl pl-4">
                    Traditional Indian Crafts From Ages
                </p>
            </div>
        </div>
    );
};

export default Artist;
