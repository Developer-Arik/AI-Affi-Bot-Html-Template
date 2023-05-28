$('#menu-toggle').click(function (e) { 
 e.preventDefault();
 $(this).toggleClass('open');
 $('#mobile-nav').toggleClass('d-none');
 if($(this).hasClass('open')){
  $(this).html(`<span class="material-symbols-outlined" style="font-size: 35px;">close</span>`);
 }else{
  $(this).html(`<span class="material-symbols-outlined" style="font-size: 35px;">menu</span>`);
 }
});