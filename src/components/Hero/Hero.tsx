import { useContext } from 'react';
import './Hero.scss';
import { store } from '../../App';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import scroll from '../../utils/helpers/scroll';


const Hero = () => {

  const [state, _dispatch] = useContext(store);

  return (
    <div className={`hero-container ${state.darkMode ? 'dark-bg-1' : 'light-bg-1'}`}>
        <div className='anchor' id='hero' />
        <motion.h4
           className={`${state.darkMode ? 'white-opacity-max' : 'light-phrase'}`}
           initial={{ opacity: 0, y: 140  }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ 
             delay: 0.5,
             opacity: { duration: 0.2 , type: 'tween' },
             y: {duration: 0.5, type: 'spring'}
           }}
        >
          Hi,there
        </motion.h4>
        <motion.h2
          className={`${state.darkMode ? 'white-opacity' : 'light-eyebrow'}`}
          initial={{ opacity: 0, y: 140  }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.2,
            opacity: { duration: 0.2 , type: 'tween' },
            y: {duration: 0.5, type: 'spring'}
        }}
        >
          Jalaj Doraiburu
        </motion.h2>
        <motion.h1
          className={`${state.darkMode ? 'dark-heading' : 'light-heading'}`}
          initial={{ opacity: 0, y: 140  }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3,
            opacity: { duration: 0.2 , type: 'tween' },
            y: {duration: 0.5, type: 'spring'}
        }}
        >
          Full Stack Developer
        </motion.h1>
        <motion.h4
          className={`${state.darkMode ? 'white-opacity-max' : 'light-phrase'}`}
          initial={{ opacity: 0, y: 140  }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5,
            opacity: { duration: 0.2 , type: 'tween' },
            y: {duration: 0.5, type: 'spring'}
        }}
        >
        I am Tech & Finance Enthusiast.I love to trade and code.
        </motion.h4>
        <motion.button
          // onClick= {() => {}}
          initial={{ opacity: 0, y: 140  }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
             
            delay: 0.7,
            opacity: { duration: 0.2 , type: 'tween' },
            y: {duration: 0.5, type: 'spring'},
          }}
          onClick={(_e) => scroll("about-me")}
        >
          <h3>Explore</h3>
          <BsArrowUpRight className='arrow-icon' size={20}/>
        </motion.button>
    </div >
  )
}

export default Hero