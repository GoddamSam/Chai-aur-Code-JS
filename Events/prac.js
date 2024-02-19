
document.addEventListener('click',circle)

function circle(event){
    const circ=document.createElement('div');
    circ.id='cont';
    circ.style.position='absolute';
    circ.style.top=`${event.clientY-16}px`;
    circ.style.left=`${event.clientX-16}px`;
    document.body.appendChild(circ);
}