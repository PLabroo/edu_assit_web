var cur_url = window.location.href;
console.log(cur_url);
$('#home').click(function () {
    window.location = cur_url.replace('team.html', '')
});