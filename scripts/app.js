$(document).foundation();

$(document).ready(function(){
  $('.main-nav__mobile-icon').click(function(){
    $(this).toggleClass('active');
  });

  $(function(){
    $('#Container').mixItUp({
      layout: {
        display: 'block',
      }
    });
  });
  
});

