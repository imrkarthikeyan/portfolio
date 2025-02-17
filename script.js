function downloadcv(){
    const a=document.createElement('a');
    a.href="https://drive.google.com/file/d/1EhxhXALF3Xce0-cEVWqbCRy3DO-X3dvI/view?usp=sharing "
    a.download="karthikeyan_resume.pdf"
    a.click();
}

function gotothatpage(givenid){
    const aboutpage=document.getElementById(givenid);
    aboutpage.scrollIntoView();
}

document.addEventListener("DOMContentLoaded", function(){
    const leetcode=document.createElement('a');
    leetcode.href="https://leetcode.com/u/imrkarthikeyan/";
    leetcode.target="_blank";
    leetcode.innerText="link";
    leetcode.classList.add("profileLink");

    const gfg=document.createElement('a');
    gfg.href="https://www.geeksforgeeks.org/user/imrkarthikeyan/"
    gfg.target="_blank";
    gfg.innerText="link";
    gfg.classList.add("profileLink");

    const pslinks=document.querySelectorAll(".container3 > div")[1].querySelectorAll("img");
    pslinks[0].after(leetcode);
    pslinks[1].after(gfg);
})