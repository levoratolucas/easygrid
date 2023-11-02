function global(atributo) { // atributo do css que vai ser aplicado
    elemento = document.getElementById("elemento").value // elemento que vai receber atributo
    const css = document.getElementById(atributo).value // valor que o tibuto vai receber
    document.getElementById(elemento + atributo).innerText = atributo + ":" + css + ";"; // css vai ser escrito no navegador
    document.getElementById(elemento + atributo).style.display = "block"; // deixa visivel a linha que acabou de ser auterada
    document.getElementById(elemento).style[atributo] = css;//adicionando o valor selecionado ao atributo do elemento escolhido
}
