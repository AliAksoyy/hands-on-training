const email = prompt("please enter your email");

function isValid(frm) {
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Invalid");
    return false;
  } else {
    alert("Valid");
    return true;
  }
}

isValid(email);
