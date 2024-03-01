document.addEventListener('DOMContentLoaded', function(){

    iniciarApp();
});

function iniciarApp(){
    navegacionFija();
    scrolNav();
}

function navegacionFija(){
    const barraNavegacion = document.querySelector('.barra-menu');
    const sobreMi = document.querySelector('#sobre-mi');
    
    window.addEventListener('scroll',function(){
        if (sobreMi.getBoundingClientRect().top < 0){

            barraNavegacion.classList.add('barra-fija');

        }else{
            barraNavegacion.classList.remove('barra-fija');
        }

    });
}

function scrolNav(){
    const enlaces = document.querySelectorAll('.barra-menu a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            //quitamos el scroll por defecto
            e.preventDefault();
            
            //colocamos el scroll que queremos

                            //evento.elemento.atributo.clas_href_id_etc.valorAsociado
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            // const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({behavior: "smooth"});

        });
        
    });
}