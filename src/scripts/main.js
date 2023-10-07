AOS.init();

const dataNiver = new Date("dec 14, 2023, 19:00:00");
const timeStampNiver = dataNiver.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteONiver = timeStampNiver - timeStampAgora;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteONiver = Math.floor(distanciaAteONiver / diasEmMs);
    const horasAteONiver = Math.floor(distanciaAteONiver % diasEmMs / horasEmMs);
    const minutosAteONiver = Math.floor(distanciaAteONiver % horasEmMs / minEmMs);
    const segundosAteONiver = Math.floor(distanciaAteONiver % minEmMs / 1000);

    document.getElementById('contador').innerHTML = `acontecerá em ${diasAteONiver} dias ${horasAteONiver} horas ${minutosAteONiver} min ${segundosAteONiver} s.`;

    if (distanciaAteONiver <= 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'já aconteceu em 14 de dezembro de 2023.';
        taxarBtnPresenca();
    }   

}, 1000)

function taxarBtnPresenca() {
    const btnPresenca = document.getElementById('btn-presenca');
    btnPresenca.classList.add('button--canceled')
}