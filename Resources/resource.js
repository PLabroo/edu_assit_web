var cur_url = window.location.href;
$('#home').click(function () {
    document.getElementById("home").href = cur_url.replace('engg/mtech-ms/resources-mtech-ms.html', '')
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url.replace('engg/mtech-ms/resources-mtech-ms.html', 'team.html')
});

$('#signup').click(function () {
    document.getElementById("signup").href = cur_url.replace('engg/mtech-ms/resources-mtech-ms.html', 'signup.html')
});

$('#login').click(function () {
    document.getElementById("login").href = cur_url.replace('engg/mtech-ms/resources-mtech-ms.html', 'login.html')
});