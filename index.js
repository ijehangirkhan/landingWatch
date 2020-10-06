
var slideNumber = 1;

for (let i=0; i< 2; i++)
{
    if (i === 0)
    {
        setInterval(function() { changeSlide(i); }, 2000);
        console.log(`K0 ${i}`);
    }
    else if (i === 1)
    {
        setInterval(function() { changeSlide(i); }, 2000);
        console.log(`k1 ${i}`);
    }
   /*  else if (i === 2)
    {
        setInterval(function() { changeSlide(-1); }, 2000);
        console.log(`k2 ${i}`);
    } */

}

function changeSlide(n)
{

        Slides(slideNumber=slideNumber+n);
        console.log( "ChangeSlide " + slideNumber);
}

function activeSlide(n)
{
    Slides(slideNumber=n);
}

function Slides(n)
{
    var i;
    var slides=document.getElementsByClassName("feedback-cards");
    var dots=document.getElementsByClassName("dot");
    if(n > slides.length)
    {
        slideNumber=1
        
    }
    if(n<1)
    {
        slideNumber=slides.length
        console.log("from Slides1 "+ slideNumber);
    }
    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display="none";
        console.log("from Slides2 "+ i);
    }
    for(i=0; i<dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[i]= dots[i].src='./images/Ellipse 2.png';
        console.log("from Slides3 "+ i);
    }

    console.log("from Slides4 "+ slideNumber);
    slides[slideNumber-1].style.display= "grid";  
    dots[slideNumber-1].className += " active";
    dots[slideNumber-1].src='./images/Ellipse 1.png';
    console.log("from Slides5 "+ slideNumber);

}