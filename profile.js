document.addEventListener("DOMContentLoaded", function() {
  const avatarInput = document.getElementById('avatar-input');
  const locationInput = document.getElementById('location-input');
  const nextBtn = document.getElementById('next-btn');
  const chooseImageButton = document.querySelector('.choose-image-btn');

  // Function to handle file input change
  avatarInput.addEventListener('change', function() {
    checkInputs();
  });

  // Function to handle location input change
  locationInput.addEventListener('input', function() {
    checkInputs();
  });

  // Function to check if inputs are filled and enable/disable the next button accordingly
  function checkInputs() {
    if (avatarInput.files[0] && locationInput.value.trim() !== '') {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }
  }

  // Trigger file input click event when "Choose Image" button is clicked
  chooseImageButton.addEventListener('click', function() {
    avatarInput.click();
  });
});
