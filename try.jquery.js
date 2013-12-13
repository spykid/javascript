/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $(".photos").slideToggle();
  });
  
  function showPhotos() {
      $(this).find("span").slideToggle();
  }
  $(".photos").on("mouseenter", "li", showPhotos).on("mouseleave", "li", showPhotos);
});

// Keyuo Event Handle
$(document).ready(function() {
  $("#nights").on("keyup" ,function() {
    $('#nights-count').text($(this).val());
  });
});


$(document).ready(function() {
  $("#nights").on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $("#total").text(nights * dailyPrice);
    $("#nights-count").text($(this).val());
  });
  $('#nights').on('focus', function(){
    $(this).val(7);
  });
});


$(document).ready(function() {
  $(".see-photos").on("click", function(event) {
      event.stopPropagation();
    $(this).closest(".tour").find(".photos").slideToggle();
  });
  $(".tour").on("click", function() {
    alert("This should not be called");
  });
});

$(document).ready(function() {
  $(".see-photos").on("click", function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest(".tour").find(".photos").slideToggle();
  });
  $(".tour").on("click", function() {
    alert("This should not be called");
  });
});

// Expanding on on()
function showTicket() {
  $(this).closest('.confirmation').find('.ticket').slideDown();
}

$(document).ready(function(){
    $('.confirmation').on('click', 'buttons', showTicket);
    $('.confirmation').on('mouseenter', 'h3', showTickte);
});

$(document).ready(function() {
  $("#tour").on("click", "button", function() { 
    $(".photos").slideToggle();
  });
  $('.photos').on('mouseenter','li',function(){});
});

$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $(".photos").slideToggle();
  });
  function showPhotos() {
    $(this).find("span").slideToggle();
  }
  $(".photos").on("mouseenter", "li", showPhotos).on("mouseleave", "li", showPhotos);
});
