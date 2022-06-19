var val1=Math.random()*6;
val1=Math.ceil(val1);
var val2=Math.random()*6;
val2=Math.ceil(val2);
console.log(val1+" "+val2);
switch(val1)
{
    case 1: 
      document.querySelector('.dice1r1').style.visibility="hidden";
      document.querySelector('.dice1r3').style.visibility="hidden";
      document.querySelector('.dice1r4').style.visibility="hidden";
      document.querySelector('.dice1r6').style.visibility="hidden";
      document.querySelector('.dice1r7').style.visibility="hidden";
      document.querySelector('.dice1r9').style.visibility="hidden";
      break;
    case 2:
      document.querySelector('.dice1r1').style.visibility="hidden";
      document.querySelector('.dice1r3').style.visibility="hidden";
      document.querySelector('.dice1r5').style.visibility="hidden";
      document.querySelector('.dice1r7').style.visibility="hidden";
      document.querySelector('.dice1r9').style.visibility="hidden";
      break;

    case 3:
      document.querySelector('.dice1r1').style.visibility="hidden";
      document.querySelector('.dice1r3').style.visibility="hidden";
      document.querySelector('.dice1r7').style.visibility="hidden";
      document.querySelector('.dice1r9').style.visibility="hidden";
      break;

    case 4:
      document.querySelector('.dice1r4').style.visibility="hidden";
      document.querySelector('.dice1r5').style.visibility="hidden";
      document.querySelector('.dice1r6').style.visibility="hidden";
      break;

    case 5:
      document.querySelector('.dice1r4').style.visibility="hidden";
      document.querySelector('.dice1r6').style.visibility="hidden";
      break;

    case 6:
      document.querySelector('.dice1r5').style.visibility="hidden";

}
switch(val2)
{
   
    case 1: 
      document.querySelector('.dice2r1').style.visibility="hidden";
      document.querySelector('.dice2r3').style.visibility="hidden";
      document.querySelector('.dice2r4').style.visibility="hidden";
      document.querySelector('.dice2r6').style.visibility="hidden";
      document.querySelector('.dice2r7').style.visibility="hidden";
      document.querySelector('.dice2r9').style.visibility="hidden";
      break;
    case 2:
      document.querySelector('.dice2r1').style.visibility="hidden";
      document.querySelector('.dice2r3').style.visibility="hidden";
      document.querySelector('.dice2r5').style.visibility="hidden";
      document.querySelector('.dice2r7').style.visibility="hidden";
      document.querySelector('.dice2r9').style.visibility="hidden";
      break;

    case 3:
      document.querySelector('.dice2r1').style.visibility="hidden";
      document.querySelector('.dice2r3').style.visibility="hidden";
      document.querySelector('.dice2r7').style.visibility="hidden";
      document.querySelector('.dice2r9').style.visibility="hidden";
      break;

    case 4:
      document.querySelector('.dice2r4').style.visibility="hidden";
      document.querySelector('.dice2r5').style.visibility="hidden";
      document.querySelector('.dice2r6').style.visibility="hidden";
      break;

    case 5:
      document.querySelector('.dice2r4').style.visibility="hidden";
      document.querySelector('.dice2r6').style.visibility="hidden";
      break;

    case 6:
      document.querySelector('.dice2r5').style.visibility="hidden";

}

if(val1>val2)
{
    document.querySelector('h1').innerHTML='you won';
    document.querySelector('.dice1 .text').innerHTML='<h3>you<br>('+val1+')</br></h3>';
    document.querySelector('.dice2 .text').innerHTML='<h3>computer<br>('+val2+')</br></h3>';

}
else if(val1<val2)
{
    document.querySelector('h1').innerHTML='computer won';
    document.querySelector('.dice1 .text').innerHTML='<h3>you<br>('+val1+')</br></h3>';
    document.querySelector('.dice2 .text').innerHTML='<h3>computer<br>('+val2+')</br></h3>';
}
else
{
    document.querySelector('h1').innerHTML='Draw';
    document.querySelector('.dice1 .text').innerHTML='<h3>you<br>('+val1+')</br></h3>';
    document.querySelector('.dice2 .text').innerHTML='<h3>computer<br>('+val2+')</br></h3>';
}
