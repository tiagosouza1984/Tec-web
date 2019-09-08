 var flag = 0;
 function showDiv () { 
    x = document.getElementById('select_01');
    if (flag == 0){
        x.style.visibility = "visible";
        animeMenu('select_01');       
    }else{
        animeReverse('select_01');
    }
}

function loadMenuCont (i) {
    var my_var = document.getElementById(i);  
    var body_content = document.getElementById('body_id')
        body_content.style.visibility = "visible";
        body_content.innerHTML = my_var.innerHTML;
        if (flag == 1){
            document.getElementById('select_01').style.visibility= "hidden"; 
            flag = 0 ;    
        }
}
 
function animeMenu (myElement){
    document.getElementById(myElement).classList.remove("menu_select");
    void document.getElementById(myElement).offsetWidth;
    document.getElementById(myElement).classList.add("menu_select");
    document.getElementById(myElement).style.animationDirection=  " normal";
    document.getElementById(myElement).style.webkitAnimationPlayState="running";
    document.getElementById(myElement).style.animationPlayState="running";
    document.getElementById(myElement).style.WebkitAnimation ;/*versão para chrome e Safari */
    document.getElementById(myElement).style.animation;  
    flag = 1;
}
function animeReverse(myElement){
    document.getElementById(myElement).classList.remove("menu_select");
    void document.getElementById(myElement).offsetWidth;
    document.getElementById(myElement).classList.add("menu_select");
    document.getElementById(myElement).style.webkitAnimationDirection = " reverse";
    document.getElementById(myElement).style.animationDirection=  " reverse";
    //document.getElementById(myElement).style.visibility = "hidden"
    document.getElementById(myElement).style.animationFillMode="forwards";
   flag = 0;
}
