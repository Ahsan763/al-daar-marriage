$(document).ready(function(){
    $(".login__input.email").focus(function() {
        $(this).nextAll(".login__input-required").first().addClass("d-block");
    });



    $('.login__input-sle2').on('change', function() {
        // Get the number of selected options
        var selectedOptions = $('.login__input-sle2 option:selected').length;
    
        // If only one option is selected
        if (selectedOptions === 1) {
          // Add the 'd-none' class to the previous element of '.login__requiredtext'
          $(this).prev('.login__requiredtext').addClass('d-none');
        } else {
          // Remove the 'd-none' class from the previous element of '.login__requiredtext'
          $(this).prev('.login__requiredtext').removeClass('d-none');
        }
      });





    $('.login__input:not(.email):not(.phone)').keyup(function () {
        if ($(this).val().length === 0) {
            $(this).val($.trim($(this).val()));
            $(this).removeClass('field-white');
            $(this).removeClass('field-red');
            $(this).prev(".login__requiredtext").removeClass("d-none")
            $(this).nextAll(".login__input-required2").first().removeClass("d-none")
            
        } else if ($(this).val().length > 1) {
            $(this).addClass('field-white');
            $(this).removeClass('field-red');
            $(this).prev(".login__requiredtext").addClass("d-none")
            $(this).nextAll(".login__input-required2").first().addClass("d-none")

        } else {
            $(this).val($.trim($(this).val()));
            $(this).removeClass('field-white');
            $(this).addClass('field-red');
            $(this).prev(".login__requiredtext").removeClass("d-none")
            $(this).nextAll(".login__input-required2").first().removeClass("d-none")
        }
    })
    $(".email").keyup(function () {
        var email = $(".email").val();
        if (isValidEmailAddress(email)) {
            $('.email').addClass('field-white');
            $('.email').removeClass('field-red');
            $('.email').nextAll(".login__input-required").first().addClass("d-none")
        } else {
            $('.email').addClass('field-red');
            $('.email').removeClass('field-white');
            $('.email').nextAll(".login__input-required").first().removeClass("d-none")
        }
    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

});