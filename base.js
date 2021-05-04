let currentAdress = window.location.href;
let currentURL = new URL(window.location.href);

let searchParams = new URLSearchParams(currentURL.searchParams);

let firstname = searchParams.get("firstname");
let email = searchParams.get("email");
let password = searchParams.get("password");
let birthdate = searchParams.get("birthdate");
let isidiot = searchParams.get("idiot");
let hasidiotparents = searchParams.get("idiotparents");
let dumbchoice = searchParams.get("dumbchoice");
let dumbchoices = [
    "Kinda stoopid",
    "Pretty f-ing dumb",
    "Very stupid",
    "Dumber than someone who is very dumb",
    "Håkan Hellström-level moron",
    "Practically brain dead",
    "Actually brain dead",
];

document.getElementById("fullname").innerHTML = "Here's your result, " + firstname;

let infoString = "First name: " + firstname + 
"<br>" + "Birthdate: " + birthdate;

let stupidinfo = "";

let stupidinfo2 = dumbchoices[dumbchoice];

if(isidiot == "on")
{
    stupidinfo += "You are a certified moron";
}
else
{
    stupidinfo += "You are NOT a certified moron";
}

if(hasidiotparents == "on")
{
    if(isidiot == "on")
    {
        stupidinfo += " and you also come from two idiot parents";
    }
    else
    {
        stupidinfo += ", but you come from two idiot parents";
    }
}
else
{
    if(isidiot == "on")
    {
        stupidinfo += ", but your parents have normal IQ, which is too bad for you";
    }
    else
    {
        stupidinfo += " and your parents are not unsmart... get it?";
    }
}

document.getElementById("info").innerHTML = infoString;
document.getElementById("stupidinfo").innerHTML = stupidinfo;
document.getElementById("stupidinfo2").innerHTML = stupidinfo2;