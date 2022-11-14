import { Route, Routes } from "react-router-dom";
import SoftSkills from "../Components/SoftSkills";
import Test from "../Components/Test";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Skill from "./Skill";

export default function AllRoute()
{

    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/skill"} element={<Skill />} />
                <Route path={"/project"} element={<Project />} />
                <Route path={"/contact"} element={<Contact />} />
                {/* <Route path="/softskills" element={<SoftSkills />} /> */}
            </Routes>
        </div>
    )
}