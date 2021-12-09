
function calcular() {
    var adult = document.getElementById('adulto') as HTMLInputElement
    var crianc = document.getElementById('crianca') as HTMLInputElement
    var duraca = document.getElementById('duracao') as HTMLInputElement

    var adulto = Number(adult.value)
    var crianca = Number(crianc.value)
    var duracao = Number(duraca.value)

    var carne: number = (((adulto * 0.5) + (crianca * 0.2)) * duracao)
    var cerveja = (adulto * 4) * duracao
    var bebidaAdulto = (adulto * 1) * duracao
    var bebidaCrianca = (crianca * 0.5) * duracao
    var bebida = bebidaAdulto + bebidaCrianca

    var enu = document.getElementsByName('radbo') as NodeListOf<HTMLInputElement>

    var carnePorco = 18.89
    var carneBoi = 29.99
    var carneFrango = 14.50

    var preco: number = 0
    var precoLat = (4 * cerveja).toFixed(2).replace('.', ',')
    var precoBeb = (8 * bebida).toFixed(2).replace('.', ',')

    var texto = document.querySelector('.calculo') as HTMLDivElement

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

    if (adult.value === '' || crianc.value === '' || duraca.value === '' || enu[0].checked == false && enu[1].checked == false && enu[2].checked == false) {
        alert("Insira os dados que faltam!")
        texto.innerHTML = ''
    } else {
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

    
}