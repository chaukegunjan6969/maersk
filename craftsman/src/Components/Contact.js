import React from 'react'
import Footer from '../maincomponent/Footer'
import ContactForm from '../maincomponent/Form'
const Contact = () => {
  return (
    <div>

      <div class="flex justify-around items-center h-full  p-10 m-10 bg-slate-800 rounded-lg " >
        <div class="h-full w-1/2 mr-10 bg-white overflow-hidden flex justify-center items-center">
            <img src='https://res.cloudinary.com/dpok16gsr/image/upload/v1718479808/d3lp1mrwqqcbpxwde6il.jpg' class="w-full h-full object-cover overflow"></img>
        </div>
        <div class="h-full  w-1/2 ml-10" >
        <ContactForm></ContactForm>
        </div>
      </div>

    

    <Footer></Footer>
    </div>
  )
}

export default Contact