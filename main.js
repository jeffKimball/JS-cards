const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', ()=>{
        shrinkPanels()
        panel.classList.add('active')
    })
})

function shrinkPanels(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}