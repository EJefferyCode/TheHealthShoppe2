/**NYNJ slidetoggle menu***/

$(document).ready(function(){
    $("#store").click(function(){
        $("#nynj").slideToggle(400);
    });
});

/******MODAL BOXES*******/

$(document).ready(function(){
    $("#modal1").dialog({
        autoOpen:false,
        show: 'fade', hide: 'drop'
    });
    $("#one").click(function(){
        $("#modal1").dialog("open");
    });
});

$(document).ready(function(){
    $("#modal2").dialog({
        autoOpen:false,
        show: 'fade', hide: 'drop'
    });
    $("#two").click(function(){
        $("#modal2").dialog("open");
    });
});




/********Login********/

var attempt = 3;
var member = "Emily";


function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "healthnut123@gmail.com" && password == "health404") {
        window.location = "welcome.html";
        return false;
    }else{
    attempt --;
    alert("Your email or password is incorrect, please try again.");
    
    if(attempt == 0){
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("go").disabled = true;
        return false;
    }
    }
}

function welcomeName() {
    var welcome = document.getElementById("welcome").innerHTML="Welcome " + member;
    
}

          /*******************************TABS**************************/

$(document).ready(function(){
    
    $('ul.tabs li').click(function(){  
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        
    })
});


/********************************************************************************/

var select = document.getElementById('mess');

select.addEventListener('change', changeOption);

function changeOption() {
    var choice = select.value;
    
    if(choice === "open") {
        alert('Remember, this means that any member of The Health Shoppe can send you messages');
    }else if (choice === "closed") {
        alert("Choosing this setting will prevent anyone on The Health Shoppe from messaging you, as well as preventing alerts from coming through.");
    }
}








