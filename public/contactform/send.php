<?php

$errorMSG = "";


/* Telegram setting */ 

$tokenTelegram = "92222222222:b5H_V8V8V8V8V8V8V8V8V8V8V8V8V8V8V8V";
$chatID = "-999999999";




// name
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// email
if (empty($_POST["email"])) {
    $errorMSG .= "Phone is required ";
} else {
    $email = $_POST["email"];
}

// message
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}

$EmailTo = "mail@polishchuk.me";
$Subject = "$name , You a message from the contact form of the site ChainFusion";
$froms = "From: ContactForm - ChainFusion <mail@polishchuk.me>";

// Email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// Send in email
$success = mail($EmailTo, $Subject, $Body, "From:".$froms);

// Format text for telegram
$textTelegram = urlencode("Name: $name \nE-mail: $email \nMessage: $message ");
    
if ($success && $errorMSG == ""){
        echo "success";    

        // Send in telegram
        $curl_tel=curl_init();
        $tg_url="https://api.telegram.org/bot".$tokenTelegram."/sendMessage?chat_id=".$chatID."&disable_web_page_preview=1&parse_mode=Markdown&text=$textTelegram";
        curl_setopt($curl_tel,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl_tel,CURLOPT_URL,$tg_url);
        $out=curl_exec($curl_tel);

    } else {
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>