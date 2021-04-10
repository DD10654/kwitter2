function addUser() {
    username_ = document.getElementById('username').value;
    localStorage.setItem("username", username_)
    window.location = "room.html";
}

function username() {
username_2 = localStorage.getItem("username");
    document.getElementById('username_logged_in').innerHTML = username_2
}