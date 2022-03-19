const sections = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_button = document.querySelectorAll('.control');
const all_sections = document.querySelector('.main-content');

function pageTransitions(){

    // Button click active class 
    for(let i = 0; i < section_button.length; i++ ){

        section_button[i].addEventListener('click', function(){
            
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn','');
            this.className += ' active-btn';
        });
    }

    // Sections Active Class
    all_sections.addEventListener('click', (e)=> {
        
        const id = e.target.dataset.id;
        if(id){
            // Remove Selected from other buttons
            section_buttons.forEach( (btn)=>{
                console.log(btn);
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other Sections
            sections.forEach( (section) =>{
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

}

pageTransitions();