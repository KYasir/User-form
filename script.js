
document.getElementById('user form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;


    let valid = true;
    let messages = [];
    
    
    if (firstname.trim() === '') {
        valid = false;
        messages.push('Name is required.');
    }

    if (lastname.trim() === '') {
        valid = false;
        messages.push('Name is required.');
    }


    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        valid = false;
        messages.push('Invalid email address.');
    } 

    if (age === '' || isNaN(age) || age <= 0) {
        valid = false;
        messages.push('Please enter a valid age.');
    }
    
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if (!phone.match(phonePattern)) {
        valid = false;
        messages.push('Phone number must be 10 digits.');
    }

    if (address.trim() === '') {
        valid = false;
        messages.push('Address is required.');
    }

    if (!valid) {
        alert(messages.join('\n'));
        return;
    }

 document.getElementById('popupMessage').innerText = 'Form submitted successfully!';
    document.getElementById('popup').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
