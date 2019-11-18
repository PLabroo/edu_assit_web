$('#logout').click(function(){
    $.post('/logout',function(logout){
        alert('User logged out.')
    })
})


$.get('/user',function(loginfo){
    var name = loginfo.email;
    var log = loginfo.check;
    if(log){
        document.getElementById('logout').classList.remove('d-none');
        document.getElementById('login-div').classList.add('d-none');
        html =`<ul style="margin:auto 0">
            <li style="list-style-type:none"><a style="color:#fff;text-decoration: none;" href=""
                id="login"></span>&nbsp;${log.val()}</a></li>
          </ul>`
        $('#logout').append(html);
    }
    else{
        document.getElementById('logout').classList.add('d-none');
        document.getElementById('login-div').classList.remove('d-none');
    }
})


// window.location.reload(true);
var cur_url = window.location.href;
console.log(cur_url);
$('#engineering').click(function () {
    window.location = cur_url + "engg.html"
});

$('#home').click(function () {
    document.getElementById("home").href = cur_url;
});

$('#team').click(function () {
    // alert(cur_url.includes('#section'));
    if(cur_url.includes('#home')){
        cur_url = cur_url.replace('#home','team.html')
        document.getElementById("team").href = cur_url;
    }
    else if (cur_url.includes('#features')) {
        cur_url = cur_url.replace('#features', 'team.html')
        document.getElementById("team").href = cur_url;
    }
    else if (cur_url.includes('#section')) {
        cur_url = cur_url.replace('#section', 'team.html')
        document.getElementById("team").href = cur_url;
    }
    else if (cur_url.includes('#footer')) {
        cur_url = cur_url.replace('#footer', 'team.html')
        document.getElementById("team").href = cur_url;
    }
    else
        document.getElementById("team").href = cur_url + 'team.html'
    
});

$('#resell').click(function () {
    alert('fuck');
    if (cur_url.includes('#home')) {
        cur_url = cur_url.replace('#home', 'resell.html')
        window.location = cur_url;
    }
    else if (cur_url.includes('#features')) {
        cur_url = cur_url.replace('#features', 'resell.html')
        window.location = cur_url;
    }
    else if (cur_url.includes('#section')) {
        cur_url = cur_url.replace('#section', 'resell.html')
        window.location = cur_url;
    }
    else if (cur_url.includes('#footer')) {
        cur_url = cur_url.replace('#footer', 'resell.html')
        window.location = cur_url;
    }
    else{
        window.location = cur_url + 'resell.html';
    }

});

$('#signup').click(function () {
    if (cur_url.includes('#home')) {
        cur_url = cur_url.replace('#home', 'signup.html')
        document.getElementById("signup").href = cur_url;
    }
    else if (cur_url.includes('#features')) {
        cur_url = cur_url.replace('#features', 'signup.html')
        document.getElementById("signup").href = cur_url;
    }
    else if (cur_url.includes('#section')) {
        cur_url = cur_url.replace('#section', 'signup.html')
        document.getElementById("signup").href = cur_url;
    }
    else if (cur_url.includes('#footer')) {
        cur_url = cur_url.replace('#footer', 'signup.html')
        document.getElementById("signup").href = cur_url;
    }
    else
        document.getElementById("signup").href = cur_url + 'signup.html'
});

$('#login').click(function () {
    if (cur_url.includes('#home')) {
        cur_url = cur_url.replace('#home', 'login.html')
        document.getElementById("login").href = cur_url;
    }
    else if (cur_url.includes('#features')) {
        cur_url = cur_url.replace('#features', 'login.html')
        document.getElementById("login").href = cur_url;
    }
    else if (cur_url.includes('#section')) {
        cur_url = cur_url.replace('#section', 'login.html')
        document.getElementById("login").href = cur_url;
    }
    else if (cur_url.includes('#footer')) {
        cur_url = cur_url.replace('#footer', 'login.html')
        document.getElementById("login").href = cur_url;
    }
    else
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

// Smooth Scroll
$(document).ready(function () {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 1
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarcollapse a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Embedded Video
$('.modal').click(function (e) {
    e.preventDefault();
    $('iframe').attr('src', '');
});

$('.video').click(function (e) {
    e.preventDefault();
    $('iframe').attr('src', 'https://www.youtube.com/embed/0WYz7TnmjpY');
});

// LOGO
function book(){
    let logo = document.getElementById('book');
    logo.classList.add('fa-book');
    logo.classList.remove('fa-book-open');

    setTimeout(function(){
        logo.classList.remove('fa-book');
        logo.classList.add('fa-book-open');
    },1000);
}

book();
setInterval(book, 2000);
