// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme in localStorage or use system preference
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});


// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    }
});

// Contact form validation and AJAX submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        let isValid = true;
        let firstErrorField = null;

        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formStatus.textContent = '';
        name.classList.remove('border-red-500');
        email.classList.remove('border-red-500');
        message.classList.remove('border-red-500');


        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            name.classList.add('border-red-500');
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = name;
            }
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            email.classList.add('border-red-500');
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = email;
            }
        }

        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            message.classList.add('border-red-500');
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = message;
            }
        }

        if (isValid) {
            const formData = new FormData(contactForm);
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.textContent = "Thanks for your submission!";
                    formStatus.classList.add('text-green-500');
                    contactForm.reset();
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000); // Redirect after 2 seconds
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formStatus.textContent = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            formStatus.textContent = "Oops! There was a problem submitting your form"
                        }
                        formStatus.classList.add('text-red-500');
                    })
                }
            }).catch(error => {
                formStatus.textContent = "Oops! There was a problem submitting your form";
                formStatus.classList.add('text-red-500');
            }).finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            });

        } else if (firstErrorField) {
            firstErrorField.focus();
        }
    });
}