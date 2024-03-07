import Evento from "./Modelo/evento.js";


const evento = new Evento(0,
    "Lolapalloza", "Rua dos Estados, 171",
    "São Paulo", "SP", 30.00, new Date());

evento.gravar().then(() =>{
    console.log("evento gravado com sucesso!");
}).catch((erro) =>{
    console.log(erro.message);  
});

evento.atualizar().then(() =>{
    console.log("Dados do evento atualizados com sucesso!");
}).catch((erro) =>{
    console.log(erro);
});

evento.excluir().then(()=> {
    console.log("O evento foi excluído com sucesso!")
})
.catch((erro)=> {
    console.log(erro);
});

const eventoQQ = new Evento();


eventoQQ.consultar("Lola").then((listaeventos) => {
    console.log("Eventos encontrados:")
    for (const evento of listaeventos){
        console.log(evento.toJSON());
    }
    listaeventos = [];
}).catch((erro) =>{
    console.log("Não foi possível consultar o evento", erro);
});