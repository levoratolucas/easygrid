var html = document.querySelector('.janela').innerHTML;
document.getElementById('html').querySelector('code').innerText = html;

function display() {
    elemento = document.getElementById("display").value
    var flexOn = document.getElementById("flex_on");
    var gridOn = document.getElementById("grid_on");

    if (elemento === "flex") {
        flexOn.style.display = "block";
        gridOn.style.display = "none";
    } else if (elemento === "grid") {
        flexOn.style.display = "none";
        gridOn.style.display = "block";
    } else {
        flexOn.style.display = "none";
        gridOn.style.display = "none";
    }

    if (elemento === "flex") {
        flexOn.style.display = "block";
        gridOn.style.display = "none";
    } else if (elemento === "grid") {
        flexOn.style.display = "none";
        gridOn.style.display = "block";
    } else {
        flexOn.style.display = "none";
        gridOn.style.display = "none";
    }
}
function global(atributo) { // atributo do css que vai ser aplicado

    elemento = document.getElementById("elemento").value // elemento que vai receber atributo
    const css = document.getElementById(atributo).value // valor que o tibuto vai receber
    if (document.getElementById(elemento + atributo)) {// este if verifica se existe a linha pra modiificar o texto
        document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";"; // css vai ser escrito no navegador
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
function criarelemento() {
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
