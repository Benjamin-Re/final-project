import { validateInput, randomLetter } from "./Controller";
import {useEffect, useContext} from "react";
import {Context } from "../App";
import {Controller} from "./Controller";

export function Layout () {
    const context = useContext(Context);
    
    useEffect( () => {
        context.setLetter(randomLetter());
    }, [])

    return (
        <>
            <h1>Current Letter {context.letter}</h1>
            <table>
                <thead>
                <tr>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input type="text" id="country" name="country"></input></td>
                    <td id="validCountry">?</td>
                    <td>Enemy</td>
                </tr>
                </tbody>
            </table>
            <button onClick={handleClick}>Submit</button>
        </>
    )

    function handleClick(){
        const countryInput = document.querySelector("#country").value;
        const countryCheck = document.querySelector("#validCountry");
        if(validateInput(countryInput, context.letter)){
            countryCheck.style.backgroundColor="green";
            countryCheck.textContent=countryInput;
        } else {
            countryCheck.style.backgroundColor="red";
            countryCheck.textContent=countryInput;
        }
    }
}