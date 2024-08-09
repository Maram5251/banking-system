var First_name="";
var Last_name="";
var Email="";
var Bank_Balance="";

document.getElementById('btn1Container').onclick= function() {
    var button1=document.getElementById('btn1Container');
    var form = document.getElementById('account_form');     
        if (form.style.display === 'none') {
        form.style.display = 'flex'; 
    } else {
        form.style.display = 'none';
    }   
    if(button1.style.backgroundColor==="transparent"){
        button1.style.backgroundColor="white";
        button1.style.borderRadius="10px";
    }
    else{
        button1.style.backgroundColor="transparent";
    }
}
        document.addEventListener("DOMContentLoaded", function() {
            function display_values() {
               First_name = document.getElementById("fname").value;
               Last_name = document.getElementById("lname").value;
               Email = document.getElementById("email_customer").value;
               Bank_Balance = document.getElementById("bank_balance").value;
               document.getElementById('fn').innerHTML=First_name;
               document.getElementById('ln').innerHTML=Last_name;
               document.getElementById('em_customer').innerHTML=Email;
               document.getElementById('bb').innerHTML=Bank_Balance;
               document.getElementById('account_form').style.display = 'none';
               document.getElementById('btn1Container').style.display = 'none';
            }
            document.getElementById("submit_button").addEventListener("click", display_values);

          });
function account_created (){
if (First_name!==""&&Last_name!==""&&Email!==""&&Bank_Balance!=="")
{
    return true;
}
return false;
}         
document.getElementById("btn3Container").onclick=function(){
    var button3=document.getElementById('btn3Container');
    var money=document.getElementById("frm");
    if(account_created())
    {if(money.style.display==='none'){
        money.style.display = 'flex'; 
    } else {
        money.style.display = 'none';
    }
    
  if(button3.style.backgroundColor==="transparent"){
    button3.style.backgroundColor="white";
    button3.style.borderRadius="10px";
}
else{
    button3.style.backgroundColor="transparent";
}
document.getElementById('text').innerHTML="";
}
else{
    document.getElementById('text').innerHTML="You should create an account first !!";
}
}

 function Bank_Balance_update(id,amount) {
   let url = "http://localhost/bankingSystem/home.php";
    window.location.href= url+"?id="+id+"&amount="+amount;
}
function isRowSelected(row) {
    return row.classList.contains("selected");
}
document.getElementById('btn4Container').onclick=function(){
    var id;
    var button4=document.getElementById('btn4Container');
    var amount=document.getElementById('amount').value;
    var table = document.getElementById('customerTable');
    if(button4.style.backgroundColor==="transparent"){
    button4.style.backgroundColor="white";
    button4.style.borderRadius="10px";
    }
else{
    button4.style.backgroundColor="transparent";
    }
    for (var i = 0; i < table.rows.length; i++) {
        if (isRowSelected(table.rows[i])) {
            id=i;
            Bank_Balance_update(id,amount);
        }
} 
}
    
function select(){
    var index = document.getElementById('customerTable');
    var table = document.getElementById('customerTable');
    for (var i=0;i<table.rows.length;i++)
    {
    table.rows[i].onclick=function()
    { index=this.index;
    this.classList.toggle("selected");}
    }
}

function unselectRow(row) {
    row.classList.remove("selected");
}

document.getElementById('btn2Container').onclick=function(){
    var button2=document.getElementById('btn2Container');
    var table = document.getElementById('customerTable');
    if(account_created())
    {for (var i = 0; i < table.rows.length; i++) {
        if (isRowSelected(table.rows[i])) {
            unselectRow(table.rows[i]);
}}
select();

if(button2.style.backgroundColor==="transparent"){
    button2.style.backgroundColor="white";
    button2.style.borderRadius="10px";
}
else{
    button2.style.backgroundColor="transparent";
}
document.getElementById('text').innerHTML="";
}
else{
    document.getElementById('text').innerHTML="You should create an account first !!";

}
}
