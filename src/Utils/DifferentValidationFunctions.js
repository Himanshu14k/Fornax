const validatePhone = phone => {
  let isValid = true;
  if (phone === null) {
    isValid = false;
    alert('Please enter your phone number.');
    return isValid;
  } else {
    if (typeof (phone !== 'undefined')) {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(phone)) {
        isValid = false;
        alert('Please enter only number.');
        return isValid;
      } else if (phone.length != 10) {
        isValid = false;
        alert('Please enter valid phone number.');
        return isValid;
      }
    }
  }
  return isValid;
};

const validateEmail = email => {
  let isValid = true;
  if (email.length === 0) {
    isValid = false;
    alert('Please enter your email Address.');
    return isValid;
  }
  if (typeof (email !== 'undefined')) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    if (!pattern.test(email)) {
      isValid = false;
      alert('Please enter valid email address.');
      return isValid;
    }
  }
  return isValid;
};

const validatePassword = password => {
  let isValid = true;
  if (password.length < 6) {
    isValid = false;
    alert('Please enter valid Password!');
    return isValid;
  } else {
    // code for password validation though server
    isValid = true;
  }
  return isValid;
};

export {validatePhone, validatePassword, validateEmail};
