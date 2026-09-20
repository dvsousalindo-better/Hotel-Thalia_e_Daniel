
const formulario = document.getElementById("formReserva");
const resultado = document.getElementById("resultado");

// Informações dos quartos
const quartos = {
    individual: {
        nome: "Quarto Individual",
        capacidade: 1,
        preco: 100
    },

    triplo: {
        nome: "Quarto Triplo Luxo",
        capacidade: 3,
        preco: 150
    },

    duplo: {
        nome: "Quarto Duplo",
        capacidade: 2,
        preco: 180
    },

    casal: {
        nome: "Quarto com Cama de Casal",
        capacidade: 2,
        preco: 200
    }
};

// Quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const tipoQuarto = document.getElementById("quarto").value;

    const pessoas = Number(
        document.getElementById("pessoas").value
    );

    const diarias = Number(
        document.getElementById("diarias").value
    );

    // Busca os dados do quarto escolhido
    const quarto = quartos[tipoQuarto];

    // Verifica se a quantidade de pessoas é válida
    if (pessoas > quarto.capacidade) {

        resultado.innerHTML = `
            <div class="alert alert-danger">
                Este quarto comporta no máximo
                ${quarto.capacidade} pessoa(s).
            </div>
        `;

        return;
    }

    // Calcula o preço total da hospedagem
    const total = quarto.preco * diarias;

    // Exibe a confirmação
    resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Reserva realizada com sucesso!</h5>

            <p><strong>Hóspede:</strong> ${nome}</p>

            <p><strong>Quarto:</strong> ${quarto.nome}</p>

            <p><strong>Pessoas:</strong> ${pessoas}</p>

            <p><strong>Diárias:</strong> ${diarias}</p>

            <hr>

            <h5>
                Total: R$ ${total.toFixed(2).replace(".", ",")}
            </h5>

        </div>
    `;

});