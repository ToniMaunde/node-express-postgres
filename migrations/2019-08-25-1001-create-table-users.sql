// creating an enum for the gender field
create type genders as enum('M', 'F');

create table users( 
  id serial primary key, 
  email varchar(50) not null unique,
  password varchar(100) not null,
  gender genders,
  username varchar(50),
  created_at timestamp not null default now(), 
  updated_at timestamp not null default now() 
);