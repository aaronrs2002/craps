const socialMedia = [
    { link: "https://www.linkedin.com/in/aaronrs2002", theClass: "fab fa-linkedin" },
    { link: "https://github.com/aaronrs2002", theClass: "fab fa-github" },
    { link: "https://www.youtube.com/channel/UC_cqZ5WhobgOTFjRqcZKgKg", theClass: "fab fa-youtube" },
    { link: "mailto:aaron@web-presence.biz", theClass: "far fa-paper-plane" },
];
let socialHTML = "";
for (let i = 0; i < socialMedia.length; i++) {
    socialHTML = socialHTML + "<a class='p-2' href='" + socialMedia[i].link + "' target='_blank' title='" + socialMedia[i].link + "' ><i class='" + socialMedia[i].theClass + "' ></i></a>";
}
document.querySelector("#socialList").innerHTML = socialHTML;
const date = new Date();
document.querySelector("#yr").innerHTML = date.getFullYear();