$(document).ready(function(){

  $('#downloadResume').on('click', function () {
    event.preventDefault();
    event.stopPropagation();
    window.open('assets/resume/Nicolas_Lopez_Resume.pdf');
  });
});
