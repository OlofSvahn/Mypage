function Validate()
{
    let firstname = document.forms["form"]["firstname"].value;
    let password = document.forms["form"]["password"].value;
    let choice = document.forms["form"]["dumbchoice"].value;

    let birthdate = new Date(document.forms["form"]["birthdate"].value);
    let birthYear = birthdate.getFullYear();
    let today = new Date();
    let currentYear = today.getFullYear();
    let age = currentYear - birthYear;

    let lettersRegex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    let passwordRegex = /^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!firstname.match(lettersRegex))
    {
        alert("Name cannot contain numbers!");
        return false;
    }

    if(!password.match(passwordRegex))
    {
        alert("Password must have minimum eight characters, at least one letter and one number")
        return false;
    }

    if(choice == "0")
    {
        alert("Please choose a dumbness level!");
        return false;
    }

    if(age > 130)
    {
        alert("You are too damn old!");
        return false;
    }
    else if(age < 5)
    {
        alert("You are too young, lol afk omg!");
        return false;
    }

    return true;
}