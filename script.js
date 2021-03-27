
//use of append
$(document).ready(function(){
    $('.btn').click(function(){
        $('h2').append(' Dhaka, Bangladesh.');
    })
})

//use of prepend;
$(document).ready(function(){
    $('.btn2').click(function(){
        $('h3').prepend('Dhaka ');
    })
})

//use of before;
$(document).ready(function(){
    $('.btn3').click(function(){
        $('h4').before('Bangladesh ');
    })
})

//use of after;
$(document).ready(function(){
    $('.btn4').click(function(){
        $('h5').after('country');
    })
})

//use of remove;
$(document).ready(function(){
    $('.btn5').click(function(){
        $('.box1').remove();
    })
})

//use of empty;
$(document).ready(function(){
    $('.btn6').click(function(){
        $('.box2').empty();
    })
})

//use of addClass;
$(document).ready(function(){
    $('.btn7').click(function(){
        $('.box3').addClass('khan');
        
    })
})

//use of addClass;
$(document).ready(function(){
    $('.btn8').click(function(){
        $('.box4').removeClass('khan2');
    })
})

//use of addClass;
$(document).ready(function(){
    $('.btn9').click(function(){
        $('.box5').toggleClass('khan3');
    })
})

//use of css property;
$(document).ready(function(){
    $('.btn10').click(function(){
        $('p').css({
            'background': 'yellow',
            'font-size': '20px',
            'color': 'red'
        });
    })
})