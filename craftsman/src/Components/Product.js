import React from 'react'
import Footer from '../maincomponent/Footer'
import Productcard from '../maincomponent/ProductCard'
import MediaCard from '../maincomponent/ProductCard'

const Product = () => {
  return (
    <div>
     
     <div class="p-4 flex flex-wrap justify-around">
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718533629/close-up-engraving-art-tools_23-2149186758_bxvgyi.jpg' name='Home decor'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718533629/craftsman-working-basketry-straw-baskets-traditional-crafts-handmade-ai-generated_1034098-4660_ldvwdx.jpg' name='Handmade Baskets'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718533630/rustic-terracotta-bowl-with-intricate-indigenous-pattern-empty-table-generated-by-ai_188544-56185_azaob7.jpg' name='Cooking pots'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718533630/terracotta-vase-with-indigenous-pattern_23-2151585704_fjacto.jpg' name='Diya'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718533630/diwali-festival-lights-tradition_23-2148688432_hs2px5.jpg' name='Rangoli'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718380940/jktqahm0egwo22228b2r.jpg' name='Cold Pots'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718380949/nay7mbxkfkvecczkzplu.jpg' name='Kashmiri Shawls'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718380939/pimfet2crm4gmcmqszyf.jpg' name='Indian Zoomer'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718380926/rqzxtwiwmpyfvxz5knx8.jpg' name='Rajastani Bengals'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718380918/xzm0hct3qw4qz99jf1tt.jpg' name='South Arts'></MediaCard>
     <MediaCard image='https://res.cloudinary.com/dpok16gsr/image/upload/v1718380959/dkpntsoiel4ezt69sugi.jpg' name='Assam Painting'></MediaCard>
     

     </div>
   
    <Footer></Footer>
    </div>
    
  )
}

export default Product