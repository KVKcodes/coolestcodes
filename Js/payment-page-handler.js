var festSelectionCounter = 0;
var lastContentCounter = 0;

var festSelectionLimit = 0;
var lastSelectionLimit = 0;

var price;
var selectedOption;

const planOptions = document.getElementsByName('planOption');
const planSelectionButton = document.getElementById('register-next-button');
const priceSpan= document.getElementById('price');
const festSelectionCheckboxes = document.querySelectorAll('#fest-selection input[type="checkbox"]');
const lastContentCheckboxes = document.querySelectorAll('#last-content input[type="checkbox"]');


document.addEventListener("DOMContentLoaded", function () {
  planSelectionButton.addEventListener('click', function (event) {
    festSelectionCounter = 0;
    lastContentCounter = 0;
    for (var i = 0; i < planOptions.length; i++) {
      if (planOptions[i].checked) {
          selectedOption = planOptions[i].value;
          break;
      }
    }
    price = selectedOption
    priceSpan.textContent= ""+price;

    switch(price) {
      case "200":
        festSelectionLimit = 0;
        break;
      case "500":
        festSelectionLimit = 1;
        break;
      case "800":
        festSelectionLimit = 2;
        break;
      case "1000":
        festSelectionLimit = 10;
        break;          
    }
    console.log(festSelectionLimit+" "+price)
    
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
  });

  document.addEventListener('change', function (event) {
    console.log("dammn")
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

      console.log(festSelectionCounter);

      // Disable unchecked list items if the count exceeds 2 for each section


      // lastContentCheckboxes.forEach(function (checkbox) {
      //   const listItem = checkbox.closest('li');
      //   if (!checkbox.checked && lastContentCounter >= 2) {
      //     listItem.classList.add('greyout');
      //     checkbox.disabled = true;
      //   } else {
      //     listItem.classList.remove('greyout');
      //     checkbox.disabled = false;
      //   }
      // });

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
  