console.log('Hello! I\'m Dublin Apps 😊.')

// Open/close menu

document.addEventListener('DOMContentLoaded', function () {
    var navList = document.querySelector(".nav");
    var navButton = document.querySelector(".button-menu");
    var navContent = document.querySelector(".nav__list");

    navButton.addEventListener("click", function () {
        var listHeight = navContent.offsetHeight;

        if (navList.classList.contains("nav--closed")) {
            navList.classList.remove("nav--closed");
            navList.classList.add("nav--opened");
            navList.style.height = listHeight + "px";
            navButton.classList.remove("button-menu--open");
            navButton.classList.add("button-menu--close");
        } else {
            navList.classList.add("nav--closed");
            navList.classList.remove("nav--opened");
            navList.style.height = "0px";
            navButton.classList.remove("button-menu--close");
            navButton.classList.add("button-menu--open");
        }
    });
});

// Slider

$('.slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
});

// Toggles

var toggles = document.querySelectorAll(".information-item");

toggles.forEach(function (element) {
    element.addEventListener("click", function (element) {
        var content = this.querySelector(".information-item__content");
        var toggle = this.querySelector(".information-item__button");
        var toggleText = document.querySelector(".information-item__description");
        var heightContent = toggleText.offsetHeight;

        if (content.classList.contains("active")) {
            content.classList.remove("active");
            toggle.classList.remove("information-item__button--active");
            content.style.height = "0px";
        }

        else {
            content.classList.add("active");
            toggle.classList.add("information-item__button--active");
            content.style.height = heightContent + "px";
        }
    })
});

// Slider. Products

$('.slider-products').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Slider.New

if (document.querySelectorAll(".new").length > 0) {
    var slideIndex = 1;
    showSlides(slideIndex);

    var minusSlide = document.querySelector(".news__slide-control--prev");
    var plusSlide = document.querySelector(".news__slide-control--next");

    minusSlide.addEventListener("click", function () {
        showSlides(slideIndex -= 1)
    })

    plusSlide.addEventListener("click", function () {
        showSlides(slideIndex += 1)
    })

    function showSlides(n) {
        var slides = document.querySelectorAll(".new");

        if (slides) {
            if (n > slides.length) {
                slideIndex = 1
            }

            if (n < 1) {
                slideIndex = slides.length
            }

            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "block";
        }
    }
}

// Modal payment

if (document.querySelectorAll(".product-sale__link-buy").length > 0) {
    document.addEventListener('DOMContentLoaded', function () {
        var button = document.querySelector(".product-sale__link-buy");
        var popup = document.querySelector(".modal-payment");
        var closePopup = document.querySelector(".modal-close")

        button.addEventListener("click", function () {
            popup.classList.add("modal-payment--opened");
        });

        closePopup.addEventListener("click", function () {
            popup.classList.remove("modal-payment--opened");
        })
    })
}

// Modal operation

if (document.querySelectorAll(".modal-payment__button").length > 0 ) {
    document.addEventListener('DOMContentLoaded', function () {
        var button = document.querySelector(".modal-payment__button");
        var popup = document.querySelector(".modal-operation");
        var closePopup = document.querySelector(".modal-close--operation")

        button.addEventListener("click", function () {
            popup.classList.add("modal-operation--opened");
        });

        closePopup.addEventListener("click", function () {
            popup.classList.remove("modal-operation--opened");
        })
    })
}


// Tabs

(function ($) {
    $(function () {

        $('.tabs__actions').on('click', 'span:not(.tabs__link--active)', function () {
            $(this)
                .addClass('tabs__link--active').siblings().removeClass('tabs__link--active')
                .closest('.tabs').find('.tab-content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
