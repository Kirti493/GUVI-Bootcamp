function formValidation() {
    document.registration.postal.width = document.registration.country.width;
    var userName = document.registration.username;
    var addressLine1 = document.registration.address1;
    var addressLine2 = document.registration.address2;
    var city = document.registration.city;
    var state = document.registration.state;
    var postal = document.registration.postal;
    var country = document.registration.country;
    var email = document.registration.email;
    var phone = document.registration.phone;
    {
      if (allLetterName(userName)) {
        if (alphanumericAddress(addressLine1)) {
          if (alphanumericAddress(addressLine2)) {
            if (allLetterCity(city)) {
              if (allLetterState(state)) {
                if (allnumericPostal(postal)) {
                  if (countryselect(country)) {
                    if (ValidateEmail(email)) {
                      if (allnumericPhone(phone)) {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    return false;
  }
  
  // UserName
  function allLetterName(uname) {
    console.log('called function');
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
      return true;
    } else {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
    }
  }
  
  // State
  function allLetterState(ustate) {
    var letters = /^[A-Za-z]+$/;
    if (ustate.value.match(letters)) {
      return true;
    } else {
      alert('Username must have alphabet characters only');
      ustate.focus();
      return false;
    }
  }
  
  // City
  function allLetterCity(ucity) {
    var letters = /^[A-Za-z]+$/;
    if (ucity.value.match(letters)) {
      return true;
    } else {
      alert('Username must have alphabet characters only');
      ucity.focus();
      return false;
    }
  }
  
  // address
  function alphanumericAddress(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
      return true;
    } else {
      alert('User address must have alphanumeric characters only');
      uadd.focus();
      return false;
    }
  }
  
  // email
  function ValidateEmail(uemail) {
    var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (uemail.value.match(mailformat)) {
      return true;
    } else {
      alert('You have entered an invalid email address!');
      uemail.focus();
      return false;
    }
  }
  
  // postal
  function allnumericPostal(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)) {
      return true;
    } else {
      alert('ZIP code must have numeric characters only');
      uzip.focus();
      return false;
    }
  }
  
  // Phone
  function allnumericPhone(uphone) {
    var numbers = /^[0-9]+$/;
    if (uphone.value.match(numbers)) {
      return true;
    } else {
      alert('Phone Numbers  must have numeric characters only');
      uphone.focus();
      return false;
    }
  }
  
  // country
  function countryselect(ucountry) {
    if (ucountry.value == 'Default') {
      alert('Select your country from the list');
      ucountry.focus();
      return false;
    } else {
      return true;
    }
  }

  function show_alert() {
    alert("Thank You!");
  }