var cur_url = window.location.href;
$('#home').click(function () {
    document.getElementById("home").href = cur_url.replace('engg/mba.html', '')
});

$('#team').click(function () {
    document.getElementById("team").href = cur_url.replace('engg/mba.html', 'team.html')
});

$('#signup').click(function () {
    document.getElementById("signup").href = cur_url.replace('engg/mba.html', 'signup.html')
});

$('#login').click(function () {
    document.getElementById("login").href = cur_url.replace('engg/mba.html', 'login.html')
});

// Navbar
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(prevScrollpos);
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.add('fixed-top');
    } else {
        document.getElementById("navbar").classList.remove('fixed-top');
    }
    prevScrollpos = currentScrollPos;
}

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