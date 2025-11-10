function eraseText() {
    document.getElementById("outputText").value = "";
  }

  function combo(n,r){
    var result =1;
    var upper = n;
    
    for(let i=1;i<(n-r+1);i++){
        result = result*upper/i;
        
        upper --;
    }
    return result;
}

function getResults(){
  eraseText();//clear the text area
  
  var selectBox = document.getElementById("selectBox1");
  var N =Number( selectBox.options[selectBox.selectedIndex].value);

  selectBox = document.getElementById("selectBox2");
  var D = Number(selectBox.options[selectBox.selectedIndex].value);

  selectBox = document.getElementById("selectBox3");
  var spot = Number(selectBox.options[selectBox.selectedIndex].value);

  var n;//for formating code
  var myvalue;//for formating code

  if ( spot>D ) {
    outputText.value= "Error! Spot greater that Drawn!! Redo ";
    return;// this serves to exit
}

 outputText.value= "MATCH" + "\t" +"ODDS To ONE" +"\n";
 ///////

var kenoOdds=0;



for( var i = 0;i<spot+1;i++){
 kenoOdds=combo(spot,i)*combo(N-spot,D-i)/combo(N,D);

  n = 1/kenoOdds;
  myvalue = n.toLocaleString(
 undefined, // leave undefined to use the browser's locale,
         // or use a string like 'en-US' to override it.
 { minimumFractionDigits: 3 });
 
 outputText.value = outputText.value + i.toString() +"\t"
           // + (1/kenoOdds).toFixed(4).toString() + "\n";
           + myvalue +"\n";

         


}

outputText.value = outputText.value + "\n" + "Keno: " + spot + " spot "+ N+"-"+ D;
 
 
 
}

