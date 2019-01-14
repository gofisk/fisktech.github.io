$(function () {
    $('#cardnumber').payment('formatCardNumber');
    $('#cardnumber').keyup(function (event) {
        $('#label-cardnumber').empty().append($(this).val());
    });
    $('.button-validate').on('click', function () {
        //Assume Invalid
        var valid = false, total = 0, mod10 = 0;
	    function valid_credit_card(value) {
		    //Validate Input One More Time
		    if (/[^0-9-\s]+/.test(value)) 
            return false;
            value = value.replace(/\D/g, ""); //Remove Spaces From Number
		    var base10 = 0, rawValue = 0, even = false;
		
            //This is Luhn'S Algorithm
		    for (var n = value.length - 1; n >= 0; n--) { //Loop Through Number
			rawValue = value.charAt(n),
			base10 = parseInt(rawValue, 10); //Format as a Decimal Number

			if (even) { //Only Manipulate Even Numbers
				if ((base10 *= 2) > 9) {
					base10 -= 9; //If number is double-digit, subtract 9
				}
			}
			total += base10; //Append new number to total
			even = !even; //This allows us to grab every other number
		}
        
        mod10 = total % 10;
		
		if ((mod10) == 0) { //If the modulo of the sum is equal to zero, we have a valid number
			valid = true;
		}
		return null; //End the function by returning null
	}
	
		var cardnum = document.getElementById('cardnumber').value;
		var cardnumRaw = document.getElementById('cardnumber').value.replace(/\s+/g, '');;
		valid_credit_card(cardnum);
		
		if (cardnumRaw.length == 0) {
			document.getElementById('warning').innerHTML = "Oops! Please Enter a Card #";
		} else if (cardnumRaw.length <= 14) {
			document.getElementById('warning').innerHTML = "Card # Must be 15-16 Digits";
		} else {
			if (valid) {
				$('.check').fadeToggle('slow', function () {
					$('.valid').fadeToggle('slow', 'linear');
					document.getElementById('sum').innerHTML = "Sum = " + total;
                    document.getElementById('rem').innerHTML = "Remainder = " + mod10;
				});
			} else {
				$('.check').fadeToggle('slow', function () {
					$('.error').fadeToggle('slow', 'linear');
					document.getElementById('sum2').innerHTML = "Sum = " + total;
                    document.getElementById('rem2').innerHTML = "Remainder = " + mod10;
				});
			} 
		}
    });
});