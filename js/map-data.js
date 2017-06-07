jQuery(document).ready(function($){
  $( ".data-edit .data-column .data-type-select ul > li" ).click(function() {
    $( this ).parents(".data-column").removeClass( "data-type-1 data-type-2 data-type-3 data-type-4 data-type-5 data-type-6 data-type-7 data-type-8 data-type-9" );
  });

  $( ".data-edit .data-column .data-type-select li.type-1" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-1" );
  });

  $( ".data-edit .data-column .data-type-select li.type-2" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-2" );
  });

  $( ".data-edit .data-column .data-type-select li.type-3" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-3" );
  });

  $( ".data-edit .data-column .data-type-select li.type-4" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-4" );
  });
  $( ".data-edit .data-column .data-type-select li.type-5" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-5" );
  });

  $( ".data-edit .data-column .data-type-select li.type-6" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-6" );
  });
  $( ".data-edit .data-column .data-type-select li.type-7" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-7" );
  });

  $( ".data-edit .data-column .data-type-select li.type-8" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-8" );
  });

  $( ".data-edit .data-column .data-type-select li.type-9" ).click(function() {
    $( this ).parents(".data-column").addClass( "data-type-9" );
  });

  $( ".data-edit .data-column .data-type-select li a" ).click(function() {
    $( this ).parent("li").addClass( "selected" );
    $( this ).parents(".data-column").addClass( "ready" );
  });
});
