/*
  STUGOV Email Signature Generator
  Copyright 2016 - Scott Fisk
  Dev Site: https://gofisk.com
*/

// Place raw HTML into container
function updateHtmlSigRaw() {
  get_html_signature_full_visual = document.getElementById("signature-full-visual").innerHTML;
  $("#signature-full-html textarea").text(get_html_signature_full_visual);
}

// Reset form
function resetForm() {
  document.getElementById("member-information-form").reset();
  initialize_dummy_data();
}

// Reset form, even on soft page refreshes
resetForm();

// Reset form button functionality
$("#reset-form").click(function(e) {
  e.preventDefault();
  resetForm();
});

//
// Activate Bootstrap tabs
$("#html-signature-full-tabs a").click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

//
// Set variables and defaults
var member = {
  full_name: "Scott Fisk",
  position: "Director of Information Technology",
  email_address: "fisk@iastate.edu",
  company_name: "Student Government",
  phone_mobile: "555-123-4567"
}

function initialize_dummy_data() {
  // Assign default variables on DOM load
  for (var key in member) {
    if(member.hasOwnProperty(key)) {
      $("span.output_"+key).html(member[key]);
    }
  }
}
initialize_dummy_data();

// Location addresses
var address_full = {
  iastate: "Iowa State University",
}
var address_horizontal = {
  iastate: "Iowa State University",
}

// HTML Full signature output
function output_address_full() {
  var address_line_full = address_full.iastate;
  $("span.output_address_full").html(address_line_full);
  $(".input_office input[type=radio]").on("change", function(){
    if(document.getElementById('location_austin').checked) {
      address_line_full = address_full.iastate;
    }
    $("span.output_address_full").html(address_line_full);
    updateHtmlSigRaw()
  });
}
output_address_full();

// StuGov Wordmark
function output_stugov_logo() {
  var wpe_logo_html = "<td border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><br><img src=\"https://www.stugov.iastate.edu/assets/images/stugov_email_signature.png\" width=\"250\" height=\"45\"></td>";
  // Logo is visible in initial state
  $(".logo_element").show();
  $(".logo_element").html(wpe_logo_html);
  // Monitor logo option to hide/show
  $(".input_logo input[type=radio]").on("change", function(){
    if(document.getElementById('logo_show').checked) {
      $(".logo_element").show();
      $(".logo_element").html(wpe_logo_html);
    } else if(document.getElementById('logo_hide').checked) {
      $(".logo_element").hide();
      $(".logo_element").html('');
    }
    updateHtmlSigRaw()
  });
}
output_stugov_logo();


// FULL NAME
// Check input field for data
$(".input_full_name input").on("change keyup paste", function(){
  var full_name = $(this).val();
  if(full_name) {
    $("span.output_full_name").html(full_name);
  } else {
    $("span.output_full_name").html(member.full_name);
  }
  updateHtmlSigRaw()
});


// POSITION
// Check input field for data
$(".input_position input").on("change keyup paste", function(){
  var position = $(this).val();
  if(position) {
    $("span.output_position").html(position);
  } else {
    $("span.output_position").html(member.position);
  }
  updateHtmlSigRaw()
});

// EMAIL ADDRESS
// Check input field for data
$(".input_email_address input").on("change keyup paste", function(){
  var email_address = $(this).val();
  if(email_address) {
    $("span.output_email_address").html(email_address);
    $(".email_address_anchor").attr("href", "mailto:"+email_address);
  } else {
    $("span.output_email_address").html(member.email_address);
    $(".email_address_anchor").attr("href", "mailto:"+member.email_address);
  }
  updateHtmlSigRaw()
});

var phone_mobile = "";

// Check input field for data
$(".input_phone_mobile input").on("change keyup paste", function(){
  var phone_mobile = $(this).val();
  if(phone_mobile) {
    $(".phone_numbers_element").show();
    $(".phone_mobile_element").show();
    $("span.output_phone_mobile").html(phone_mobile);
    $(".phone_number_anchor").attr("href", "tel:"+phone_mobile);
  } 
  updateHtmlSigRaw()
});

// Fill in HTML signature on DOM load
updateHtmlSigRaw();