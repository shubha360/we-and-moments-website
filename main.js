const elementsY = document.querySelectorAll('.revealY');
const elementsXLeft = document.querySelectorAll('.revealXLeft');
const elementsXRight = document.querySelectorAll('.revealXRight');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .4
}

const callbacks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } 
        // else {
        //     entry.target.classList.remove('active');
        // }
    });
}

let observer = new IntersectionObserver(callbacks, options);

elementsY.forEach(element => {
    observer.observe(element)
});

elementsXLeft.forEach(element => {
    observer.observe(element)
});

elementsXRight.forEach(element => {
    observer.observe(element)
});