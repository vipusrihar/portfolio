const form = document.getElementById('contact-form');
const button = document.getElementById('submitbtn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks 
    if (name === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Name Required',
            text: 'Please enter your name.'
        });
        return;
    }

    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    if (subject.length < 3) {
        Swal.fire({
            icon: 'warning',
            title: 'Short Subject',
            text: 'Subject must be at least 3 characters.'
        });
        return;
    }

    if (message.length < 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Short Message',
            text: 'Message must be at least 10 characters.'
        });
        return;
    }

    button.disabled = true;
    button.innerHTML = "Sending...";

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: json.message
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: json.message
                });
            }
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'Please try again later.'
            });
        })
        .finally(() => {
            form.reset();
            button.disabled = false;
            button.innerHTML = `Send <i class='uil uil-message'></i>`;
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
