   // Function to change the background color
   const bgColorPicker = document.getElementById('bgColorPicker');
   bgColorPicker.addEventListener('change', function() {
     document.body.style.backgroundColor = bgColorPicker.value;
   });

   // Function to change the font size
   const fontSizeSlider = document.getElementById('fontSizeSlider');
   fontSizeSlider.addEventListener('input', function() {
     document.body.style.fontSize = fontSizeSlider.value + 'px';
   });

   // Function to toggle dark mode
   const darkModeToggle = document.getElementById('darkModeToggle');
   darkModeToggle.addEventListener('click', function() {
     document.body.classList.toggle('dark-mode');
   });

   // Function to toggle font style
   const fontStyleToggle = document.getElementById('fontStyleToggle');
   fontStyleToggle.addEventListener('click', function() {
     document.body.classList.toggle('serif-font');
   });