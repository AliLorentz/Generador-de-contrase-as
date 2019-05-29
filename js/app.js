    //
    // ────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: V A R I A B L E S   Y   O B J E T O S   G E N E R A L E S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────────────────────────
    //

    (function () {
        var app = document.getElementById('app')
        var inputCaracteres = document.getElementById('numero-caracteres')

        var configuracion = {
            caracteres: parseInt(inputCaracteres.value),
            simbolos: true,
            numeros: true,
            mayuscula: true,
            minuscula: true
        }

        var caracteres = {
            numeros: '0 1 2 3 4 5 6 7 8 9',
            simbolos: '! @ # | % + - / * ? ¿ ( ) = & ¡ - _',
            mayuscula: 'A B C D E F G H I J K L M N O P Q R S T U V W Y X Z',
            minuscula: 'a b c d e f g h i j k l m n o p q r s t u v w y x z'
        }


        //
        // ─── EVENTOS ────────────────────────────────────────────────────────────────────
        //
        app.addEventListener('submit', (e) => {
            e.preventDefault() /*Evita el submit*/
        });

        app.elements.namedItem('btn-mas-uno').addEventListener('click', () => {
            configuracion.caracteres++;
            inputCaracteres.value = configuracion.caracteres;
        });
        app.elements.namedItem('btn-menos-uno').addEventListener('click', () => {
            if (configuracion.caracteres > 1) {
                configuracion.caracteres--;
                inputCaracteres.value = configuracion.caracteres;
            }
        });

        app.elements.namedItem('btn-simbolos').addEventListener('click', function(){
            btnToggle(this)
            configuracion.simbolos = !configuracion.simbolos;
        });
        app.elements.namedItem('btn-numeros').addEventListener('click', function(){
            btnToggle(this)
            configuracion.numeros = !configuracion.numeros;
        });
        app.elements.namedItem('btn-mayusculas').addEventListener('click', function(){
            btnToggle(this)
            configuracion.mayuscula = !configuracion.mayuscula;
        });        
        app.elements.namedItem('btn-generar').addEventListener('click', ()=>{
            generarPassword();
        })

        app.elements.namedItem('input-password').addEventListener('click',()=>{
            copiarPassword();
        })

        //
        // ─── FUNCIONES ───────────────────────────────────────────────────
        //

        function generarPassword(){
            var caracteresFinales = '';
            var password = '';

            for(propiedad in configuracion){
                if(configuracion[propiedad] == true){
                    caracteresFinales += caracteres[propiedad]+' ';
                }
            }
            caracteresFinales = caracteresFinales.trim(); /**Quita los espacios en blanco*/
            caracteresFinales = caracteresFinales.split(' ');
            //  console.log(caracteresFinales);

            for(let i =0 ;i<configuracion.caracteres;i++){
                password = password + caracteresFinales[Math.floor(Math.random()*caracteresFinales.length)];
            }
            app.elements.namedItem('input-password').value = password;
        }
            
       function btnToggle(element){
        element.classList.toggle('false')
        element.childNodes[0].classList.toggle('fa-check')
         element.childNodes[0].classList.toggle('fa-times')
        }

        function copiarPassword(){
            app.elements.namedItem('input-password').select(); /**Cuando damos click selecciona todo el texto */
            document.execCommand('copy');
            document.getElementById('alerta-copiado').classList.add('active');
            setTimeout(function(){
                document.getElementById('alerta-copiado').classList.remove('active');
            },1000)
        }
        generarPassword();


    }())