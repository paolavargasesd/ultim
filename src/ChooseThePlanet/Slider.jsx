import React from 'react'
import images from '../assets/exports/images'
import '../ChooseThePlanet/Slider.scss'
import { motion } from 'framer-motion'

const Slider = () => {

  
  
  return (
    <motion.div className='slider-container'>
    <motion.div className='slider' drag='x' dragConstraints={{right: 0, left:-2123, }}>
    {images.map(image => (
      <motion.div key={image} className='item'> 
     <img src={image} alt="" />
     </motion.div>
   ))}

    </motion.div>
    </motion.div>
  )
}


export default Slider