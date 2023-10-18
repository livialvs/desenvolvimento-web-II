create database if not exists crud;

use crud;

create table if not exists estudio (
	estudio_id int not null auto_increment primary key,
    estudio_nome varchar(100),
    estudio_pais varchar (50)
);

create table if not exists filme (
	filme_id int not null auto_increment primary key,
	filme_titulo varchar(100),
    filme_diretor varchar(100),
    filme_ano_lancamento int,
    filme_genero varchar(100),
    filme_duracao_min int,
    estudio_id int,
    foreign key (estudio_id) references estudio(estudio_id)
);




    