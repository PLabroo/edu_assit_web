var cur_url = window.location.href;
console.log(cur_url);
$('#mtech-ms').click(function(){
    window.location = cur_url.replace('engg.html','engg/mtech-ms.html') 
});

$('#mba').click(function () {
    window.location = cur_url.replace('engg.html', 'engg/mba.html')
});

$('#upsc').click(function () {
    window.location = cur_url.replace('engg.html', 'engg/civil-services.html')
});

$('#home').click(function () {
    document.getElementById("home").href = cur_url.replace('engg.html', '')
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url.replace('engg.html', 'team.html')
});

$('#signup').click(function () {
    document.getElementById("signup").href = cur_url.replace('engg.html', 'signup.html')
});

$('#login').click(function () {
    document.getElementById("login").href = cur_url.replace('engg.html', 'login.html')
});