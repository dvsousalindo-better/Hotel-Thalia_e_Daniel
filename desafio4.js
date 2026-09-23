const form = document.getElementById("formDisponibilidade");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const total = Number(
        document.getElementById("totalQuartos").value
    );

    const ocupados = Number(
        document.getElementById("quartosOcupados").value
    );

    const desejados = Number(
        document.getElementById("quartosReserva").value
    );


    if (ocupados > total) {

        resultado.innerHTML = `
            <div class="alert alert-danger">
                A quantidade de quartos ocupados não pode
                ser maior que o total de quartos.
            </div>
        `;

        return;
    }


    const disponiveis = total - ocupados;


    if (desejados <= disponiveis) {

        const restantes = disponiveis - desejados;

        resultado.innerHTML = `
            <div class="alert alert-success">

                <h4>Quartos disponíveis!</h4>

                <p>
                    Existem <strong>${disponiveis}</strong>
                    quartos disponíveis.
                </p>

                <p>
                    A reserva de
                    <strong>${desejados}</strong>
                    quarto(s) pode ser realizada.
                </p>

                <p>
                    Após a reserva, restarão
                    <strong>${restantes}</strong>
                    quarto(s) disponíveis.
                </p>

            </div>
        `;

    } else {

        resultado.innerHTML = `
            <div class="alert alert-warning">

                <h4>Quartos insuficientes</h4>

                <p>
                    Existem apenas
                    <strong>${disponiveis}</strong>
                    quarto(s) disponíveis.
                </p>

                <p>
                    Você solicitou
                    <strong>${desejados}</strong>.
                </p>

            </div>
        `;
    }

});