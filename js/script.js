const mudarHorario = setInterval(() => {

    let date = new Date();

    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();

    document.getElementById("hora").innerHTML = hora;
    document.getElementById("minuto").innerHTML = minuto;
    document.getElementById("segundo").innerHTML = segundo;

    if (hora >= 18 || hora < 6) {
        document.querySelector("#gif").src = "./img/night.gif";
        document.body.style.background = "linear-gradient(120deg, #000, #304878)";

    }
    else if (hora >= 6 && hora < 12) {
        document.querySelector("#gif").src = "./img/morning.gif";
        document.body.style.background = "linear-gradient(120deg, #304878, #c0d8d8)";

    }
    else if (hora >= 12 && hora < 16) {
        document.querySelector("#gif").src = "./img/midday.gif";
        document.body.style.background = "linear-gradient(120deg, #fff, #e8aa42)";

    }
    else if (hora >= 16 && hora < 18) {
        document.querySelector("#gif").src = "./img/sunset.gif";
        document.body.style.background = "linear-gradient(120deg, #ffe53bd8, #ff2525da)";

    }

}, 1000);