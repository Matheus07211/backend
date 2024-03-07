import Cliente from "./Modelo/cliente.js";


const cliente = new Cliente(0, "123.456.789-10",
    "Jose Alcantara de Moraes", "Rua das Larangeiras, 213",
    "Vila ocidental", "São Paulo", "SP", "(11)92556-2235",
    "josealcantara@ig.com.br");

cliente.gravar().then(() =>{
    console.log("cliente gravado com sucesso!");
}).catch((erro) =>{
    console.log(erro.message);  
});

cliente.atualizar().then(() =>{
    console.log("Dados do cliente atualizados com sucesso!");
}).catch((erro) =>{
    console.log(erro);
});

cliente.excluir().then(()=> {
    console.log("O cliente foi excluído com sucesso!")
})
.catch((erro)=> {
    console.log(erro);
});

const clienteQQ = new Cliente();


clienteQQ.consultar("Moraes").then((listaClientes) => {
    console.log("Clientes encontrados:")
    for (const cliente  of listaClientes){
        console.log(cliente.toJSON());
    }
    listaClientes = lista;
}).catch((erro) =>{
    console.log("Não foi possível consultar o cliente", erro);
});