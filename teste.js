var html = document.querySelector('.janela').innerHTML;
document.getElementById('html').querySelector('code').innerText = html;

function display() {
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


function background() {
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


function border() {
    elemento = document.getElementById("elemento").value
    var elementoborder = document.getElementById("border").value;
    if (elementoborder === "ativa" && elemento !== 'null') {
        document.getElementById('border_on').style.display = 'block';
    }
    else {
        document.getElementById('border_on').style.display = 'none';
    }
}

function margin() {
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

function global(atributo) { // atributo do css que vai ser aplicado
    elemento = document.getElementById("elemento").value // elemento que vai receber atributo

    if (document.getElementById(atributo).value === "ativa" && elemento !== 'null') {
        return;
    }
    else {
        const css = document.getElementById(atributo).value // valor que o tibuto vai receber
        if (document.getElementById(atributo).value === "null") {
            document.getElementById(elemento + atributo).style.display = "none";
        }
        else if (document.getElementById(elemento + atributo)) {// este if verifica se existe a linha pra modiificar o texto
            document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";"; // css vai ser escrito no navegador
            document.getElementById(elemento + atributo).style.display = "block";

        }



        else { // este else adiciona a linha ao corpo do site
            var criar = document.createElement('p');
            criar.id = elemento + atributo;
            document.getElementById('visor' + elemento).appendChild(criar)
            document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";";
            document.getElementById(elemento + atributo).style = 'color: rgb(3, 143, 194);';
            document.getElementById(elemento + atributo).style.marginLeft = '15px';
        }
        document.getElementById(elemento).style[atributo] = css;//adicionando o valor selecionado ao atributo do elemento escolhido
    }
}
function criarelemento() {
    elemento = document.getElementById("elemento").value 
    if(elemento !== 'null'){
    var add = document.getElementById('criadorelemento').value;// input nome do elemento
    var divNome = "local" + add;
    var sectionNome = "visor" + add;
    var criarlocal = document.createElement('div');
    criarlocal.id = divNome;
    document.getElementById("css_view").appendChild(criarlocal);

    var criarsection = document.createElement('section');// teremos um section
    criarsection.id = sectionNome; //nome do elemento criado
    document.getElementById(divNome).appendChild(criarsection) // adiciona o elemento criado no local desejado

    var criarparagrafoinicio = document.createElement("p");
    criarparagrafoinicio.id = add + "inicio";
    document.getElementById(sectionNome).appendChild(criarparagrafoinicio)
    document.getElementById(add + "inicio").innerText = "#" + add + "{";
    document.getElementById(add + "inicio").style = 'color: rgb(186, 186, 2);';

    var criarparagrafofim = document.createElement("p");
    criarparagrafofim.id = add + "fim";
    document.getElementById(divNome).appendChild(criarparagrafofim)
    document.getElementById(add + "fim").innerText = "}";
    document.getElementById(add + "fim").style = 'color: rgb(186, 186, 2);';


    var criarElemento = document.createElement('div');
    criarElemento.id = add; //document.getElementById('criadorelemento').value;// input nome do elemento
    var local = document.getElementById("elemento").value;

    document.getElementById(local).appendChild(criarElemento);

    var opt = document.createElement('option');
    opt.value = add;
    opt.innerText = add;
    document.getElementById('elemento').appendChild(opt);
    }
    else{return}
}
