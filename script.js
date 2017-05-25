$(document).ready(function() {

  $('#search').on('click', newGiphy);
  $('.gifDisplay').on('click', '.remove', deleteGif);

  //function to make ajax call to retrieve gif url from Giphy API
  function newGiphy() {
    var input = $('#input').val();

    if(input === ' ') {  //alert for user to enter search input if none was added before clicking 'search' button
      alert('You forgot to enter a search!');
    } else {  //run ajax call (below) as usual- on click of 'search' button
      //user input added to the giphy url
      var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';

      //make ajax call to retrieve the gif
      $.ajax({
        url: searchURL,
        dataType: 'JSON',
        success: function(response) {
          console.log(response);

          var url = response.data[0].images.downsized.url;

          var gifOnDom = '<img src=' + url + '></br> <button class="remove" type="button">Remove</button>';
          $('.gifDisplay').append('<div class="remove">' + gifOnDom + '</div>');

        }// end of success
      }); //end ajax

      //call reset() to clear user input from search bar
      reset();

    }// end else
    } // end newGiphy()
  });// end onReady

  //function to clear user input from search bar
  function reset() {
    document.getElementById('input').value = ' ';
  }

  //function to delete gif from DOM on '.remove' button click
  function deleteGif() {
    $(this).parent().remove();
  }


// //-----------------------------------------------------------------------------
// practice to reinforce understanding!

// $(document).ready(function() {
//
//   // on click of 'search' button run newGiphy()
//   $('.search').on('click', newGiphy());
//
//   //function to check for user input, if none display and alert, otherwise make ajax call
//   function newGiphy() {
//     //setting user input to a variable
//     var userInput = $('#input').val();
//
//     if (userInput === '') {
//       alert('You forgot to enter a search!');
//       }
//     else {
//       //set url to include user input
//       var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=dc6zaTOxFJmzC';
//       // ajax call
//       $.ajax({
//       url: searchUrl,
//       type: 'GET',
//       dataType: 'JSON',
//       success: function(response) {
//         console.log(response);
//
//     var gif = response.data[0].images.downsized.url;
//     $('.gifsOnDom').append('<img src=' + gif + '>');
//
//     }// end success
//   }); // end ajax
//
//   // clearUserInput();
//
//   }// end else
//  }// end newGiphy()
// });// end onReady()
//
// //function to clear user input from search bar
// function clearUserInput() {
//   document.getElementById('input').value = " ";
// }// end clearUserInput()
