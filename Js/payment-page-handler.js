document.addEventListener("DOMContentLoaded", function () {

  var festSelectionCounter = 0;
  var lastContentCounter = 0;

  var festSelectionLimit = 0;
  var lastSelectionLimit = 0;

  var planSelectionButton = document.getElementById('register-next-button');
  var festOptions = document.getElementsByName('planOption');

  planSelectionButton.addEventListener('click', function (event) {
    switch(price) {
      case 200:
        festSelectionLimit = 0;
        break;
      case 500:
        festSelectionLimit = 1;
        break;
      case 800:
        festSelectionLimit = 2;
        break;
      case 1000:
        festSelectionLimit = 10;
        break;          
    }
    for (var i = 0; i < festOptions.length; i++) {
        if (festOptions[i].checked) {
            selectedOption = festOptions[i].value;
            break;
        }
    }
    var price = selectedOption
    var priceSpan= document.getElementById('price');
    priceSpan.textContent= ""+price;
  });

  document.addEventListener('change', function (event) {
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

    //checkboxes code
    const festSelectionCheckboxes = document.querySelectorAll('#fest-selection input[type="checkbox"]');
    const lastContentCheckboxes = document.querySelectorAll('#last-content input[type="checkbox"]');

    if (target.type === 'checkbox') {
      const listItem = target.closest('li');
      const content = target.parentNode.querySelector('.content');

      // Update counters based on the current checkbox state
      if (target.checked) {
        if (target.closest('#fest-selection')) {
          festSelectionCounter++;
        } else if (target.closest('#last-content')) {
          lastContentCounter++;
        }
      } else {
        if (target.closest('#fest-selection')) {
          festSelectionCounter--;
        } else if (target.closest('#last-content')) {
          lastContentCounter--;
        }
      }

      // Disable unchecked list items if the count exceeds 2 for each section
      festSelectionCheckboxes.forEach(function (checkbox) {
        const listItem = checkbox.closest('li');
        if (!checkbox.checked && festSelectionCounter >= festSelectionLimit) {
          listItem.classList.add('greyout');
          checkbox.disabled = true;
        } else {
          listItem.classList.remove('greyout');
          checkbox.disabled = false;
        }
      });

      lastContentCheckboxes.forEach(function (checkbox) {
        const listItem = checkbox.closest('li');
        if (!checkbox.checked && lastContentCounter >= 2) {
          listItem.classList.add('greyout');
          checkbox.disabled = true;
        } else {
          listItem.classList.remove('greyout');
          checkbox.disabled = false;
        }
      });

      // Show or hide content based on the current checkbox state
      if (content) {
        if (target.checked) {
          content.classList.add('visible');
          content.classList.remove('greyout');
        } else {
          content.classList.remove('visible');
          content.classList.add('greyout');
        }
      }
    }
  });
});
  