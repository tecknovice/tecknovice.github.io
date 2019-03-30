let url = new URL(window.location.href);
let name_val = url.searchParams.get("name");
let birthday_val = url.searchParams.get("birthday");
let sex_val = url.searchParams.get("sex");
let address_val = url.searchParams.get("address");
let phone_val = url.searchParams.get("phone");
let email_val = url.searchParams.get("email");
let password_val = url.searchParams.get("password");

reg_name.children[1].innerText=name_val;
birthday.children[1].innerText=birthday_val;
sex.children[1].innerText=sex_val;
address.children[1].innerText=address_val;
phone.children[1].innerText=phone_val;
email.children[1].innerText=email_val;
password.children[1].innerText=password_val;
