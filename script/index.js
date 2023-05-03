const carousel = document.querySelector('.carousel');
const links = document.querySelectorAll(".link-prod");
let isDragStart = false, prevPageX, prevScrollLeft;
const images = document.querySelectorAll('img');
images.forEach((image) => {
image.addEventListener('dragstart', (e) => {
    e.preventDefault();
})

});
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft
    console.log("dragStart")
}

const dragStop = () => {
    isDragStart = false;
    console.log("dragStop start ")
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    console.log("active")
}

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);

links.forEach((link) => {
    link.addEventListener("click", (e) => {

        if (isDragStart) {
            e.preventDefault(); // предотвращение перехода по ссылке, если было начато перетаскивание
            isDragStart = false;
        }
        if (isDragStart == false && e !== "mouseup") {
            link.addEventListener("click", (e) =>  window.location.href = link.getAttribute("href"));
        }

    });
});


