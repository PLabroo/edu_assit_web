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