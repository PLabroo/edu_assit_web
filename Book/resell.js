// Existing Books
// $(function () {
//     var records;
//     $.get("/books", function (data) {
//         records = data.result;
//     });

//     var i = 0;
//     var j = 0;
//     var rows = records.length;
//     var cols = records[0].length;

//     for ( i=0;i<rows;i++){
//         for (j=0;j<cols;<j++){
//             var title = $('#title');
//             var price = $('#category');
//             var desc = CKEDITOR.instances['desc'].getData();


//             html = `<div class="col-lg-3 sell">
//                         <div class="card book-sale">
//                             <div class="card-header">
//                                 ${title.val()}
//                             </div>
//                             <div class="card-body">
//                                 <img src="" alt="">
//                                 <p>
//                                     <h6>Pricing: </h6>${price.val()}
//                                 </p>
//                                 <p>
//                                     <h6>Contact:</h6>${desc}
//                                 </p>
//                             </div>
//                         </div>
                    
//                     </div>`

//             $('#resell').append(html);
//             title.val("");
//             CKEDITOR.instances['desc'].setData("");
//         }
//     }
// });
var image;
function imgchange(e) {
    image = URL.createObjectURL(e.target.files[0]);
}
// New Book
$('#post').on('click', function (event) {
    
    function imgchange(e) {
        var image = URL.createObjectURL(e.target.files[0]);
    }
    console.log(image);
    var title = $('#title');
    var price = $('#price');
    var desc = $('#desc');
    var contact = $('#contact')

    if(title == "" || price == "" || desc == "" || contact == "" || image == ""){
        alert("Please enter all fields.");
    }
    else{
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    html = `<div class="col-lg-3 sell">
                        <div class="card book-sale">
                            <div class="card-header">
                                <h5>
                                    ${title.val()}
                                </h5>
                            </div>
                            <div class="card-body">
                                <img src="${image}" alt="" class="pic img-fluid">
                                <p>
                                    <h6>Pricing: <span>${price.val()}</span></h6>
                                </p>
                                <p>
                                    <h6>Contact: <span>${contact.val()}</span></h6>
                                </p>
                                <p>
                                    <h6>Description: <span>${desc.val()}</span></h6>
                                </p>
                                <p>
                                    <h6>Date: <span>${date}</span></h6>
                                </p>
                            </div>
                        </div>
                    
                    </div>`

    $('#resell').append(html);

    desc = desc.replace('<p>',"");
    desc = desc.replace('</p>','');
    $.post("/sale",
        {
            title: title.val(),
            price: price.val(),
            contact: contact.val(),
            desc: desc,
            date: date
        },
        function (data, status) {
            alert("\nStatus: " + status);
        });

    title.val("");
    price.val("");
    contact.val("");
    CKEDITOR.instances['desc'].setData("");
    }
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