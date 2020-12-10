DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS listener_subscriptions CASCADE;
DROP TABLE IF EXISTS presenter_subscriptions CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;

CREATE TABLE users(
   user_id SERIAL,
   name VARCHAR(100),
   email VARCHAR(100) UNIQUE NOT NULL,
   password VARCHAR,
   rg VARCHAR(20),
   cpf VARCHAR(14) UNIQUE,
   tel VARCHAR(20),
   birth_date DATE,
   education VARCHAR(100),
   work VARCHAR(100),
   organization VARCHAR(100),
   PRIMARY KEY(user_id)
);

CREATE TABLE contact_messages(
   contact_message_id SERIAL,
   name VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL,
   message VARCHAR(5000) NOT NULL,
   PRIMARY KEY(contact_message_id)
);

CREATE TABLE listener_subscriptions(
   subscriptiont_id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   PRIMARY KEY(subscriptiont_id)
);

ALTER TABLE listener_subscriptions ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

CREATE TABLE presenter_subscriptions(
   id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   title VARCHAR(255) NOT NULL,
   authors VARCHAR(255) NOT NULL,
   abstract VARCHAR(5000) NOT NULL,
   PRIMARY KEY (id)
);

ALTER TABLE presenter_subscriptions ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

insert into users values
(default,'user1','1@gmail.com','1234','11111','11111','66666666','01/01/2000','basica','estudante','ITA'),
(default,'user2','2@gmail.com','1234','22222','22222','66666666','01/01/2000','basica','estudante','ITA');
