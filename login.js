function validade()
{
var username=document.getElementById("username").value;
var passaword = document.getElementById("password").value;
if (username=="admin" && passaword=="user"){
    alert("login succesfully");
    return false;
}
else{
    alert("loggin failed")
}
}