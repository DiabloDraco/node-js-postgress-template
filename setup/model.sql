create database turksh_db;

create extension pgcrypto;

drop table if exists admins;
create table admins(
   admin_id serial primary key,
   adminname varchar(40) not null ,
   password varchar(60) not null,
   status varchar(50) default 'admin',
   created_at timestamp default current_timestamp
);

drop table if exists users;
create table users(
   user_id serial primary key,
   username varchar(40) not null,
   lastname varchar(40) not null,
   password varchar(60) not null,
   contact varchar(15) not null,
   email varchar(100) unique not null,
   country varchar(150) not null,
   brithday varchar(30) not null,
   avatar text,
   status varchar(50) default 'active',
   created_at timestamp default current_timestamp
);

drop table if exists balance;
create table balance(
 balance_id serial primary key,
 user_id int references users(user_id),
 score decimal(7,2) default 0
);

drop table if exists temporary;
create table temporary(
   temporary_id serial primary key,
   user_id int references users(user_id),
   temp_score decimal(7,2) not null,
   status varchar(20) default 'pending',
   chin_key varchar(100) not null,
   created_at timestamp default current_timestamp
);

drop table if exists codes;
create table codes(
   code_id serial primary key,
   code int not null
);


insert into users(username,lastname,password,contact,email,country,brithday)
 values 
 ('victor','salamon','12345678','+908277777','josh@gmail.com','Uzbekistan','10-20-2100');

 insert into balance(user_id,score) 
 values (2,10000);

 insert into admins(adminname,password)
 values ('admin',crypt('12345678',gen_salt('bf')));
 
 insert into temporary(user_id,temp_score) 
 values (1,200);



 ALTER TABLE temporary ADD COLUMN chin_key text;
 update table set temporary on chin_key text;
