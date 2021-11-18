
// Editando o head:

var head = document.head
var title = document.querySelector("title")

title.innerHTML = "Churrascômetro"
head.innerHTML += `
<style>

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: courier new, serif;
    }

    .header {
        background-color: #FA3E23;
        border-bottom: 2px solid #FAB323;
        border-top: 2px solid #FAB323;
    }

    .menu {
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
        color: white;
    }

    .menu-list {
        padding: 15px;
        cursor: pointer;
        margin-right: 5px; 
        -moz-transition: all 0.1s;
        -webkit-transition: all 0.1s;
        transition: all 0.1s;
    }

    .menu-list:hover {
        background-color: #FAB323;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    body {
        background-image: url(/images/body-back.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container {
        width: 30%;
        background-color: #DE8A1F;
        color: white;
        margin: auto;
        margin-top: 120px;
        padding: 30px;
        border: 2px solid #FA3E23;
    }

    input {
        margin-top: 10px;
        margin-left: 20px;
        padding: 15px; 
        border: 0px;
    }

    h1 {
        margin-left: 20px;
    }
    
    span {
        margin-left: 20px;
    }
    
    .num {
        width: 80%;
    }
    
    .cal {
        cursor: pointer;
    }
    
    .calculo {
        margin-left: 20px;
        margin-top: 20px;
    }

</style>
`

// Editando o body

var body = document.body

body.innerHTML = `

    <div class="header">
        <ul class="menu">
            <li class="menu-list">Início</li>
            <li class="menu-list">Motivação</li>
            <li class="menu-list">Métricas</li>
            <li class="menu-list">Autor</li>
            <li class="menu-list">Contato</li>
        </ul>
    </div>

    <div class="body">

        <div class="container">

            <h1>Churrascômetro</h1>

            <input class="num" type="number" placeholder="Quantidade de adultos" name="adulto" id="adulto">
            <br>
            <input class="num" type="number" placeholder="Quantidade de criaças" name="adulto" id="crianca">
            <br>
            <input class="num" type="number" placeholder="Duração em horas" name="adulto" id="duracao">
            <br>
            <br>
            <span>Tipo de carne:<br> <input type="checkbox" name="radbo" id=""> Porco <input type="checkbox" name="radbo" id=""> Boi <input type="checkbox" name="radbo" id=""> Coxa de Frango</span>
            <br>
            <input class="cal" type="button" onclick="calcular()" value="Calcular">
            <div class="calculo">

            </div>


        </div>

    </div>
`

// Script do churrascômetro


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