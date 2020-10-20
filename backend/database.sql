DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS listener_subscriptions CASCADE;
DROP TABLE IF EXISTS presenter_subscriptions CASCADE;

CREATE TABLE users(
   user_id SERIAL,
   name VARCHAR(100) NOT NULL,
   email VARCHAR(100) UNIQUE NOT NULL,
   password VARCHAR NOT NULL,
   rg VARCHAR(20) NOT NULL,
   cpf VARCHAR(14) UNIQUE NOT NULL,
   birth_date DATE NOT NULL,
   education VARCHAR(100) NOT NULL,
   work VARCHAR(100) NOT NULL,
   organization VARCHAR(100) NOT NULL,
   PRIMARY KEY(user_id)
);

CREATE TABLE listener_subscriptions(
   subscriptiont_id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   PRIMARY KEY(subscriptiont_id)
   --CONSTRAINT fk_user FOREIGN KEY(customer_id) UNIQUE REFERENCES customers(customer_id)
);

ALTER TABLE listener_subscriptions ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

CREATE TABLE presenter_subscriptions(
   id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   title VARCHAR(255) NOT NULL,
   authors VARCHAR(255) NOT NULL,
   abstract VARCHAR(5000) NOT NULL,
   PRIMARY KEY (id)
   --CONSTRAINT fk_user FOREIGN KEY(customer_id) UNIQUE REFERENCES customers(customer_id)
);

ALTER TABLE presenter_subscriptions ADD FOREIGN KEY (user_id) REFERENCES users(user_id);

insert into users values
(default,'user1','1@gmail.com','1234','11111','11111','01/01/2000','basica','estudante','ITA'),
(default,'user2','2@gmail.com','1234','22222','22222','01/01/2000','basica','estudante','ITA');
