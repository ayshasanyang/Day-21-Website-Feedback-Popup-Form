
  (function(){
    emailjs.init("add your key"); // Replace with your EmailJS public key
  })();

  function showFeedbackForm() {
    document.getElementById('feedbackPopup').classList.add('show');
  }

  function closeFeedbackForm() {
    document.getElementById('feedbackPopup').classList.remove('show');
  }

  function sendFeedback() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    const feedbackData = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send("replace with your service key", "replace with your template key", feedbackData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
          closeFeedbackForm();
          document.getElementById('successMessage').style.display = 'none';
        }, 3000);
      }, function(error) {
        console.log('FAILED...', error);
        alert('Something went wrong, please try again.');
      });
  }