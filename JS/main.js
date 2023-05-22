console.log('Script Loaded')

$('#about-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('#about-me').offset().top}, 'slow');
});

$('#skills-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('#skills').offset().top}, 'slow');
});

$('#contact-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('#contact').offset().top}, 'slow');
});
$('#portfolio-btn').click(function() {
    $('html,body').animate({
        scrollTop: $('.projects').offset().top}, 'slow');
});
$('#waves-effect waves-light btn modal-trigger').ready(function(){
    $('.modal').modal();
  });