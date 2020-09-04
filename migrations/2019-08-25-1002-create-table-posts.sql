create table posts(
  id serial primary key, 
  title varchar(50) not null,
  body varchar(100) not null,
  user_id SMALLINT not null, 
  created_at timestamp default now(), 
  updated_at timestamp default now(),
  foreign key (user_id) references users (id)
);