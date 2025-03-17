## User auth table

### User table for auth

create table user_auth(
id serial not null,
firstName varchar(255) default null,
lastName varchar(255) default null,
email varchar(255) not null,
Active tinyint default 1,
modifier_id int default null,
createdAt timestamp default current_timestamp,
updated_at default current_timestamp)

### Available Roles table

create type role_enum as ENUM ('Super-Admin', 'Admin', 'Client-Admin', 'User');

create table roles(
id serial PRIMARY KEY,
role role_enum not null,
actions TEXT[] not null,
active BOOLEAN default TRUE,
updatedBy INT default null,
createdAt timestamp default CURRENT_TIMESTAMP,
updatedAt timestamp default CURRENT_TIMESTAMP
)

create table user_roles(
id serial PRIMARY KEY,
roleId INT NOT NULL,
userId INT NOT NULL,
actions TEXT[] NOT NULL,
updatedBy INT DEFAULT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

### api keys and secret keys

create table api_keys(
id serial PRIMARY KEY,
secretkey VARCHAR(255) NOT NULL,
userId INT NOT NULL,
email VARCHAR(255) NOT NULL,
active BOOLEAN DEFAULT TRUE, -- BOOLEAN for true/false values
creator INT NOT NULL,
modifier_id INT DEFAULT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

create table private_keys(
id serial primary key,
apikeyid int not null,
primarykey varchar(255) not null,
active BOOLEAN DEFAULT TRUE,
createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
updatedAt timestamp default CURRENT_TIMESTAMP
)

### Error_logs

create table error_logs(
id serial primary key,
apikeyid INT NOT NULL,
response_status INT DEFAULT NULL,
response_message INT DEFAULT NULL,
api_name VARCHAR(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

### USER ACTIVITY

create table user_activity(
id serial primary key,
apikeyid INT NOT NULL,
activity_name varchar(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CuRRENT_TIMESTAMP
)

###
