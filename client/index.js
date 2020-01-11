$(window).on("load", function () {
    $(".loading").hide()
    $("#adoptCatalog").hide()
})

$(document).ready(function () {
    var status = "catalogClosed"
    $("#seeCatalog").click(function () {
        if (status === "catalogClosed") {
            openCatalog()
            status = "openCatalog"
        } else {
            $("#adoptCatalog").hide()
            status = "catalogClosed"
        }
    })
})
function nextSlide() {
    // console.log($('.active').text())
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':last-child')) {
        $('.isiIsi').first().addClass('active');
    } else {
        $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.isiIsi').hide();
    $('.active').fadeIn(500)
}

function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if ($('.oldActive').is(':first-child')) {
        $('.isiIsi').last().addClass('active');
    } else {
        $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.isiIsi').hide();
    $('.active').fadeIn(500);
}

function scrollTo(id) {
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}

function openCatalog() {
    $("#adoptCatalog").show()
    // $(document).scrollTo("#adoptCatalog")
    $('.isiIsi').first().addClass('active')
    $(".isiIsi").hide()
    $(".active").show()
    $('#next').on('click', nextSlide)
    $('#prev').on('click', prevSlide)
}