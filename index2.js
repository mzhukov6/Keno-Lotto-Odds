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

  var n; //for formating code
  var myvalue;//for formating code
  
 
  
  
 selectBox = document.getElementById("selectBox2");
 var D = Number(selectBox.options[selectBox.selectedIndex].value);

 selectBox = document.getElementById("selectBox3");
 var Supps = Number(selectBox.options[selectBox.selectedIndex].value);

 var lottoProb=0;
 var spot =D;//spot same as number drawn for lotto
 
 if (Supps==0){
  outputText.value= "MATCH" + "\t" +"ODDS To ONE" +"\n";
  for( let i = spot;i>-1;i--){
    lottoProb=combo(spot,i)*combo(N-spot,D-i)/combo(N,D);
    n = 1/lottoProb;
    myvalue = n.toLocaleString(
   undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
   { minimumFractionDigits: 3 });
  
    outputText.value = outputText.value + i.toString() +"\t" + myvalue + "\n";
  }
}

if (Supps==1){
  outputText.value= "MATCH" + "\t" +"ODDS To ONE" +"\t"+"\n"+"\n";
                    
  var totalsuppfield = N-D;
  var prob_of_supp =0;
  
  var combined_prob =0;
  //Get major prize by itself as it can have no supps
  lottoProb=combo(D,D)*combo(N-D,D-D)/combo(N,D);

   n = 1/lottoProb;
    myvalue = n.toLocaleString(
    undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
    { minimumFractionDigits: 3 });

  outputText.value = outputText.value + spot.toString() +"\t"
       + myvalue +"\n";

  outputText.value = outputText.value + "____________________________"+"\n";

                    
  for( let i = spot-1;i>-1;i--){ //Now cater for supp
    lottoProb=combo(spot,i)*combo(N-spot,D-i)/combo(N,D);
    prob_of_supp= (D-i)/totalsuppfield;
    combined_prob =lottoProb*prob_of_supp;

   
    n = 1/combined_prob;
    myvalue = n.toLocaleString(
   undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
   { minimumFractionDigits: 3 });

   outputText.value = outputText.value + i.toString() +"+Sup"+"\t"
                    + myvalue +"\n";

    n = 1/(lottoProb-combined_prob);
    myvalue = n.toLocaleString(
    undefined, // leave undefined to use the browser's locale,
                           // or use a string like 'en-US' to override it.
    { minimumFractionDigits: 3 });

   outputText.value = outputText.value + i.toString() +"\t"
                    + myvalue +"\n";

   outputText.value =  outputText.value +"____________________________"+"\n";
  }
}

  if (Supps==2){ // cater for 2sups games
    outputText.value= "MATCH" + "\t" +"\t\t"+"ODDS To ONE" +"\n"+"\n";
                      
    var totalsuppfield = N-D;
    var prob_of_supp =0;
    var combined_prob =0;
    var prob_of_one_or_two_sup=0;
    var prob_of_zero_sup=0;
    var prob_of_one_sup=0;
    var prob_of_two_sup=0;
    var myliveballs =0;
    //Get major prize by itself as it can have no supps
    lottoProb=combo(D,D)*combo(N-D,D-D)/combo(N,D);

    n = 1/lottoProb;
    myvalue = n.toLocaleString(
    undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
    { minimumFractionDigits: 3 });

    outputText.value = outputText.value + spot.toString() +"..............\t"+"\t"
         + myvalue +"\n";
  
    outputText.value = outputText.value + "____________________________________"+"\n";
  
    //Get 2nd tier prize by itself as it can have only one sup
    //observe D = drawn: spot = how many selected also = drawn for lotto
    //N= total field size and i is match
   
    

   
    /// Get the remaining tiers all of which can have one or two supps
    for( let i = spot-1;i>-1;i--){ //Now cater for 1 of 2 sups or supps or ether
      lottoProb=combo(spot,i)*combo(N-spot,D-i)/combo(N,D);
      myliveballs++;
      prob_of_zero_sup=((totalsuppfield-myliveballs)/(totalsuppfield))*((totalsuppfield-myliveballs-1)/(totalsuppfield-1));
      prob_of_one_or_two_sup= 1-prob_of_zero_sup;
      
      combined_prob =lottoProb*prob_of_one_or_two_sup;

      n = 1/combined_prob;
      myvalue = n.toLocaleString(
      undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
      { minimumFractionDigits: 3 });
  
     
     outputText.value = outputText.value + i.toString() +" + 1 OR 2 Sups"+"\t"+"\t"
                      + myvalue +"\n";

    if(myliveballs>1){
      // code for only 1 supp and exactly 2 supps
      var prob_of_two_sup=((myliveballs)/(totalsuppfield))*((myliveballs-1)/(totalsuppfield-1));
      var prob_of_only_one_sup =1-prob_of_zero_sup-prob_of_two_sup;

      combined_prob =lottoProb*prob_of_only_one_sup ;

      n = 1/combined_prob;
      myvalue = n.toLocaleString(
     undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
     { minimumFractionDigits: 3 });
      outputText.value = outputText.value + i.toString() +" + Only 1 Sup"+"\t"+"\t"
                      + myvalue +"\n";

      combined_prob =lottoProb*prob_of_two_sup ;

      n = 1/combined_prob;
     myvalue = n.toLocaleString(
     undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
      { minimumFractionDigits: 3 });
      outputText.value = outputText.value + i.toString() +" + .... 2 Sups"+"\t"+"\t"
                                      + myvalue +"\n";                
    }

     
      combined_prob =lottoProb*prob_of_zero_sup;

      n = 1/combined_prob;
      myvalue = n.toLocaleString(
      undefined, // leave undefined to use the browser's locale,
           // or use a string like 'en-US' to override it.
      { minimumFractionDigits: 3 });

     outputText.value = outputText.value + i.toString() +"..............\t"+"\t"
                      + myvalue +"\n";
  
     outputText.value =  outputText.value +"____________________________________"+"\n";
    }


}
outputText.value = outputText.value + "\n" + "Lotto: " + "pick " + D + " from " + N+" Supps=: "+ Supps;
}

