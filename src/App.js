
import './App.css';

import AllRoute from './Route/AllRoute';
import About from './Route/About';
import Skill from './Route/Skill';
import Project from './Route/Project';
import Contact from './Route/Contact';
import { Box } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import GithubCal from './Components/GithubCal';
import Statics from './Components/Statics';
import SoftSkills from './Components/SoftSkills';




function App() {
  return (
    <div className="App">


 <Navbar/>
   <AllRoute />
   <Box><About /></Box>
   {/* <GithubCal /> */}
   <Statics />
   <SoftSkills />
        <Box><Skill /></Box>
        <GithubCal />
        <Box><Project /></Box>
        <Box> <Contact /></Box>
       
    </div>
  );
}

export default App;
