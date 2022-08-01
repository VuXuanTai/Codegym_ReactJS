function ValidateAccount(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
       console.log("Account is validated");
    } else {
       console.log("Account is not validate");
    }
 }