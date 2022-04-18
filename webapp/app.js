window.addEventListener("DOMContentLoaded", event => {
    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let feedback = document.querySelector("textarea").value;
        if (document.querySelector("form").checkValidity()) {
            // TODO: Send the data to the server
            console.log(`Name: ${name} Email: ${email} Feedback: ${feedback}`);
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("textarea").value = "";
            showDialog("We've received your feedback. Thanks!")
        } else {
            showDialog("Please enter a valid name and email address.")
        }
    })
});

function showDialog(message) {
    if ('native' in window) {
        native.alert(message);
    } else if (window.webkit && window.webkit.messageHandlers 
            && window.webkit.messageHandlers.dialogs) {
        window.webkit.messageHandlers.dialogs.postMessage(message);
    } else {
        alert(message)
    }
}

function injectFormData(name, email="") {
    document.querySelector("#name").value = name;
    document.querySelector("#email").value = email;
}
