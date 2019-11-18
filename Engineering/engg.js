$('#logout').click(function () {
    $.post('/logout', function (logout) {
        alert('User logged out.')
    })
})


$.get('/user', function (loginfo) {
    var name = loginfo.email;
    var log = loginfo.check;
    if (log) {
        document.getElementById('logout').classList.remove('d-none');
        document.getElementById('login-div').classList.add('d-none');
        html = `<ul style="margin:auto 0">
            <li style="list-style-type:none"><a style="color:#fff;text-decoration: none;" href=""
                id="login"></span>&nbsp;${log.val()}</a></li>
          </ul>`
        $('#logout').append(html);
    }
    else {
        document.getElementById('logout').classList.add('d-none');
        document.getElementById('login-div').classList.remove('d-none');
    }
})

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


// ANIMATION
// On scroll
var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

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