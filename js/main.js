'use strict';

const convertButton = document.querySelector("#convert");
convertButton.addEventListener('click', () => {
  handleConvert()
})

function handleConvert() {
  const inputValue = document.querySelector("#input").value;
  const outPut = document.querySelector("#output");
  // get converted value
  const CSVValue = convertToCSV(inputValue);
  // show output
  outPut.innerText = CSVValue
}

function convertToCSV(inputValue) {
  // remove unwanted parts
  const removeRegex = /^(\s*\|\s*)|(\s*\|\s*$)|(^\s*\+[+-\|]+\+\s*$)(\n)?/gm;
  const valueRemvedFragments = inputValue.replace(removeRegex, "");
  // put commas
  const replaceToCommaRegex = /\s*\|\s*/gm;
  const replacedPipesValue = valueRemvedFragments.replace(replaceToCommaRegex, ",");

  return replacedPipesValue
}