document.addEventListener("DOMContentLoaded", function () {
  var festSelectionCounter = 0;
  var lastContentCounter = 0;

  document.addEventListener('change', function (event) {
    const target = event.target;
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
        if (!checkbox.checked && festSelectionCounter >= 2) {
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
