import { Link } from "react-router-dom"
import task from "./Component.module.css"
import styled from 'styled-components'


export default function NavBar() {

    return (
        <div>
            <div className={task.nav}>
                <div className={task.name}><h1>Robin George</h1></div>
                <div className={task.paths}>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/skill">SKILL</Link>
                    <Link to="/project">PROJECT</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}