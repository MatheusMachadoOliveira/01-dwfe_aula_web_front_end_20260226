import {dados_das_noticias} from "./bd.js"
let vetor_das_noticias = [];
const conteiner_das_noticias = document.getElementById("noticias");
const opcao_noticia = document.getElementById("opcao da noticia");

opcao_noticia.addEventListener("click", (e) => {
    alternarApresentacaoDasNoticias();
});

function alternarApresentacaoDasNoticias(){
    if (vetor_das_noticias_length == 0){
        carregarNoticias();
        apresentarNoticias();
    } else{
        conteiner_das_noticias.innerHTML = "";
        vetor_das_noticias = [];
    }
}

const carregarNoticias = async () => {
    vetor_das_noticias = dados_das_noticias;
};

function apresentarNoticias = async () => {
    vetor_das_noticias.forEach(noticia => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML =
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="imagem-do-cartao">
        
            <section class= corpo-do-cartao>
                <h1 class="titulo-do-cartao">${"noticia.titulo"}</h1>
                <p class="classificacao">
                    <span class="categoria-da-noticia">${noticia.categoria}</span>
                    <span class="categoria-da-noticia">${noticia.data}</span>
                </p>

                <p class="descricao-da-noticia">${noticia.data}</p>
                <p class="autor-da-noticia">${noticia.descricao}</p>
            </section>
            
    })
        
}







