document.addEventListener('DOMContentLoaded', function () {
    var instagramElement = document.getElementById('instad');
    var homeElement = document.getElementById('homepage');
    var surabhigramElement = document.getElementById('surabhigram');
    var homeClickElement = document.getElementById('home');
    var showTimerElement = document.getElementById('showTimer');
    var timerPageElement = document.getElementById('timerpage');
    var loginPageElement = document.getElementById('login-page');
    var loginButton = document.getElementById('loginAPP');
    var paymentButton = document.getElementById('paymentAPP');
    var paymentPageElement = document.getElementById('main-content');
    var festselection = document.getElementById('fest-selection-page'); 
    var festRegistrationButton = document.getElementById('register-next-button');
    var proceedToPayment = document.getElementById('payment-next-button');
    var qrPayButton = document.getElementById('qr-page-button');
    var qrPageElement = document.getElementById('qr-code-page');
    var lastPaymentElement = document.getElementById('last-content');
    var finalLastButton = document.getElementById('final-next-button');

    var instaHidden = document.createElement('style');
    var homeHidden = document.createElement('style');
    var loginHidden = document.createElement('style');
    var paymentHidden = document.createElement('style');
    var festselectionHidden = document.createElement('style');
    var lastPaymentHidden = document.createElement('style');
    var qrpageHidden = document.createElement('style')

    homeHidden.innerHTML = '#homepage { display: none; }';
    instaHidden.innerHTML = '#instad { display: none; }';
    loginHidden.innerHTML = '#login-page { display: none; }';
    paymentHidden.innerHTML = '#main-content {display: none}';
    festselectionHidden.innerHTML = '#fest-selection-page { display: none; }';
    lastPaymentHidden.innerHTML = '#last-content { display: none; }';
    qrpageHidden.innerHTML = '#qr-code-page {display: none; }';

    console.log("listening from phoner.js");

    document.head.appendChild(instaHidden);
    document.head.appendChild(homeHidden);
    document.head.appendChild(loginHidden);
    document.head.appendChild(paymentHidden);
    document.head.appendChild(festselectionHidden);
    document.head.appendChild(lastPaymentHidden);
    document.head.appendChild(qrpageHidden);

    instagramElement.style.display = 'none';
    homeElement.style.display = 'flex';
    timerPageElement.style.display = 'none';
    loginPageElement.style.display = 'none';
    paymentPageElement.style.display = 'none'
    festselection.style.display = 'none';
    lastPaymentElement.style.display = 'none';
    qrPageElement.style.display = 'none';

    homeClickElement.addEventListener('click', function (event) {
        homeElement.style.display = 'flex';
        instagramElement.style.display = 'none';
        paymentPageElement.style.display = 'none'
        timerPageElement.style.display = 'none';
        loginPageElement.style.display = 'none';
        paymentPageElement.style.display = 'none';
        festselection.style.display = 'none';
        lastPaymentElement.style.display = 'none';
        qrPageElement.style.display = 'none';
    });

    surabhigramElement.addEventListener('click', function (event) {
        homeElement.style.display = 'none';
        instagramElement.style.display = 'block';
    });

    showTimerElement.addEventListener('click', function (event) {
        timerPageElement.style.display = 'flex';
        homeElement.style.display = 'none';
    });

    loginButton.addEventListener('click', function (event) { 
        homeElement.style.display = 'none';
        loginPageElement.style.display = 'block'
    });

    paymentButton.addEventListener('click', function (event) { 
        homeElement.style.display = 'none';
        paymentPageElement.style.display = 'block'
    });

    festRegistrationButton.addEventListener('click', function (event) {
        console.log("clicked");
        paymentPageElement.style.display = 'none';
        festselection.style.display = 'block';
    });
    
    proceedToPayment.addEventListener('click', function(event) {
        festselection.style.display = 'none';
        lastPaymentElement.style.display = 'block'
    });

    finalLastButton.addEventListener('click', function(event) {
        lastPaymentElement.style.display = 'none';
        qrPageElement.style.display = 'block'
    });

    qrPayButton.addEventListener('click', function(event) {
        qrPageElement.style.display = 'none';
        homeElement.style.display = 'flex'
    });

    function renderCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        document.getElementById('time').textContent = formattedTime;
    }

    setInterval(renderCurrentTime, 1000);
    renderCurrentTime();  // Call initially to render the time
});