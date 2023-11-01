// gsap.utils.mapRange(input, inputMin, inputMax, outputMin, outputMax);

const box=document.querySelector("#myRectangle");
box.addEventListener("mousemove",(event)=>{
    const rectangleLocation=box.getBoundingClientRect();
    const mouseX=event.clientX;
    const mousePosition=mouseX-rectangleLocation.left;
    const rWidth=(rectangleLocation.width)/2;
    if(mousePosition<rWidth){
        //Without using gsap
        // const color=((rWidth-mousePosition)*255)/rWidth;
        //box.style.backgroundColor=`rgb(${color},0,0)`;
        const color=gsap.utils.mapRange(0,rWidth,255,0,mousePosition);
        gsap.to(box,{
            backgroundColor:`rgb(${color},0,0)`,
            duration:1,
        });
       
    }
    else{
        //Without using gsap
        // const color=((mousePosition-rWidth)*255)/rWidth;
        // box.style.backgroundColor=`rgb(0,0,${color})`;
        const color=gsap.utils.mapRange(rWidth,rectangleLocation.width,0,255,mousePosition);
        gsap.to(box,{
            backgroundColor:`rgb(0,0,${color})`,
            duration:1,
        });
        
    }
});
box.addEventListener("mouseleave",()=>{
    box.style.backgroundColor='white';
})