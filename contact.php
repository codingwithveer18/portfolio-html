<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set the recipient email address where you want to receive the form submissions
    $recipient_email = "dscadgitm@gmail.com";

    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate the data (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Create the email message
    $subject = "Contact Form Submission from $name";
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message: $message\n";

    // Send the email
    $headers = "From: $email";
    if (mail($recipient_email, $subject, $email_body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error sending the message.";
    }
} else {
    echo "Invalid request.";
}
?>
