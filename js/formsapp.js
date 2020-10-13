function pritesh(){
    var a=document.getElementById("user").value;
    var b=document.getElementById("Email").value;
    var c=document.getElementById("pass").value;
    var d=document.getElementById("cpass").value;
    var e=document.getElementById("mobile").value;
    var f=document.getElementById("localarea").value;
    var g=document.getElementById("tarea").value;


    if(a==""){
        document.getElementById("username").innerHTML="Username is required";
        return false;
    }
    if(b==""){
        document.getElementById("email").innerHTML="Email is required";
        return false;
    }
    if(c==""){
        document.getElementById("password").innerHTML="Password  is required";
        return false;
    }
    if(d==""){
        document.getElementById("cpassword").innerHTML="Conform password  is required";
        return false;
    }
    if(e==""){
        document.getElementById("smobile").innerHTML="Mobile is required";
        return false;
    }
    if(f==""){
        document.getElementById("codee").innerHTML="Area Code is required";
        return false;
    }
    if(g==""){
         document.getElementById("textA").innerHTML="textarea is required";
         return false;
    }
    else{
        document.write("<h1> Congrtulation Your Registration Successful </h1>");
    }
}