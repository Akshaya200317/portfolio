

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
const projectCards = document.querySelectorAll('.project-card');

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            console.log('Card clicked, link:', link); 
            if (link) {
                window.location.href = link;
            }
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        access_key: 'def92fa4-d28b-484c-8c16-682c9a45ad4c',
        
        ...Object.fromEntries(formData)
    };

    try {
        if (await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.ok)) {
            document.getElementById('form-response').innerText = 'Thank you for your message!';
            e.target.reset();
        }
    } catch { /* No error handling */ }
});
