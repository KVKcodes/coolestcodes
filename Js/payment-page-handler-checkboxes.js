document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener('change', function (event) {
    const target = event.target;

    if (target.type === 'checkbox') {
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
  