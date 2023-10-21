document.addEventListener('DOMContentLoaded', function() {

  const stepBtns = document.querySelectorAll('.tabs__btn');
  const consultationWrapper = document.querySelectorAll('.how-content-wrap');

  stepBtns.forEach(function(stepBtn) {
    stepBtn.addEventListener('click', function() {
      const path = event.currentTarget.dataset.path;
      consultationWrapper.forEach(function(wrap) {
        if(wrap.dataset.target === path) {
          wrap.classList.add('how-content-wrap-active');
        } else {
          wrap.classList.remove('how-content-wrap-active');
        }
      })
      stepBtns.forEach(function(btn) {
        if (btn === stepBtn) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      })
    })
  })
})