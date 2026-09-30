const formulario = document.getElementById("formHospedagem");
const resultado = document.getElementById("resultado");

const quartos = {
  individual: {
    nome: "Quarto Individual",
    capacidade: 1,
    preco: 100,
  },

  triplo: {
    nome: "Quarto Triplo Luxo",
    capacidade: 3,
    preco: 150,
  },

  duplo: {
    nome: "Quarto Duplo",
    capacidade: 2,
    preco: 180,
  },

  casal: {
    nome: "Quarto com Cama de Casal",
    capacidade: 2,
    preco: 200,
  },
};

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const tipoQuarto = document.getElementById("quarto").value;

  const pessoas = Number(document.getElementById("pessoas").value);

  const diarias = Number(document.getElementById("diarias").value);

  const quarto = quartos[tipoQuarto];

  if (pessoas > quarto.capacidade) {
    resultado.innerHTML = `
            <div class="alert alert-danger">
                Este quarto comporta no máximo
                ${quarto.capacidade} pessoa(s).
            </div>
        `;

    return;
  }

  const valorPorPessoa = quarto.preco;

  const total = valorPorPessoa * pessoas * diarias;

  resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Resumo da hospedagem</h5>

            <p>
                <strong>Quarto:</strong>
                ${quarto.nome}
            </p>

            <p>
                <strong>Preço por pessoa:</strong>
                R$ ${valorPorPessoa.toFixed(2).replace(".", ",")}
            </p>

            <p>
                <strong>Quantidade de pessoas:</strong>
                ${pessoas}
            </p>

            <p>
                <strong>Quantidade de diárias:</strong>
                ${diarias}
            </p>

            <hr>

            <h4>
                Total: R$ ${total.toFixed(2).replace(".", ",")}
            </h4>

        </div>
    `;
});