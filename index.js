const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  let value = Number(inputEl.value);
  inputEl.value = "";
  findLength(value);
  findVolume(value);
  findMass(value);
});

function findLength(Value) {
  let meterToFeet = (Value * 3.28).toFixed(3);
  let feetToMeter = (Value / 3.28).toFixed(3);

  lengthEl.textContent = `
        ${Value} meters = ${meterToFeet} feet | ${Value} feet = ${feetToMeter} meters
    `;
}

function findVolume(Value) {
  let litersToGallon = (Value * 0.264172).toFixed(3);
  let gallonToLiters = (Value / 0.264172).toFixed(3);
  volumeEl.textContent = `
        ${Value} liters = ${litersToGallon} gallon | ${Value} gallon = ${gallonToLiters} liters
    `;
}

function findMass(Value) {
  let kilosToPound = (Value * 2.20462).toFixed(3);
  let poundToKilos = (Value / 2.20462).toFixed(3);
  massEl.textContent = `
        ${Value} kilos = ${kilosToPound} pound | ${Value} pound = ${poundToKilos} kilos
    `;
}
