function ValidateEmail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(str)) {
       console.log("Email is validated");
    } else {
       console.log("Email is not validate");
    }
 }