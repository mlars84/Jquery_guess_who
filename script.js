$(document).ready(onReady);
//global variables used in functions
var nameArray = [
  {name: 'Zeinab', image: "https://github.com/hassanz101.png"},
  {name: 'Alayna', image: "https://github.com/AlaynaGrace.png"},
  {name: 'Matt', image:"https://github.com/mlars84.png"},
  {name: 'Barb', image: 'https://github.com/barbking.png'}
];
var rand = randomNumber(0, nameArray.length-1);

function onReady(){
  //event listener
  $('.container').on('click', 'img', game);
  // $(this).on(mouseenter(function(){
  //   $(this).css('opacity',0.5);
  // }));
  // $(this).on(mouseleave(function(){
  //   $(this).css('opacity',1);
  // }));
  appendImgs();
} // end onReady

function appendImgs(){
  // append data of img to the container to display on the DOM
  for (var i = 0; i < nameArray.length; i++) {
    $('.container').append("<img src='" + nameArray[i].image +"' data-name='" + nameArray[i].name + "'>");
  }
  $('#user').text(nameArray[rand].name); //putting random name on DOM
  //$('.container').hover(hoverFunction);
} // end appendImgs

// used the onReady function to check if the data is correct/false
function game () {
  if ($(this).data('name') === nameArray[rand].name) {
    $('.results').text("You win!");
    $('.results').append("<img src='https://media.tenor.co/images/100e9b8bfac7ee3367d8db34530b49ad/tenor.gif'>");
    fades();
      rand = randomNumber(0, nameArray.length-1);
      $('#user').text(nameArray[rand].name);
  } else {
      $('.results').text("Try again");
      $('.results').append("<img src='http://i104.photobucket.com/albums/m166/Zain_Renault/you%20almost%20did%20the%20thing_zpsaxchewam.png' id='pic'>");
      fades();
  }
}// end game

function fades() {
  setTimeout(function(){
    $('.results').fadeOut('slow',function(){
      $('.results').empty();
      $('.results').fadeIn('fast');
    });
    }, 2000);
} // end fades

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber
