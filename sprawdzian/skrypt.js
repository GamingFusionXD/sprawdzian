const formularz=document.querySelector("form");
const marka=formularz.querySelector("input[name=wejscie1]");
const model=formularz.querySelector("input[name=wejscie2]");
const numerre=formularz.querySelector("input[name=wejscie3]");
const numerKl=formularz.querySelector("input[name=wejscie4]");





formularz.addEventListener("submit", e => {
    e.preventDefault();
    alert("Marka: "+marka.value+" Model: "+model.value+" Numer rejestracyjny: "+numerre.value+" Numer klienta: "+numerKl.value);

} );

