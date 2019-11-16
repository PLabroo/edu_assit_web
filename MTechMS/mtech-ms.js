var cur_url = window.location.href;
console.log(cur_url);
$('#resource').click(function () {
    window.location = cur_url.replace('mtech-ms.html', 'mtech-ms/resources-mtech-ms.html')
});

$('#home').click(function () {
    document.getElementById("home").href = cur_url.replace('engg/mtech-ms.html', '')
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url.replace('engg/mtech-ms.html', 'team.html')
});

$('#signup').click(function () {
    document.getElementById("signup").href = cur_url.replace('engg/mtech-ms.html', 'signup.html')
});

$('#login').click(function () {
    document.getElementById("login").href = cur_url.replace('engg/mtech-ms.html', 'login.html')
});