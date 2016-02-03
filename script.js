function calcola(aa){
        var scrivi=document.getElementsByTagName("input");
        var peso=scrivi[0].value;
        var altezza=scrivi[1].value;

if(peso <=1 || altezza <= 1){
alert("Non Hai Inserito Dati Corretti");
return;
}else if(isNaN(peso) || isNaN(altezza)){
alert("Non Hai Inserito Dati Corretti");
return;
}
        var soluzione= peso/ ((altezza/100)*(altezza/100));
        var esito=document.getElementsByTagName("span");
       esito[0].innerHTML=parseInt(soluzione);

if(parseInt(soluzione)<19){
    esito[1].innerHTML="SOTTOPESO";
}
else if(parseInt(soluzione) >= 24 && parseInt(soluzione) <= 24){
	esito[1].innerHTML="MEDIO";
}
else if(parseInt(soluzione) >= 25 && parseInt(soluzione) <= 30){
	esito[1].innerHTML="SOVRAPPESO";
}
else if(parseInt(soluzione) >30){
	esito[1].innerHTML="OBESO";
}
	
} 

function pulisci(aa){
   	  var scrivi=document.getElementsByTagName("input");
        scrivi[0].value="";
	  scrivi[1].value="";
        var esito=document.getElementsByTagName("span");
        esito[0].innerHTML="/";
	  esito[1].innerHTML="/";

}