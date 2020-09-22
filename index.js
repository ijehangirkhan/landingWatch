var slideNumber = 1;
Slides(slideNumber);

function changeSlide(n)
{
    Slides(slideNumber=slideNumber+n);
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
    }
    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display="none";
    }
    for(i=0; i<dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[i]= dots[i].src='./images/Ellipse 2.png';
    }

    slides[slideNumber-1].style.display= "grid";  
    dots[slideNumber-1].className += " active";
    dots[slideNumber-1].src='./images/Ellipse 1.png';

}