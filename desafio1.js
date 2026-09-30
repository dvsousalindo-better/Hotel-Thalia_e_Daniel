
const formulario = document.getElementById("formReserva");
const resultado = document.getElementById("resultado");

// Dados dos quartos
const quartos = {
    individual: {
        nome: "Quarto Individual",
        capacidade: 1
    },

    triplo: {
        nome: "Quarto Triplo Luxo",
        capacidade: 3
    },

    duplo: {
        nome: "Quarto Duplo",
        capacidade: 2
    },

    casal: {
        nome: "Quarto com Cama de Casal",
        capacidade: 2
    }
};

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const tipoQuarto = document.getElementById("quarto").value;

    const pessoas = Number(
        document.getElementById("pessoas").value
    );

    const diarias = Number(
        document.getElementById("diarias").value
    );

    const quarto = quartos[tipoQuarto];

    if (pessoas > quarto.capacidade){

        resultado.innerHTML = `
            <div class="alert alert-danger">
                Este quarto comporta no máximo
                ${quarto.capacidade} pessoa(s).
            </div>
        `;

        return;
    }

    const numeroQuarto = Math.floor(Math.random() * 100) + 1;

    resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Reserva adicionada com sucesso!</h5>

            <p><strong>Hóspede:</strong> ${nome}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Quarto:</strong> ${quarto.nome}</p>

            <p><strong>Pessoas:</strong> ${pessoas}</p>

            <p><strong>Diárias:</strong> ${diarias}</p>

            <p><strong>Número do quarto:</strong> ${numeroQuarto}</p>

            <hr>

        </div>`;

});