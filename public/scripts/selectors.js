$(function() {
  //$('body').html('hi');
  $('#child').hide('blind', function() {
    $(this).show('blind').append('hello world!');
  });
});
