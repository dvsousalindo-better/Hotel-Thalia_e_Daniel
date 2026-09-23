const form = document.getElementById("formServico");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico");
    const quantidade = Number(
        document.getElementById("quantidade").value
    );

    const preco = Number(servico.value);
    const nomeServico = servico.options[servico.selectedIndex].text;

    const total = preco * quantidade;

    resultado.innerHTML = `
        <div class="alert alert-success">

            <h4>Consumo registrado!</h4>

            <p>
                <strong>Hóspede:</strong> ${nome}
            </p>

            <p>
                <strong>Serviço:</strong> ${nomeServico}
            </p>

            <p>
                <strong>Quantidade:</strong> ${quantidade}
            </p>

            <p>
                <strong>Total:</strong>
                R$ ${total.toFixed(2).replace(".", ",")}
            </p>

        </div>
    `;
});