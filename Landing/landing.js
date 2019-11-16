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

// CHATBOT
function ShowDiv() {
    if ($("#chatbot").hasClass("d-none")) {
        document.getElementById("chatbot").classList.remove('d-none');
        document.getElementById("chatbot").classList.add('is-visible');
    }
    else {
        document.getElementById("chatbot").classList.add('d-none');
        ocument.getElementById("chatbot").classList.remove('is-visible');
    }
}
