const email_element = document.getElementById("email");
const email_address = decodeURIComponent(escape(window.atob(email_element.dataset.email)));
email_element.setAttribute("href", "mailto:" + email_address);