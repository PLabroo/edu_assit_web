var cur_url = window.location.href;
$('#home').click(function () {
    document.getElementById("home").href = cur_url.replace('signup.html', '')
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url.replace('signup.html', 'team.html')
});


// LOGO
function book() {
    let logo = document.getElementById('book');
    logo.classList.add('fa-book');
    logo.classList.remove('fa-book-open');

    setTimeout(function () {
        logo.classList.remove('fa-book');
        logo.classList.add('fa-book-open');
    }, 1000);
}

book();
setInterval(book, 2000);