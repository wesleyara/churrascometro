
function calcular() {
    var adulto = document.getElementById('adulto').value
    var crianca = document.getElementById('crianca').value
    var duracao = document.getElementById('duracao').value

    var carne = (((adulto * 0.4) + (crianca * 0.2)) * duracao).toFixed(1)
    var cerveja = (adulto * 4) * duracao
    var bebidaAdulto = (adulto * 1) * duracao
    var bebidaCrianca = (crianca * 0.5) * duracao
    var bebida = bebidaAdulto + bebidaCrianca

    var enu = document.getElementsByName('radbo')

    var carnePorco = 18.89
    var carneBoi = 27.20
    var carneFrango = 14.50

    var preco = ""
    var precoLat = (3 * cerveja).toFixed(2).replace('.', ',')
    var precoBeb = (8 * bebida).toFixed(2).replace('.', ',')

    if (enu[0].checked && enu[1].checked && enu[2].checked) {
        preco = ((carnePorco + carneBoi + carneFrango) / 3)  * carne
    } else if (enu[0].checked && enu[1].checked) {
        preco = ((carnePorco + carneBoi) / 2)  * carne
    } else if (enu[0].checked && enu[2].checked) {
        preco = ((carnePorco + carneFrango) / 2)  * carne
    } else if (enu[1].checked && enu[2].checked) {
        preco = ((carneBoi + carneFrango) / 2)  * carne
    } else if (enu[0].checked) {
        preco = carnePorco * carne
    } else if (enu[1].checked) {
        preco = carneBoi * carne
    } else if (enu[2].checked) {
        preco = carneFrango * carne
    } 

    var precoCarne = preco.toFixed(2).replace('.',',')

    var precoL = (3 * cerveja)
    var precoB = (8 * bebida)
    var precoTotal = (preco + precoL + precoB).toFixed(2).replace('.', ',')
    

    var texto = document.querySelector('.calculo')

    texto.innerHTML = `
    <h2>O que será necessário:</h2>
    <br>
    <p>
    ${carne}kg de carne. Valor: R$${precoCarne}.
    </p>
    <br>
    <p>
    ${cerveja} latas de cerveja. Valor: R$${precoLat}.
    </p>
    <br>
    <p>
    ${bebida} Guaraná de 2L. Valor: R$${precoBeb}.
    </p>
    <br>
    <p>
    Valor total do pedido: R$${precoTotal}.
    </p>
    `
}