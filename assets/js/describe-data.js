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
