const quartos = [
    "Individual",
    "Triplo Luxo",
    "Duplo",
    "Cama de Casal"
];

document.getElementById("formDisponibilidade").addEventListener("submit", function(event) {
    
    event.preventDefault();

    const quartosComNumeros = quartos.map(quarto => {
        return {
            nome: quarto,
            numero: Math.floor(Math.random() * 30) + 1
        };
    });

    quartosComNumeros.sort((a, b) => b.numero - a.numero);

    document.getElementById("primeiroLugar").textContent =
        `${quartosComNumeros[0].nome} - ${quartosComNumeros[0].numero} quartos`;

    document.getElementById("segundoLugar").textContent =
        `${quartosComNumeros[1].nome} - ${quartosComNumeros[1].numero} quartos`;

    document.getElementById("terceiroLugar").textContent =
        `${quartosComNumeros[2].nome} - ${quartosComNumeros[2].numero} quartos`;
});