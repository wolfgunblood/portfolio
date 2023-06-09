import { useContext } from 'react';
import './Skills.scss';
import SkillTab from '../SkillTab/SkillTab';
import { store } from '../../App';

const Skills = () => {
  const [ state, _dispatch ] = useContext(store);

  return (
    <div className={`container-skills ${state.darkMode ? 'dark-bg-2' : 'light-bg-2'}`}>
        <div className='anchor' id='skills' />
        <h3 className={`eyebrow ${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}>Skills</h3>
        <h1 className={`heading ${state.darkMode ? 'dark-heading' : 'light-heading'}`}>My Tech Stack</h1>
    
          <div className='skills-container'>
            <div className='skills-container-first-row'>
              <SkillTab topic ="languages"/>
            </div>
            <div className='skills-container-second-row'>
              <SkillTab topic="frameworks"/>
              <SkillTab topic="libraries"/>
            </div>
            <div className='skills-container-third-row'>
              <SkillTab topic="collaborative"/>
              <SkillTab topic="prototyping"/>
              <SkillTab topic="code"/>
            </div>
          </div>
    </div>
    
    
    
  )
}

export default Skills