const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

   button.addEventListener('click', function() {
   modal.classList.remove('hidden');

});
   
   
