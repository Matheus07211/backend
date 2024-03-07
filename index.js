import Evento from "./Modelo/evento.js";


const evento = new Evento(0,
    "Lolapalloza", "Rua dos Estados, 171",
    "São Paulo", "SP", 30.00, new Date());
    (async () => {
        try {
            await evento.gravar();
            console.log("Evento gravado com sucesso!");
            
    
            evento.valor = 50.00;
            await evento.atualizar();
            console.log("Dados do evento atualizados com sucesso!");
    
            await evento.excluir();
            console.log("O evento foi excluído com sucesso!");

            const eventoQQ = new Evento();
            const listaeventos = await eventoQQ.consultar("Lola");
            console.log("Eventos encontrados:");
            for (const evento of listaeventos) {
                console.log(evento.toJSON());
            }
        } catch (erro) {
            console.log("Erro:", erro);
        }
    })();