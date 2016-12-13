jQuery(document).ready(function($){
  // Specific IDs need to be replaced with something more dynamic

  // Instance the tour
  var tour = new Tour({
    name: "cards",
    steps: [
    {
      element: "#column_3 .preview",
      title: "Data Cards",
      content: "This 'card' represents one column of your data. The top section of the card contains a preview of your provided data, to serve as a reference."
    },
    {
      element: "#column_3 .field-info #title_3",
      title: "Title & Description",
      content: "The bottom section of the card is where you can describe the data. Give each card a title, this will be used to refer to the data contained in this card. Optionally, you can add a more lengthy description."
    },
    {
      element: "#column_3 .field-info #type_3",
      title: "Data Type",
      content: "You should 'map' each card as accurately as possible to the available data types."
    }
  ]});

  // Initialize the tour
  tour.init();

  // Start the tour
  tour.start();


  // Instance the tour
  var constant_guide = new Tour({
    name: "constant",
    steps: [
    {
      element: "#column_37 .constant",
      title: "Constant Value",
      content: "Add a constant value here."
    },
    {
      element: "#column_37 .field-info #title_37",
      title: "Describe Data",
      content: "Add descriptive information, as you would for a regular card."
    }
  ]});


  $( "#column_37" ).hide();
  // Start the tour
  $( ".add a" ).click(function() {
    $( "#column_37" ).show( "slow", function() {
      constant_guide.init();
      constant_guide.start();
      $(this).find(".constant textarea").focus();
    });
  });

  // Remove button
  $( "div[id*='column_'] .close" ).click(function() {
    $(this).parents("div[id*='column_']").hide("slow");
    constant_guide.end();
  });

});
