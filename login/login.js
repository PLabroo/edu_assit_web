var cur_url = window.location.href;
$('#home').click(function () {
    document.getElementById("home").href = cur_url.replace('login.html', '')
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url.replace('login.html', 'team.html')
});