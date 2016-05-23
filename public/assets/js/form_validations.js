/* Webarch Admin Dashboard 
/* This JS is only for DEMO Purposes - Extract the code that you need
-----------------------------------------------------------------*/ 
$(document).ready(function() {
  $(".select2").select2();
  //Traditional form validation sample
  $('#form_traditional_validation').validate({
                focusInvalid: false, 
                ignore: "",
                rules: {
                    urlSala: {
                        minlength: 4,
                        required: true
                    },
                    form1CardHolderName: {
            minlength: 2,
                        required: true,
                    },
                    form1CardNumber: {
                        required: true,
                        creditcard: true
                    },
                    cardType:{
                        required: true
                    }
                },

                invalidHandler: function (event, validator) {
          //display error alert on form submit    
                },

                errorPlacement: function (label, element) { // render error placement for each input type   
          $('<span class="error"></span>').insertAfter(element).append(label)
                    var parent = $(element).parent('.input-with-icon');
                    parent.removeClass('success-control').addClass('error-control');  
                },

                highlight: function (element) { // hightlight error inputs
          var parent = $(element).parent();
                    parent.removeClass('success-control').addClass('error-control'); 
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    
                },

                success: function (label, element) {
          var parent = $(element).parent('.input-with-icon');
          parent.removeClass('error-control').addClass('success-control'); 
                },

                submitHandler: function (form) {
                
                }
            }); 

            $('.select2', "#form_traditional_validation").change(function () {
                $('#form_traditional_validation').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
  //Iconic form validation sample 
     $('#form_iconic_validation').validate({
                errorElement: 'span', 
                errorClass: 'error', 
                focusInvalid: false, 
                ignore: "",
                rules: {
               nombre: {
                   minlength: 3,
                   required: true
               },
               apellidos: {
                   minlength: 3,
                   required: true
               },
               username: {
                   minlength: 4,
                   required: true
               },
               email: {
                   required: true,
                   email: true
               },
               numCliente: {
                   number: true,
               },
               password: {
                    minlength: 4
               },
               dni: {
                   minlength: 8,
                   required: true
               },
               telefono: {
                   minlength: 9,
                   number: true,
                   required: true
               },
               slug: {
                   minlength: 4,
                   required: true
               }
           },

                invalidHandler: function (event, validator) {
          //display error alert on form submit    
                },
                //Comentar para linea error por debajo
                errorPlacement: function (error, element) { // render error placement for each input type
                    var icon = $(element).parent('.input-with-icon').children('i');
                    var parent = $(element).parent('.input-with-icon');
                    icon.removeClass('fa fa-check').addClass('fa fa-exclamation');  
                    parent.removeClass('success-control').addClass('error-control');  
                },

                highlight: function (element) { // hightlight error inputs
          var parent = $(element).parent();
                    parent.removeClass('success-control').addClass('error-control'); 
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    
                },

                success: function (label, element) {
                    var icon = $(element).parent('.input-with-icon').children('i');
          var parent = $(element).parent('.input-with-icon');
                    icon.removeClass("fa fa-exclamation").addClass('fa fa-check');
          parent.removeClass('error-control').addClass('success-control'); 
                }

            });
  $('.select2', "#form_traditional_validation").change(function () {
                            $('#form_traditional_validation').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
                        });
  $('#form_sala').validate({
                errorElement: 'span', 
                errorClass: 'error', 
                focusInvalid: false, 
                ignore: "",
                rules: {
                urlSala: {
                   minlength: 3,
                   required: true
                }
              },

                invalidHandler: function (event, validator) {
          //display error alert on form submit    
                },
                //Comentar para linea error por debajo
                errorPlacement: function (error, element) { // render error placement for each input type
                    var icon = $(element).parent('.input-with-icon').children('i');
                    var parent = $(element).parent('.input-with-icon');
                    icon.removeClass('fa fa-check').addClass('fa fa-exclamation');  
                    parent.removeClass('success-control').addClass('error-control');  
                },

                highlight: function (element) { // hightlight error inputs
          var parent = $(element).parent();
                    parent.removeClass('success-control').addClass('error-control'); 
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    
                },

                success: function (label, element) {
                    var icon = $(element).parent('.input-with-icon').children('i');
          var parent = $(element).parent('.input-with-icon');
                    icon.removeClass("fa fa-exclamation").addClass('fa fa-check');
          parent.removeClass('error-control').addClass('success-control'); 
                }

            });
             $('.select2', "#form_iconic_validation").change(function () {
                $('#form_iconic_validation').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        //Form Condensed Validation
        $('#form-condensed').validate({
                errorElement: 'span', 
                errorClass: 'error', 
                focusInvalid: false, 
                ignore: "",
                rules: {
                    form3FirstName: {
                        minlength: 3,
                        required: true
                    },
          form3LastName: {
                        minlength: 3,
                        required: true
                    },
                    form3Gender: {
                        required: true,
                    },
          form3DateOfBirth: {
                        required: true,
                    },
          form3Occupation: {
             minlength: 3,
                        required: true,
                    },
          form3Email: {
                        required: true,
            email: true
                    },
                    form3Address: {
            minlength: 10,
                        required: true,
                    },
          form3City: {
            minlength: 5,
                        required: true,
                    },
          form3State: {
            minlength: 3,
                        required: true,
                    },
          form3Country: {
            minlength: 3,
                        required: true,
                    },
          form3PostalCode: {
            number: true,
            maxlength: 4,
                        required: true,
                    },
          form3TeleCode: {
            minlength: 3,
            maxlength: 4,
                        required: true,
                    },
          form3TeleNo: {
            maxlength: 10,
                        required: true,
                    },
                },

                invalidHandler: function (event, validator) {
          //display error alert on form submit    
                },

                errorPlacement: function (label, element) { // render error placement for each input type   
          $('<span class="error"></span>').insertAfter(element).append(label)
                },

                highlight: function (element) { // hightlight error inputs
          
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    
                },

                success: function (label, element) {
                  
                },

                submitHandler: function (form) {
                
                }
            }); 
  
  //Form Wizard Validations
  var $validator = $("#commentForm").validate({
      rules: {
        emailfield: {
          required: true,
          email: true,
          minlength: 3
        },
        txtFullName: {
          required: true,
          minlength: 3
        },
      txtFirstName: {
          required: true,
          minlength: 3
        },
      txtLastName: {
          required: true,
          minlength: 3
        },
      txtCountry: {
          required: true,
          minlength: 3
        },
      txtPostalCode: {
          required: true,
          minlength: 3
        },
      txtPhoneCode: {
          required: true,
          minlength: 3
        },
      txtPhoneNumber: {
          required: true,
          minlength: 3
        },
        urlfield: {
          required: true,
          minlength: 3,
          url: true
        }
      },
      errorPlacement: function(label, element) {
        $('<span class="arrow"></span>').insertBefore(element);
        $('<span class="error"></span>').insertAfter(element).append(label)
      }
    });

  $('#rootwizard').bootstrapWizard({
        'tabClass': 'form-wizard',
        'onNext': function(tab, navigation, index) {
          var $valid = $("#commentForm").valid();
          if(!$valid) {
            $validator.focusInvalid();
            return false;
          }
        else{
          $('#rootwizard').find('.form-wizard').children('li').eq(index-1).addClass('complete');
          $('#rootwizard').find('.form-wizard').children('li').eq(index-1).find('.step').html('<i class="fa fa-check"></i>'); 
        }
        }
   });

  //Mis datos perfil medico
  var $validator = $("#misDatosMedico").validate({
      rules: {
        email: {
          required: true,
          email: true,
          minlength: 3
        },
        password: {
          minlength: 4
        },
        nombre: {
          required: true,
          minlength: 3
        },
        apellidos: {
          required: true,
          minlength: 3
        },
        dni: {
          minlength: 9,
          maxlength: 11
        },
        movil: {
          number: true,
          minlength: 8
        },
        telefono: {
          number: true,
          minlength: 8
        },
        calle: {
          minlength: 3,
          maxlength: 200
        },
        codigo_postal: {
          minlength: 5,
          maxlength: 6
        },
        ciudad: {
          minlength: 3,
          maxlength: 100
        },
        pais: {
          minlength: 3,
          maxlength: 100
        }
      },
      errorPlacement: function(label, element) {
        $('<span class="arrow"></span>').insertBefore(element);
        $('<span class="error"></span>').insertAfter(element).append(label)
      }
    });

  $('#rootDatosMedico').bootstrapWizard({
        'tabClass': 'pasosDatosMedico',
        'onNext': function(tab, navigation, index) {
          var $valid = $("#misDatosMedico").valid();
          if(!$valid) {
            $validator.focusInvalid();
            return false;
          }
          else{
            $('#rootDatosMedico').find('.pasosDatosMedico').children('li').eq(index-1).addClass('complete');
            $('#rootDatosMedico').find('.pasosDatosMedico').children('li').eq(index-1).find('.paso').html('<i class="fa fa-check"></i>'); 
          }
        }
   });  

}); 