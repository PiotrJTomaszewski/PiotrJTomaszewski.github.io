function decodeEmail() {
    const email_element = document.getElementById("email");
    const email_address = buf.toString(email_element.dataset.email);
    email_element.setAttribute("href", "mailto:" + email_address);
}