$(document).ready(function(){
// The colored boxes
    $('.changeBtn1').on('click',function() {
        $('.red_box').css('background-color', 'green');
    });

    $('.changeBtn2').on('click',function() {
        $('.blue_box').css('background-color', 'yellow');
        $('.blue_box').css('border', 'dotted', 'red');

    });
    
    $('.changeBtn3').on('click',function() {
        $('.green_box').css('background-color', 'purple');
    });
    
    $('.changeAll').on('click',function() {
        $('.green_box, .blue_box, .red_box').css('background-color', 'black');
    });


//Hide boxes

$('.hideBtn1').on('click',function() {
    $('.red_box').hide();
});

$('.hideBtn2').on('click',function() {
    $('.blue_box').hide();
});

$('.hideBtn3').on('click',function() {
    $('.green_box').hide();
});

$('.hideAll').on('click',function() {
    $('.red_box, .blue_box, .green_box').hide();
});


// Reset Colors

$('.resetcol').on('click',function() {
    $('.red_box').css('background-color', 'red');
    $('.blue_box').css('background-color', 'blue');
    $('.green_box').css('background-color', 'green');
});

})


//Show All

$('.showall_1').on('click',function() {
    $('.red_box, .blue_box, .green_box').show();
});




///Empty space between

$(document).ready(function(){
    $('.hidden').hide('background-color', 'white')
});