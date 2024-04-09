document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.option input[type="checkbox"]');
    const finishButton = document.querySelector('.finish-button');
    const selectionText = document.querySelector('.selection-text');
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        // Check if at least one checkbox is checked
        const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
        // Enable/disable finish button based on checkbox status
        finishButton.disabled = !atLeastOneChecked;
  
        // Show/hide selection text based on checkbox status and button status
        selectionText.style.display = atLeastOneChecked && !finishButton.disabled ? 'block' : 'none';
      });
    });
  
    // Initially hide the selection text
    selectionText.style.display = 'none';
  });
  