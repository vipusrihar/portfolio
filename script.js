const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


function myMenuFunction() {

    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

var typingEffect = new Typed(".typedText", {
    strings: ["Vipusa Sriharan"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 40,
})


const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".cv", { delay: 400 });
sr.reveal(".featured-image", { delay: 200 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header");

sr.reveal(".education", { delay: 500 });
sr.reveal(".certificates", { delay: 500 });

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right", // ✅ should be "right" instead of "left" for right reveal
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });


// === Scroll Active Section Highlight ===
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        document.querySelector(".nav-menu a[href*='home']").classList.remove("active-link");
    }

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}


window.addEventListener("scroll", scrollActive);
