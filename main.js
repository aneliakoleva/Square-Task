//Calculating time until match
let countDownDate = new Date("Jun 26, 2018 21:00:00").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".time").html( "<p>Time Left:</p>" +  days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

//Learn More

function alertLearn() {
    alert("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
}

//Scroll To Top
$(".top").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
});

//Printing results from bet

$('.choice-box-input').change(function() {
    $('.bet-result-second').val($(this).val());
});
$('.choice-box-input-right').change(function() {
    $('.bet-result').val($(this).val());
});

//Submit button


$('.submit-button').click(function() {
   if($('.yes-radio').is(':checked')) {
         $(".choice-boxes").addClass("remove");
         $(".final-result").addClass("remove");
         $(".conclusion").addClass("conclusion-sub");
   }else {
console.log("not checked");
   }
});
