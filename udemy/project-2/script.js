const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;

next.addEventListener('click',() => {
    currentActive++;
    circles[currentActive].classList.add("active");

    if(currentActive == 3)
    {
        next.disabled = true;
    }
    prev.disabled = false;
    update();
});

prev.addEventListener('click',() => {
    if(currentActive == 1)
    {
        prev.disabled = true;
    }
    next.disabled = false;

    circles[currentActive].classList.remove("active");
    currentActive--;
    update();
});

const update = () => {
    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length-1)/(circles.length-1))*100 + "%";
};

