// src/Components/HomePage.js
import React from "react";
import ImageSlider from "../maincomponent/ImageSlider"; // Adjust path if necessary
import Footer from "../maincomponent/Footer";
import TypingEffect from "../maincomponent/Typing";
import Artist from "../maincomponent/Artist";

const HomePage = () => {
  const images = [
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380959/dkpntsoiel4ezt69sugi.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380949/nay7mbxkfkvecczkzplu.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380940/jktqahm0egwo22228b2r.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380939/pimfet2crm4gmcmqszyf.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380926/rqzxtwiwmpyfvxz5knx8.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380918/xzm0hct3qw4qz99jf1tt.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380949/nay7mbxkfkvecczkzplu.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380940/jktqahm0egwo22228b2r.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380939/pimfet2crm4gmcmqszyf.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380926/rqzxtwiwmpyfvxz5knx8.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380918/xzm0hct3qw4qz99jf1tt.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1718380949/nay7mbxkfkvecczkzplu.jpg",
  ];

  return (
    <div >
       
       <div class="flex-col justify-around items-center">
        <TypingEffect
          text="WELCOME to India's Only 100% HandMade Product Store, HindustanCrafts!!"
          speed={100}
        ></TypingEffect>
      </div>
       <Artist></Artist>
     
      <div class="flex justify-around  items-center p-10 m-10 bg-slate-800 rounded-lg">
        <div class="w-2/4 text-white text-2xl font-mono ">
          "Handmade crafts in India are not just artifacts; they are the living
          testament of centuries-old traditions, where every thread, bead, and
          brushstroke tells a story of the nation's vibrant heritage and the
          artisan's soul." 
          <br></br>
          <p>  - Sir Robert Whiskey</p>
        </div>
        <div>
          <ImageSlider images={images} class="h-screen" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;

// arrayBuffer = [ 'https://res.cloudinary.com/dpok16gsr/image/upload/v1718380959/dkpntsoiel4ezt69sugi.jpg',
//   'https://res.cloudinary.com/dpok16gsr/image/upload/v1718380949/nay7mbxkfkvecczkzplu.jpg',
//   'https://res.cloudinary.com/dpok16gsr/image/upload/v1718380940/jktqahm0egwo22228b2r.jpg',
//   'https://res.cloudinary.com/dpok16gsr/image/upload/v1718380939/pimfet2crm4gmcmqszyf.jpg',
//   'https://res.cloudinary.com/dpok16gsr/image/upload/v1718380926/rqzxtwiwmpyfvxz5knx8.jpg',
//   'https://res.cloudinary.com/dpok16gsr/image/upload/v1718380918/xzm0hct3qw4qz99jf1tt.jpg'
// ]
