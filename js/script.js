$(document).ready(function(){
  // alert
  $('.alert').click(function(){
    alert("Make good use of this site")
    
  })

    // Image hide
    $('#hide').click(function(){
      $('img').hide(1000);
    });

    // Image show
    $('#show').click(function(){
      $('img').show(1000);
    })

    // Image show/hide toggle
    $('#toggle').click(function(){
      $('img').toggle('slow');
    })


});
