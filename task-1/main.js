const wrapper = document.querySelector(".slider");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

const images = ["img/img1.avif", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

// количество слайдов
let slides;

let currSlide = 0;
let maxSlides;


class Slider {
  constructor(images) {
    this.images = images;

    this.createSlider();

    btnRight.addEventListener("click", this.nextSlide.bind(this));
    btnLeft.addEventListener("click", this.prevSlide.bind(this));
  }

//   Создание слайдов исходя из количества картинок
  createSlider() {
    images.forEach(function(_, i){
        const slide = document.createElement("div");
        slide.className = "slide";
        wrapper.prepend(slide);
        slide.insertAdjacentHTML('beforeend', `
        <img src="${images[i]}" alt="img-${i}"/>
        `)
    })
    slides = Array.from(document.getElementsByClassName("slide"));
    maxSlides = slides.length;
    this.goToSlide(0);
  }

//   показ слайда
  goToSlide(slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  nextSlide() {
    if (currSlide === maxSlides - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    this.goToSlide(currSlide);
  }

  prevSlide() {
    if (currSlide === 0) {
      currSlide = maxSlides - 1;
    } else {
      currSlide--;
    }

    this.goToSlide(currSlide);
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    slider.prevSlide();
  }
  if (e.key === "ArrowRight") {
    slider.nextSlide();
  }
});

// Вызов слайдера
const slider = new Slider(images);