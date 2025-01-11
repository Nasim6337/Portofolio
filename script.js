const images = document.querySelectorAll(".image");
const contents = document.querySelectorAll(".content");
const titles = document.querySelectorAll("#title");
const descriptions = document.querySelectorAll("#description");
const links = document.querySelectorAll("#link");

contents.forEach((content) => {
  content.style.height = "0";
  content.style.transition = "transform 0.8s ease, height 0.8s ease";
});

images.forEach((image, index) => {
  const content = contents[index];
  const description = descriptions[index];
  const link = links[index];
  const title = titles[index];

  content.style.width = `${image.clientWidth}px`;
  image.addEventListener("mouseover", () => {
    content.style.display = "block";
    content.style.transform = "translateY(-100%)";
    content.style.height = `${image.clientHeight}px`;
    link.style.display = "block";
    description.style.display = "block";
    title.style.display = "block";
  });

  image.addEventListener("mouseout", () => {
    content.style.transform = "translateY(0)";
    content.style.height = "0";
    link.style.display = "none";
    description.style.display = "none";
    title.style.display = "none";
  });
});

const container = document.querySelector("#subContainer");
const off = document.querySelector(".xbut");
const bt = document.querySelector(".menu");
bt.addEventListener("click", () => {
  container.style.display = "flex";
});

off.addEventListener("click", () => {
  container.style.display = "none";
});


const subsections=document.querySelectorAll('#subsections')

const AboutContent=document.querySelector('#AboutContent');
const AcademicContent=document.querySelector('#AcademicContent')
const ExperienceContent=document.querySelector('#ExperienceContent')

subsections.forEach((subsection,index) => {
  
  subsection.addEventListener('click',()=>{
    if(index===0){
      AboutContent.style.display='flex'
      AcademicContent.style.display='none'
      ExperienceContent.style.display='none'
    }

    if(index===1){
      AboutContent.style.display='none'
      AcademicContent.style.display='flex'
      ExperienceContent.style.display='none'
    }

    if(index===2){
      AboutContent.style.display='none'
      AcademicContent.style.display='none'
      ExperienceContent.style.display='flex'
    }
  })

});

var typed = new Typed('#text', {
  strings: ['Web Developer ', 'Programmer' ],
  typeSpeed: 150,
  backSpeed:150,
  backDelay:500,
  loop:true
});
