runcode.onclick = function() {
  document.getElementById("secondary").value="";    
  let val = document.getElementById("primary").value.split("");
  //var b = String(val).split("");
  let out="";
  for (let i = 0; i < val.length-1; i++) 
  {
   if(val[i]>0)
   {
     val[i]=0;
   }
   else{
     val[i]=1;
   }
    out+=val[i];
  }
  document.getElementById("secondary").value = out+val[val.length-1];
};
