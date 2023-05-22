import { useReducer, createContext } from 'react';
import reducer from './reducers/reducer';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ThemeButton from './components/ThemeButton/ThemeButton';
import sampleStore from './utils/samples/sampleStore';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import toast, { Toaster } from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const store = createContext<any>(null);

const StoreProvider = ({ children }: any) => (
    <store.Provider value={useReducer(reducer,sampleStore)}>
      {children}
      </store.Provider>
);

const App = () => {
  return (
    <StoreProvider>
      <div
        className='App'
      >
        <Toaster />
        <NavBar />
        <ThemeButton />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </StoreProvider>
  )
}

export default App