// var g = G$('John', 'Doe');
// g.greet().setLang('es').greet(true).log();

// on click of login button
$('#login').click(function() {

    // loginGrtr is a new Greetr object
    var loginGrtr = G$('John', 'Doe');

    // hide login form on hide
    $('#logindiv').hide();

    // loginGrtr.setLang($('#lang').val()) sets lang to user input selector
    // .HTMLGreeting('#greeting', true) sets the <h1> tag to a formal greet
    // .log() console logs the user is logged in
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})
