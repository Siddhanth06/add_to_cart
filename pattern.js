let string="";
for(let row=1;row<=5;row++){
     for(let col=1;col<=row;col++){
         string+=" "
     }
     for(k=5;k>=row;k--){
         string+="*";
     }
     string+="\n";
}
console.log(string);