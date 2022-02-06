import React from "react";
import { NavLink } from "react-router-dom";
const Menu=()=>
{
    return(
        <div><h1>Welcome</h1>
        <NavLink to="imc">Calculer indice de masse</NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="temp">Interpréter la temperature</NavLink>
        </div>
    );
}
export default Menu;