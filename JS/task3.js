"use strict";

document.getElementById("add-item-btn").addEventListener("click", add);

function add() {
    let element = document.createElement("div");
    element.className = "element";
    element.innerText = "Element";
    element.style.color = getRandomColor();
    document.getElementById("container").appendChild(element);
    }

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}