var html = document.querySelector('.janela').innerHTML; // pega o html da classe JANELA
document.getElementById('html').querySelector('code').innerText = html; // adiciona o html em forma de texto 



function global(atributo) { // atributo do css que vai ser aplicado ex: widht 
    elemento = document.getElementById("elemento").value // elemento que vai receber atributo ex: body
    if (document.getElementById(atributo).value === "ativa" && elemento !== 'null') { // verifica se tem um elemento selecionado e caso não termina 
        return;
    }
    const css = document.getElementById(atributo).value // valor que o tibuto vai receber
    if (document.getElementById(atributo).value === "unset") { // se o atributo for unset( atributo que desativa no style ) apaga a linha do css

        document.getElementById(elemento + atributo).style.display = "none";
    }
    else if (document.getElementById(elemento + atributo)) {// este if verifica se existe a linha pra modiificar o texto
        document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";"; // css vai ser escrito no navegador
        document.getElementById(elemento + atributo).style.display = "block";//  escreve a linha no css

    }
    else { // este else adiciona a linha ao corpo do site
        var criar = document.createElement('p'); // cria um paragrafo 
        criar.id = elemento + atributo; // com o id lemento + atributo ex: bodywidth
        document.getElementById('visor' + elemento).appendChild(criar) // adiciona no visor + elemento ex: visorheader
        document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";"; // adiciona escrito no css o atributo mais valor ex: width:20px;
        document.getElementById(elemento + atributo).style = 'color: rgb(3, 143, 194);'; // adiciona uma cor azul na escrita
        document.getElementById(elemento + atributo).style.marginLeft = '15px'; // adiciona uma margem a esquerda
    }
    document.getElementById(elemento).style[atributo] = css;//adicionando o valor selecionado ao atributo do elemento escolhido

    var html = document.querySelector('.janela').innerHTML; // pega o html da classe JANELA
    document.getElementById('html').querySelector('code').innerText = html; // adiciona o html em forma de texto 
}
function criarelemento() {//  cria novos elementos na janela 
    elemento = document.getElementById("elemento").value // pega onde vai ser adicionado o novo elemento
    if (elemento !== 'null') { // valida se tem um elemento selecionado
        var add = document.getElementById('criadorelemento').value;// input nome do elemento novo que vai ser adicionado
        var divNome = "local" + add; // nome que vai ser atribuido ao elemento
        var sectionNome = "visor" + add; // adiciona um local pra ser escrito o css
        var criarlocal = document.createElement('div'); // tipo de elemento que vai ser criado (por enquanto esta fixado, porém, em novas versões sera de livre escolha do usuario)
        criarlocal.id = divNome; // adiciona o nome
        document.getElementById("css_view").appendChild(criarlocal); // adiciona uam divi onde vai ser escrito o css

        var criarsection = document.createElement('section');// teremos um section pra dividir o css que aparece na tela
        criarsection.id = sectionNome; //nome do elemento criado
        document.getElementById(divNome).appendChild(criarsection) // adiciona o elemento criado no local desejado

        var criarparagrafoinicio = document.createElement("p"); //cria um paragrafo pra delimitar o css novo
        criarparagrafoinicio.id = add + "inicio";// nome da primeira linha
        document.getElementById(sectionNome).appendChild(criarparagrafoinicio)// onde vai aparecer
        document.getElementById(add + "inicio").innerText = "#" + add + "{"; // oque aparece na primeira linha
        document.getElementById(add + "inicio").style = 'color: rgb(186, 186, 2);';// cor amarela

        var criarparagrafofim = document.createElement("p");// cria a ultima linha do css
        criarparagrafofim.id = add + "fim";// nome da linha
        document.getElementById(divNome).appendChild(criarparagrafofim)// onde vai ser escrita
        document.getElementById(add + "fim").innerText = "}";// conteudo da linha
        document.getElementById(add + "fim").style = 'color: rgb(186, 186, 2);';// cor amarela


        var criarElemento = document.createElement('div');
        criarElemento.id = add; //document.getElementById('criadorelemento').value;// input nome do elemento
        var local = document.getElementById("elemento").value;

        document.getElementById(local).appendChild(criarElemento);

        var opt = document.createElement('option');
        opt.value = add;
        opt.innerText = add;
        document.getElementById('elemento').appendChild(opt);
    }
    else { return }
}
function display() { // deixa visivel o menu equivalente do display
    elementodisplay = document.getElementById("display").value
    var elements = {
        "flex": "flex_on",
        "grid": "grid_on",
        "block": "block_on",
        "inline": "inline_on",
        "inline-block": "inline_block_on",

        "table": "table_on",
        "inline-flex": "inline_flex_on",

    };

    for (var key in elements) {
        var element = document.getElementById(elements[key]);

        if (key === elementodisplay) {
            element.style.display = key;
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}


function background() {// deixa visivel o menu equivalente do background
    var elemento = document.getElementById("background").value;
    var elements = {
        "color": "color_on",
        "image": "image_on",
        "size": "size_on",
        "repeat": "repeat_on",

    };

    for (var key in elements) {
        var element = document.getElementById(elements[key]);
        element.style.display = (key === elemento) ? key : "none";
    }
}


function border() {// deixa visivel o menu equivalente do border
    elemento = document.getElementById("elemento").value
    var elementoborder = document.getElementById("border").value;
    if (elementoborder === "ativa" && elemento !== 'null') {
        document.getElementById('border_on').style.display = 'block';
    }
    else {
        document.getElementById('border_on').style.display = 'none';
    }
}

function margin() { // deixa visivel o menu equivalente do margin
    var elemento = document.getElementById("border").value;
    var elementIds = {
        "marginTop": "margin_top_on",
        "marginBottom": "margin_bottom_on",
        "marginLeft": "margin_left_on",
        "marginRight": "margin_right_on",
        "margin": "margin_all_on"
    };

    for (var key in elementIds) {
        var element = document.getElementById(elementIds[key]);
        element.style.display = (key === elemento) ? key : "none";
    }
}
