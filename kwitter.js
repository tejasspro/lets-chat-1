
function addUser(){
    username = document.getElementById("user_name").value ;
    localStorage.setItem(username);

    window.location = "kwitter_room.html";

}