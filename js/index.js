

// Logic for order processing at the frontend
$('#checkout-form').on('submit', function(event){

    event.preventDefault();

    // Checking out the validity of the form using the html mechanism (regex, type, pattern etc)
    if(!this.checkValidity()){
        $(this).addClass('was-validated');
        $(this).find(':invalid').first().trigger('focus');//Give the focus to the invalid field
        return;
    }

    // if the form is valid 

    const order = Object.fromEntries(new FormData(this));

    console.log("Order ready :", order);

});



// Checking validity for Newsletter forms
$('nl-form').on('submit', function(event){

    event.preventDefault();

    if(!this.checkValidity()){
        $(this).addClass('was-validated');
        $(this).find(':invalid').first().trigger('focus');
        return;
    }

    const subs = Object.fromEntries(new FormData(this));
    console.log('New subscriber :', subs);
});



// Updating the year info on the site footer

$('#year').text(new Date().getFullYear());