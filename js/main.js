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

});
