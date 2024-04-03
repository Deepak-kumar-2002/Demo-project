document.addEventListener('DOMContentLoaded',() =>{
    const spans =document.querySelectorAll('.boxs span');
    spans.forEach((span) =>{
        span.addEventListener('mouseenter', () =>{
            span.style.background = '#006794';
            span.addEventListener('mouseleve', () => {
                span.style.background = "#00b2ff";
                setTimeout(() =>{
                    span.style.background = '';

                },2000)
            })
        })
    })
})
