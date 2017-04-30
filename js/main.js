$(function() {

$('.plate').on('click', function() {

if ($('body').attr('class') === 'light') {
  $('.status').text("Who turned out the lights?");
  $('.switch').attr('class', 'switch off');
  $('body').attr('class', 'dark')
} else {
  $('.status').text("It's so bright in here!");
  $('.switch').attr('class', 'switch on');
  $('body').attr('class', 'light')

}
})
});
