document.addEventListener('DOMContentLoaded', function () {
    var instagramElement = document.getElementById('instad');
    var homeElement = document.getElementById('homepage');
    var surabhigramElement = document.getElementById('surabhigram');
    var homeClickElement = document.getElementById('home');
    var showTimerElement = document.getElementById('showTimer');
    var timerPageElement = document.getElementById('timerpage');
    var loginPageElement = document.getElementById('login-page')
    var loginButton = document.getElementById('loginAPP')
    var paymentButton = document.getElementById('paymentAPP')
    var paymentPageElement = document.getElementById('payment-page')
    var festselection = document.getElementById('fest-selection-page'); 
    var festRegistrationButton = document.getElementById('register-next-button');



    var instaHidden = document.createElement('style');
    var homeHidden = document.createElement('style');
    var loginHidden= document.createElement('style');
    var paymentHidden= document.createElement('style');
    var festselectionHidden = document.createElement('style');
    
    homeHidden.innerHTML = '#homepage { display: none; }';
    instaHidden.innerHTML = '#instad { display: none; }';
    loginHidden.innerHTML = '#login-page { display: none; }';
    paymentHidden.innerHTML = '#payment-page {display: none}';
    festselectionHidden.innerHTML = '#fest-selection-page { display: none; }';

    console.log("listening from phoner.js");

    document.head.appendChild(instaHidden);
    document.head.appendChild(homeHidden);
    document.head.appendChild(loginHidden);
    document.head.appendChild(paymentHidden);
    document.head.appendChild(festselectionHidden);
  
    
    instagramElement.style.display = 'none';
    homeElement.style.display = 'flex';
    timerPageElement.style.display = 'none';
    loginPageElement.style.display = 'none';
    paymentPageElement.style.display = 'none'
    festselection.style.display = 'none';
    
    homeClickElement.addEventListener('click', function (event) {
        homeElement.style.display = 'flex';
        instagramElement.style.display = 'none';
        paymentPageElement.style.display = 'none'
        timerPageElement.style.display = 'none';
        loginPageElement.style.display = 'none';
    });

    // Toggle the visibility when the 'surabhigram' element is clicked
    surabhigramElement.addEventListener('click', function (event) {
        homeElement.style.display = 'none';
        instagramElement.style.display = 'block';
    });

    // Show timer page when 'showTimer' element is clicked
    showTimerElement.addEventListener('click', function (event) {
        timerPageElement.style.display = 'flex';
        homeElement.style.display = 'none';
    });


    // added login js code
    loginButton.addEventListener('click', function (event) { 
        homeElement.style.display = 'none';
        loginPageElement.style.display = 'block'
    });

    // added payment js code
    paymentButton.addEventListener('click', function (event) { 
        homeElement.style.display = 'none';
        paymentPageElement.style.display = 'block'
    });
    

    festRegistrationButton.addEventListener('click', function (event) {
        console.log("clicked")
        paymentPageElement.style.display = 'none';
        festselection.style.display = 'block';
    });

    function renderCurrentTime() {
        // Get the current time
        const now = new Date();
      
        // Extract hours and minutes
        let hours = now.getHours();
        let minutes = now.getMinutes();
      
        // Convert to 12-hour format
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
      
        // Pad single-digit minutes with a leading zero
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        // Display the formatted time
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        document.getElementById('time').textContent = formattedTime;
    }
      
    // Call the function to initially render the time
    renderCurrentTime();
      
    // Update the time every second
    setInterval(renderCurrentTime, 1000);
});