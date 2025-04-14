var divFilme = document.querySelector("#filme")
var filmes = ["O senhor dos aneis", "vingadores", "matrix", "harry potter", "O rei leao"]

for(var inicio = 0; inicio <filmes.length;inicio++) {
    divFilme.innerHTML += `<p>${filmes[inicio]}</p>`

}

