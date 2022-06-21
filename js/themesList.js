const themesList = [
    "https://bootswatch.com/5/slate/bootstrap.css",
    "https://bootswatch.com/5/cerulean/bootstrap.css",
    "https://bootswatch.com/5/darkly/bootstrap.css",
    "https://bootswatch.com/5/litera/bootstrap.css",
    "https://bootswatch.com/5/materia/bootstrap.css",
    "https://bootswatch.com/5/sandstone/bootstrap.css",
    "https://bootswatch.com/5/superhero/bootstrap.css",
    "https://bootswatch.com/5/cosmo/bootstrap.css",
    "https://bootswatch.com/5/flatly/bootstrap.css",
    "https://bootswatch.com/5/lumen/bootstrap.css",
    "https://bootswatch.com/5/minty/bootstrap.css",
    "https://bootswatch.com/5/simplex/bootstrap.css",
    "https://bootswatch.com/5/solar/bootstrap.css",
    "https://bootswatch.com/5/united/bootstrap.css",
    "https://bootswatch.com/5/cyborg/bootstrap.css",
    "https://bootswatch.com/5/journal/bootstrap.css",
    "https://bootswatch.com/5/lux/bootstrap.css",
    "https://bootswatch.com/5/pulse/bootstrap.css",
    "https://bootswatch.com/5/sketchy/bootstrap.css",
    "https://bootswatch.com/5/spacelab/bootstrap.css",
    "https://bootswatch.com/5/yeti/bootstrap.css",
];

//START THEMES
if (localStorage.getItem("theme")) {
    document.getElementById("themedStyle").setAttribute("href", localStorage.getItem("theme"));
}
let themeOptions = "<option value='css/bootstrap.min.css'>Select Theme</option>";
for (let i = 0; i < themesList.length; i++) {
    themeOptions = themeOptions + "<option value='" + themesList[i] + "'>" + themesList[i].substring(25, themesList[i].lastIndexOf("/")) + "</option>";
}
document.getElementById("themes").innerHTML = themeOptions;
function changeTheme() {
    let whichTheme = document.getElementById("themes").value;
    document.getElementById("themedStyle").setAttribute("href", whichTheme);
    localStorage.setItem("theme", whichTheme);
}

    //END THEMES