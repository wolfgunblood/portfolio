import { useContext, useState } from 'react';
import './ThemeButton.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { IconContext } from "react-icons";

const ThemeButton = () => {
    const [state, dispatch] = useContext(store);
    //   const { theme } = state;
    const [hovered, setHovered] = useState(false);


    const handleTheme = () => {
        dispatch({ type: 'darkmode/TOGGLE' });
        if (state.darkMode) {
            toast('Hello Lightness!',
                {
                    icon: '☀',
                    position: "top-left",
                    style: {
                        borderRadius: '10px',
                        background: '#fff',
                        color: '#333',
                    },
                });
        }
        else {
            toast('Hello Darkness!',
                {
                    icon: '👏',
                    position: "top-left",
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    }

    const handleIconHover = () => {
        setHovered(!hovered);
      };

    return (
        <>
            <motion.button
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 0.2 }}
                className={`theme-button
                ${state.darkMode ? 'dark-theme-button' : 'light-theme-button'} 
            `}
                onClick={handleTheme}
                onMouseEnter={handleIconHover} 
                onMouseLeave={handleIconHover}
            >
                <IconContext.Provider value={{ className: state.darkMode ?  "icon-dark" : hovered ? "icon-hover" : "icon" }}>
                    {state.darkMode ? (
                        <MdOutlineLightMode  />
                    ) : (
                        <MdDarkMode />
                    )}
                </IconContext.Provider>
                <h4>
                    {state.darkMode ? 'Light Mode' : 'Dark Mode'}
                </h4>
            </motion.button>
        </>
    )
}

export default ThemeButton