jQuery(document).ready(function($){

  /*******************
    dropdown
  ********************/
  $(".dropdown > a").click(function(e) {
    e.preventDefault();
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings("[class$='-menu']");
    $menu.toggleClass("show-menu");
  });


  /*******************
    external links
  ********************/
  $(function() {
    $('a[rel*=external]').click( function() {
      window.open(this.href);
      return false;
    });
  });


  /*******************
    context menus
  ********************/
  $( ".context > a" ).click(function(e) {
    e.preventDefault();
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings();
    $menu.toggleClass("active");
  });


  /*******************
    initialize tooltips
  ********************/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /*******************
    upload input
  ********************/

  $('.upload-input').each(function () {
    var $realInputField = $(this).children('input[type="file"]');
    var $dummyInputField = $(this).children('input[type="text"]');
    var $dummyInputBtn = $(this).find('.btn');

    $dummyInputBtn.click(function() {
      return $realInputField.click();
    });
    $realInputField.change(function() {
      $dummyInputField.val($( this ).val().replace(/^.*[\\\/]/, ''));
      $dummyInputBtn.text('Replace file');
    });
  })

});
