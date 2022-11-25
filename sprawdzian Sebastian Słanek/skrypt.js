function oblicz(){
    let a1= document.getElementById("liczbaA1").value;
    let an= document.getElementById("liczbaAN").value;
    let n= document.getElementById("liczbaN").value;
    wynik = (an -a1)/(n-1);
    document.getElementById("wynik").value=wynik;


}