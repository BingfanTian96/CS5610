import React from "react";

import './ChangeColor.css';

function ChangeColor() {

    const colors = [
        "red",
        "blue", 
        "green"
    ]

    function change() {
        var area = document.getElementById("area");
        var colorInput = document.getElementById("color-input").value;
        var massage = document.getElementById("massage");
        if (colors.includes(colorInput)) {
            area.style.backgroundColor = colorInput;
            massage.textContent = "";
        } else {
            area.style.backgroundColor = "";
            massage.textContent = colorInput + " is not a valid color. Please choose green, blue or red.";
            massage.style.color = "red";
        }
    }



    return (
        <div>
            <div id="area">
            </div>
            <div id="input-area">
                <input type="text" id="color-input"></input>
                <button id="submit" onClick={change}>Change color</button>
                <p id="massage"></p>
            </div>
        </div>
    )
}

export default ChangeColor;