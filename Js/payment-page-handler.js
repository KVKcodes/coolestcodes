document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener('change', function (event) {
    var festOptions = document.getElementsByName('planOption');
    for (var i = 0; i < festOptions.length; i++) {
        if (festOptions[i].checked) {
            selectedOption = festOptions[i].value;
            break;
        }
    }
    var price = selectedOption
    var priceSpan= document.getElementById('price');
    priceSpan.textContent= ""+price;

    const target = event.target;

    if (target.type === 'radio') {
      const content = target.parentNode.querySelector('.content');


      // Hide content of the previously selected radio button
      const prevContent = document.querySelector('.content.visible');
      if (prevContent && prevContent !== content) {
        prevContent.classList.remove('visible');
      }

      // Show or hide content based on the current radio button state
      if (content) {
        if (target.checked) {
          content.classList.add('visible');
        } else {
          content.classList.remove('visible');
        }
      }
    }
  });
});
  