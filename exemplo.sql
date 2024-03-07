create database backend;
use backend;
create table cliente(
	id int not null primary key auto_increment,
    cpf varchar(14) not null,
    nome varchar(200) not null,
    endereco varchar(200) not null,
    bairro varchar(100) not null,
    cidade varchar(200) not null,
    estado varchar(2) not null,
    telefone varchar(200) not null,
    email varchar(100),
    );