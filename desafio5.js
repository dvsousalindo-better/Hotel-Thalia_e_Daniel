const form = document.getElementById("formEstatisticas");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const individual = Number(
        document.getElementById("individual").value
    );

    const duplo = Number(
        document.getElementById("duplo").value
    );

    const triplo = Number(
        document.getElementById("triplo").value
    );

    const casal = Number(
        document.getElementById("casal").value
    );


    // Quantidade total de quartos do hotel

    const totalQuartos = 40;


    // Soma dos quartos ocupados

    const totalOcupados =
        individual +
        duplo +
        triplo +
        casal;


    // Verifica se a quantidade é válida

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


    // Quartos disponíveis

    const disponiveis =
        totalQuartos - totalOcupados;


    // Porcentagem de ocupação

    const taxaOcupacao =
        (totalOcupados / totalQuartos) * 100;


    // Média de ocupação

    const media =
        totalOcupados / 4;


    // Descobre o tipo mais ocupado

    const quartos = {
        "Individual": individual,
        "Duplo": duplo,
        "Triplo Luxo": triplo,
        "Cama de Casal": casal
    };


    let maiorTipo = "";
    let maiorQuantidade = -1;


    for (const tipo in quartos) {

        if (quartos[tipo] > maiorQuantidade) {

            maiorQuantidade = quartos[tipo];

            maiorTipo = tipo;
        }else if (quartos[tipo] === maiorQuantidade) {

            maiorTipo = "Equilibrado";
        }
    }


    // Mostra o resultado

    resultado.innerHTML = `

        <div class="alert alert-success">

            <h4 class="mb-3">
                Estatísticas do Hotel
            </h4>


            <p>
                <strong>Total de quartos:</strong>
                ${totalQuartos}
            </p>


            <p>
                <strong>Quartos ocupados:</strong>
                ${totalOcupados}
            </p>


            <p>
                <strong>Quartos disponíveis:</strong>
                ${disponiveis}
            </p>


            <p>
                <strong>Taxa de ocupação:</strong>
                ${taxaOcupacao.toFixed(1)}%
            </p>


            <p>
                <strong>Média de ocupação:</strong>
                ${media.toFixed(1)}
                quartos por tipo
            </p>


            <hr>


            <p class="mb-0">

                <strong>Tipo mais ocupado:</strong>
                ${maiorTipo}

                (${maiorQuantidade} quartos)

            </p>

        </div>

    `;

});