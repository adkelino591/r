function back(){
    window.location="activity_1.html";
}
function getscore()
{
score=localstorage.getitem("score");
document.getElementById("update").innerHTML=
"<h1>puntaje:" + score + "</h1>";

}