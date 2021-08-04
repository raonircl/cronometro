const bt = document.getElementById("botoes");
var tempo = 1000;
var cron;
let hh = 00;
let mm = 00;
let ss = 00;

/*function dPlay() {
    if (dPlay.textContent = "INCIAR") {
        alert("1")
        
    }else if (dPlay.textContent = "PARAR") {
            clearInterval(cron);
                hh = 0;
                    mm = 0;
                        ss = 0;
            document.getElementById('counter').innerText = '00:00:00';
            alert("2");
    }else if(dPlay.textContent = "PAUSAR") {
        alert("Pausar")
    }   else{
        alert();
    }
    console.log(dPlay)
}
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('contador').innerText = format;

    //Retorna o valor tratado
    return format;
}
botoes.addEventListener("click" ,dPlay)*/

//Inicia o temporizador
function inciar() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pausar() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function parar() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('contador').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('contador').innerText = format;

    //Retorna o valor tratado
    return format;
}

