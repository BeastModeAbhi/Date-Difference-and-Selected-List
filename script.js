function calculateDays(){
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  var dateOne = new Date(d1);
  var dateTwo =  new Date(d2);
  var time = dateTwo-dateOne;
  var days = (time)/(1000*60*60*24);
  document.getElementById("output").innerHTML=days;
}

/*activities*/
function myFunc(checkid)
{
  var chckid =document.getElementById(checkid);
  if(chckid.checked){
    $("#mySelected").append(chckid.value,"&nbsp;&nbsp;&nbsp;&nbsp;");    
  }
}