let myPhoto = document.querySelector('img');


myPhoto.onclick = function ()
{
    let mySrc = myPhoto.getAttribute("src");

    if (mySrc === "images/eduardo.jpg")
    {
        myPhoto.setAttribute('src', "images/mustang_fma.jpg");
    }
    else
    {
        myPhoto.setAttribute('src', 'images/eduardo.jpg');
    }
}

function setUserGreeting()
{
    let userName = prompt("Entre o seu nome.");
    localStorage.setItem('userName', userName);
    pGreeting.textContent = `Olá ${userName}, essa página conterá informações sobre Eduardo Vicentini`;
}


if (document.querySelector("#userButton"))
{
    document.querySelector("#userButton").onclick = function()
    {
        setUserGreeting();
    }
}

if (document.querySelector("#pGreeting"))
{
    let pGreeting = document.querySelector("#pGreeting");

    if (localStorage.getItem('userName') !== null)
    {
        let storedName = localStorage.getItem('userName');
        pGreeting.textContent = `Olá ${storedName}, essa página conterá informações sobre Eduardo Vicentini`;
    }
}

function setBgColor(color)
{
    localStorage.setItem('bgColor', color);
    // TODO 
    // Save the preference for the backgroud color to be the selected option next time
    document.querySelector('html').style.backgroundColor = color;

}

if (localStorage.getItem('bgColor'))
{
    let storedColor = localStorage.getItem('bgColor');
    document.querySelector('html').style.backgroundColor = storedColor;

}

if (document.querySelector('#bgcolor'))
{
    document.querySelector('#bgcolor').onchange = function() 
    {

        setBgColor(this.value);
    }
}
