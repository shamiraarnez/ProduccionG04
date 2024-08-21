
$(function() {
    const actualizarHora = function() {
        const fecha = new Date();
        let hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        const diaSemana = fecha.getDay();
        const dia = fecha.getDate();
        const mes = fecha.getMonth();
        const anio = fecha.getFullYear();
        let ampm;

        const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const $pHoras = $("#horas");
        const $pMinutos = $("#minutos");
        const $pSegundos = $("#segundos");
        const $pAMPM = $("#ampm");
        const $pDiaSemana = $("#diaSemana");
        const $pDia = $("#dia");
        const $pMes = $("#mes");
        const $pAnio = $("#anio");

        $pDiaSemana.text(semana[diaSemana]);
        $pDia.text(dia);
        $pMes.text(meses[mes]);
        $pAnio.text(anio);

        if (hora >= 12) {
            hora -= 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }

        if (hora === 0) {
            hora = 12;
        }

        $pHoras.text(hora < 10 ? "0" + hora : hora);
        $pMinutos.text(minutos < 10 ? "0" + minutos : minutos);
        $pSegundos.text(segundos < 10 ? "0" + segundos : segundos);
        $pAMPM.text(ampm);
    };

    actualizarHora();
    setInterval(actualizarHora, 1000);
});
