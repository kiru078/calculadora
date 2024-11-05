function inserir(num) {
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}
function limpar()
{
    document.getElementById("resultado").innerHTML = "";

}
function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById("resultado").innerHTML = "Erro";

    }
}