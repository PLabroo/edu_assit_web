var cur_url = window.location.href;
console.log(cur_url);
$('#engineering').click(function () {
    window.location = cur_url + "engg.html"
});

$('#home').click(function () {
    document.getElementById("home").href = cur_url;
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url + "team.html"
});

$('#signup').click(function () {
    document.getElementById("signup").href = cur_url + 'signup.html'
});

$('#login').click(function () {
    document.getElementById("login").href = cur_url + 'login.html'
});