const html = document.querySelector('.janela').innerHTML;
document.getElementById('html').querySelector('code').innerText = html;

function display() {
    elementodisplay = document.getElementById("display").value
    const elements = {
        "flex": "flex_on",
        "grid": "grid_on",
        "block": "block_on",
        "inline": "inline_on",
        "inline-block": "inline_block_on",

        "table": "table_on",
        "inline-flex": "inline_flex_on",

    };

    for (let key in elements) {
        const element = document.getElementById(elements[key]);

        if (key === elementodisplay) {
            element.style.display = key;
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function border() {
    const elemento = document.getElementById("elemento").value
    const elementoborder = document.getElementById("border").value;
    if (elementoborder === "ativa" && elemento !== 'null') {
        document.getElementById('border_on').style.display = 'block';
    }
    else {
        document.getElementById('border_on').style.display = 'none';
    }
}

function margin() {
    const elemento = document.getElementById("border").value;
    const elementIds = {
        "marginTop": "margin_top_on",
        "marginBottom": "margin_bottom_on",
        "marginLeft": "margin_left_on",
        "marginRight": "margin_right_on",
        "margin": "margin_all_on"
    };

    for (let key in elementIds) {
        const element = document.getElementById(elementIds[key]);
        element.style.display = (key === elemento) ? key : "none";
    }
}

function global(atributo) { // atributo do css que vai ser aplicado
    const elementoValue = document.getElementById("elemento").value // elemento que vai receber atributo
    const elementoChange = document.getElementById(elemento + atributo);

    if (document.getElementById(atributo).value === "ativa" && elemento !== '') {
        return;
    }
    
    const css = document.getElementById(atributo).value // valor que o tibuto vai receber
    if (document.getElementById(atributo).value === "null") {
        elementoChange.style.display = "none";
    }
    else if (elementoChange) {// este if verifica se existe a linha pra modiificar o texto
        elementoChange.innerText = atributo + ":" + css + ";"; // css vai ser escrito no navegador
        elementoChange.style.display = "block";
    }
    else { // este else adiciona a linha ao corpo do site
        const criar = document.createElement('p');
        criar.id = elementoValue + atributo;
        document.getElementById('visor' + elementoValue).appendChild(criar)
        elementoChange.innerText = atributo + ":" + css + ";";
        elementoChange.style = 'color: rgb(3, 143, 194);';
        elementoChange.style.marginLeft = '15px';
    }
    document.getElementById(elementoValue).style[atributo] = css;//adicionando o valor selecionado ao atributo do elemento escolhido
}
function criarelemento() {
    const elemento = document.getElementById("elemento").value 
    if(elemento !== 'null' ){
        const add = document.getElementById('criadorelemento').value;// input nome do elemento
        const divNome = "local" + add;
        const sectionNome = "visor" + add;
        const criarlocal = document.createElement('div');
        criarlocal.id = divNome;
        document.getElementById("css_view").appendChild(criarlocal);

        const criarsection = document.createElement('section');// teremos um section
        criarsection.id = sectionNome; //nome do elemento criado
        document.getElementById(divNome).appendChild(criarsection) // adiciona o elemento criado no local desejado

        const criarparagrafoinicio = document.createElement("p");
        criarparagrafoinicio.id = add + "inicio";
        document.getElementById(sectionNome).appendChild(criarparagrafoinicio)
        document.getElementById(add + "inicio").innerText = "#" + add + "{";
        document.getElementById(add + "inicio").style = 'color: rgb(186, 186, 2);';

        const criarparagrafofim = document.createElement("p");
        criarparagrafofim.id = add + "fim";
        document.getElementById(divNome).appendChild(criarparagrafofim)
        document.getElementById(add + "fim").innerText = "}";
        document.getElementById(add + "fim").style = 'color: rgb(186, 186, 2);';


        const criarElemento = document.createElement('div');
        criarElemento.id = add; //document.getElementById('criadorelemento').value;// input nome do elemento
        var local = document.getElementById("elemento").value;

        document.getElementById(local).appendChild(criarElemento);

        var opt = document.createElement('option');
        opt.value = add;
        opt.innerText = add;
        document.getElementById('elemento').appendChild(opt);
    }
    else {
        return
    }
}
