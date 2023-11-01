function global(atributo) { // atributo do css que vai ser aplicado
    elemento = document.getElementById("elemento").value // elemento que vai receber atributo
    const css = document.getElementById(atributo).value // valor que o tibuto vai receber
    document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";"; // css vai ser escrito no navegador
    document.getElementById(elemento + atributo).style.display = "block"; // deixa visivel a linha que acabou de ser auterada

    switch (atributo) {
        case 'width':
            document.getElementById(elemento).style.width = css;
            break;
        case 'height':
            document.getElementById(elemento).style.height = css;
            break;
        case 'background-color':
            document.getElementById(elemento).style.backgroundColor = css;
            break;
        case 'color':
            document.getElementById(elemento).style.color = css;
            break;
        case 'fontFamily':
            document.getElementById(elemento).style.fontFamily = css;
            break;
        case 'fontSize':
            document.getElementById(elemento).style.fontSize = css;
            break;
        case 'border':
            document.getElementById(elemento).style.border = css;
            break;
        case 'borderRadius':
            document.getElementById(elemento).style.borderRadius = css;
            break;
        case 'margin':
            document.getElementById(elemento).style.margin = css;
            break;
        case 'padding':
            document.getElementById(elemento).style.padding = css;
            break;
        case 'textAlign':
            document.getElementById(elemento).style.textAlign = css;
            break;
        case 'display':
            document.getElementById(elemento).style.display = css;
            if (document.getElementById(elemento).style.display = css === 'flex') {
                document.getElementById("flex_on").style.display = "block";
                document.getElementById("grid_on").style.display = "none";
                document.getElementById("border_on").style.display = "none";
            }
            else if (document.getElementById(elemento).style.display = css === 'grid') {
                document.getElementById("flex_on").style.display = "none";
                document.getElementById("grid_on").style.display = "block";
                document.getElementById("border_on").style.display = "none";
            }
            break;
        case 'position':
            document.getElementById(elemento).style.position = css;
            break;
    }
}