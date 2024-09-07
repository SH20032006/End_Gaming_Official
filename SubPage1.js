document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
  
    // Basic validation
    if (!name || !email || !amount || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill out all fields.');
        return;
    }
  
    // Simulate a payment processing
    alert(`Payment of $${amount} by ${name} has been processed successfully!`);
  
    // Here you would typically send the form data to your server using fetch or XMLHttpRequest
    // Example:
    // fetch('/process-payment', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name, email, amount, cardNumber, expiryDate, cvv })
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  });


  // SubPage1.js
function copyGameId() {
    // Get the Game ID input element
    var gameIdInput = document.getElementById('game-id');
    
    // Select the text in the input element
    gameIdInput.select();
    gameIdInput.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Optional: Alert the user that the ID has been copied
    alert('Game ID copied to clipboard!');
}

  