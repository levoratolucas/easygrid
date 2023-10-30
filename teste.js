function bor_display(){
    var aplicar = document.getElementById("inserir_nome").value
    
    
    if(document.getElementById("inserir_borda").value === "ativa"
    && aplicar != "none" )
    {
        document.getElementById("border_on").style.display = "block"
    }
    else{ document.getElementById("border_on").style.display = "none"}
    
}

function fun_display(fundo = document.getElementById("inserir_display").value) {

    var aplicar = document.getElementById("inserir_nome").value
    document.getElementById(aplicar).style.display = fundo;

    var flexOn = document.getElementById("flex_on");
    var gridOn = document.getElementById("grid_on");
    document.getElementById(aplicar + "display").innerText = "display:" + fundo + ";";
    document.getElementById(aplicar + "display").style.display = "block";

    if (fundo === "flex") {
        flexOn.style.display = "block";
        gridOn.style.display = "none";
    } else if (fundo === "grid") {
        flexOn.style.display = "none";
        gridOn.style.display = "block";
    } else {
        flexOn.style.display = "none";
        gridOn.style.display = "none";
    }
    document.getElementById("visor" + aplicar).style.order = "0";
}
var aplicar = document.getElementById("inserir_nome").value

function largura(aplicar = document.getElementById("inserir_nome").value) {
    const larg = document.getElementById("inserir_largura").value
    document.getElementById(aplicar).style.width = larg + "px";
    document.getElementById(aplicar + "width").innerText = "width:" + larg + "px;";
    document.getElementById(aplicar + "width").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}

function altura(aplicar = document.getElementById("inserir_nome").value) {
    const altu = document.getElementById("inserir_altura").value
    document.getElementById(aplicar).style.height = altu + "px";
    document.getElementById(aplicar + "height").innerText = "height:" + altu + "px;";
    document.getElementById(aplicar + "height").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}


function colorir(aplicar = document.getElementById("inserir_nome").value) {
    const cor = document.getElementById("inserir_cor").value;
    document.getElementById(aplicar).style.backgroundColor = cor;
    document.getElementById(aplicar + "backgroundColor").innerText = "backgroundColor:" + cor + ";";
    document.getElementById(aplicar + "backgroundColor").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_flexwrap(aplicar = document.getElementById("inserir_nome").value) {
    const seletorflex = document.getElementById("seletor_flex").value
    document.getElementById(aplicar).style.flexWrap = seletorflex;
    document.getElementById(aplicar + "flexWrap").innerText = "flexWrap:" + seletorflex + ";";
    document.getElementById(aplicar + "flexWrap").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_flex_direction(aplicar = document.getElementById("inserir_nome").value) {
    const seletorflex = document.getElementById("seletor_flex_direction").value
    document.getElementById(aplicar).style.flexDirection = seletorflex;
    document.getElementById(aplicar + "flexDirection").innerText = "flexDirection:" + seletorflex + ";";
    document.getElementById(aplicar + "flexDirection").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_justify_content(aplicar = document.getElementById("inserir_nome").value) {
    const seletorflex = document.getElementById("seletor_justify_content").value
    document.getElementById(aplicar).style.justifyContent = seletorflex;
    document.getElementById(aplicar + "flexDirection").innerText = "flexDirection:" + seletorflex + ";";
    document.getElementById(aplicar + "flexDirection").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_align_items(aplicar = document.getElementById("inserir_nome").value) {
    const seletorflex = document.getElementById("seletor_align_items").value
    document.getElementById(aplicar).style.alignItems = seletorflex;
    document.getElementById(aplicar + "alignItems").innerText = "alignItems:" + seletorflex + ";";
    document.getElementById(aplicar + "alignItems").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_align_content(aplicar = document.getElementById("inserir_nome").value) {
    const seletorflex = document.getElementById("seletor_align_content").value
    document.getElementById(aplicar).style.justifyContent = seletorflex;
    document.getElementById(aplicar + "justifyContent").innerText = "justifyContent:" + seletorflex + ";";
    document.getElementById(aplicar + "justifyContent").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_align_content(aplicar = document.getElementById("inserir_nome").value) {
    const seletorflex = document.getElementById("seletor_align_content").value
    document.getElementById(aplicar).style.alignContent = seletorflex;
    document.getElementById(aplicar + "alignContent").innerText = "alignContent:" + seletorflex + ";";
    document.getElementById(aplicar + "alignContent").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}


function set_grid_template_columns(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_grid_template_columns").value
    document.getElementById(aplicar).style.gridTemplateColumns = seletorgrid;
    document.getElementById(aplicar + "gridTemplateColumns").innerText = "gridTemplateColumns:" + seletorgrid + ";";
    document.getElementById(aplicar + "gridTemplateColumns").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_grid_template_rows(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_grid_template_rows").value
    document.getElementById(aplicar).style.gridTemplateRows = seletorgrid;
    document.getElementById(aplicar + "gridTemplateRows").innerText = "gridTemplateRows:" + seletorgrid + ";";
    document.getElementById(aplicar + "gridTemplateRows").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_gap_colunm(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_gap_colunm").value
    document.getElementById(aplicar).style.columnGap = seletorgrid;
    document.getElementById(aplicar + "columnGap").innerText = "columnGap:" + seletorgrid + ";";
    document.getElementById(aplicar + "columnGap").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_gap_row(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_gap_row").value
    document.getElementById(aplicar).style.rowGap = seletorgrid;
    document.getElementById(aplicar + "rowGap").innerText = "rowGap:" + seletorgrid + ";";
    document.getElementById(aplicar + "rowGap").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_gap(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_gap").value
    document.getElementById(aplicar).style.gap = seletorgrid;
    document.getElementById(aplicar + "gap").innerText = "gap:" + seletorgrid + ";";
    document.getElementById(aplicar + "gap").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_justify_items(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_justify_items").value
    document.getElementById(aplicar).style.justifyItems = seletorgrid;
    document.getElementById(aplicar + "justifyItems").innerText = "justifyItems:" + seletorgrid + ";";
    document.getElementById(aplicar + "justifyItems").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_align_items(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_align_items").value
    document.getElementById(aplicar).style.alignItems = seletorgrid;
    document.getElementById(aplicar + "alignItems").innerText = "alignItems:" + seletorgrid + ";";
    document.getElementById(aplicar + "alignItems").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}
function set_justify_content(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_justify_content").value
    document.getElementById(aplicar).style.justifyContent = seletorgrid;
    document.getElementById(aplicar + "justifyContent").innerText = "justifyContent:" + seletorgrid + ";";
    document.getElementById(aplicar + "justifyContent").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}

function set_align_content(aplicar = document.getElementById("inserir_nome").value) {
    const seletorgrid = document.getElementById("seletor_align_content").value
    document.getElementById(aplicar).style.alignContent = seletorgrid;
    document.getElementById(aplicar + "alignContent").innerText = "alignContent:" + seletorgrid + ";";
    document.getElementById(aplicar + "alignContent").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}

document.getElementById("eu").innerText = document.getElementById("inserir_nome").value;


function set_border_radius(aplicar = document.getElementById("inserir_nome").value) {
    const seletorborder = document.getElementById("seletor_align_content").value
    document.getElementById(aplicar).style.borderRadius = seletorborder;
    document.getElementById(aplicar + "borderRadius").innerText = "borderRadius:" + seletorborder + ";";
    document.getElementById(aplicar + "borderRadius").style.display = "block";
    document.getElementById("visor" + aplicar).style.order = "0";
}