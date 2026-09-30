document.getElementById("formDisponibilidade").addEventListener("submit", function(event) {

    event.preventDefault();

    const individual = Number(document.getElementById("individual").value);
    const casal = Number(document.getElementById("casal").value);
    const luxo = Number(document.getElementById("luxo").value);
    const duplo = Number(document.getElementById("duplo").value);

    const quartos = [
        {
            nome: "Quarto Individual",
            quantidade: individual
        },
        {
            nome: "Quarto Casal",
            quantidade: casal
        },
        {
            nome: "Quarto Triplo Luxo",
            quantidade: luxo
        },
        {
            nome: "Quarto Duplo",
            quantidade: duplo
        }
    ];

    const totalQuartos = 100;

    const totalOcupados =
        individual +
        duplo +
        luxo +
        casal;

    if (totalOcupados > totalQuartos) {

        resultado.innerHTML = `
            <div class="alert alert-danger">

                A quantidade de quartos ocupados
                não pode ser maior que
                ${totalQuartos}.

            </div>
        `;

        return;
    }

    quartos.sort(function(a, b) {
        return b.quantidade - a.quantidade;
    });

    document.getElementById("resultado").innerHTML = `
        <div class="alert alert-primary">
            <h5>🏆 Ranking dos quartos mais utilizados</h5>

            <p>
                <strong>1° lugar:</strong>
                ${quartos[0].nome} — ${quartos[0].quantidade} ocupações
            </p>

            <p>
                <strong>2° lugar:</strong>
                ${quartos[1].nome} — ${quartos[1].quantidade} ocupações
            </p>

            <p>
                <strong>3° lugar:</strong>
                ${quartos[2].nome} — ${quartos[2].quantidade} ocupações
            </p>
        </div>
    `;
});