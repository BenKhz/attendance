CREATE database IF NOT EXISTS attendance;
USE attendance;
CREATE TABLE IF NOT EXISTS enrollment (id INTEGER NOT NULL AUTO_INCREMENT, first_name VARCHAR(140) NULL DEFAULT NULL,last_name VARCHAR(100) NULL DEFAULT NULL,PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS attendance (id INTEGER NOT NULL AUTO_INCREMENT,date INTEGER NOT NULL,minutes_past INTEGER NOT NULL,first_name VARCHAR(140) NULL DEFAULT NULL,last_name VARCHAR(100) NULL DEFAULT NULL,PRIMARY KEY (id));

TRUNCATE enrollment;

INSERT INTO enrollment (first_name, last_name) VALUES ("Brett", "Roberts");
INSERT INTO enrollment (first_name, last_name) VALUES ("Brian", "Lowther");
INSERT INTO enrollment (first_name, last_name) VALUES ("Charlie", "Paik");
INSERT INTO enrollment (first_name, last_name) VALUES ("Edwin", "Barinov");
INSERT INTO enrollment (first_name, last_name) VALUES ("Erik", "Dan Tran");
INSERT INTO enrollment (first_name, last_name) VALUES ("Jihoon", "Kim");
INSERT INTO enrollment (first_name, last_name) VALUES ("Joshua", "Ayres");
INSERT INTO enrollment (first_name, last_name) VALUES ("Khristian", "Lopez");
INSERT INTO enrollment (first_name, last_name) VALUES ("Matthew", "Nguyen");
INSERT INTO enrollment (first_name, last_name) VALUES ("Mike", "Ortiz");
INSERT INTO enrollment (first_name, last_name) VALUES ("Nicholas", "Anich");
INSERT INTO enrollment (first_name, last_name) VALUES ("Phi", "Truong");
INSERT INTO enrollment (first_name, last_name) VALUES ("Taite", "Jernigan");
INSERT INTO enrollment (first_name, last_name) VALUES ("Teresa", "Nguyen");
INSERT INTO enrollment (first_name, last_name) VALUES ("Timmy", "Liaw");
INSERT INTO enrollment (first_name, last_name) VALUES ("Vanessa", "Wishingrad");
INSERT INTO enrollment (first_name, last_name) VALUES ("Rufuso", "Jin");
INSERT INTO enrollment (first_name, last_name) VALUES ("Yi", "Qiao");
INSERT INTO enrollment (first_name, last_name) VALUES ("Young", "Kim");
