document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.getElementById('contact-form').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}!`);
            e.target.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
