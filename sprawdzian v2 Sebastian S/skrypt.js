function oblicz(){
    let liczba=document.getElementById("liczba").value;
   let wynik="";
   let binarna="";

   while(liczba>0){
       modulo=liczba%2;
       wynik=wynik+modulo
       liczba=Math.floor(liczba/2);
   }
   const tab = [wynik];
   tab.reverse()
   
   document.getElementById("wynik").value=wynik;
}