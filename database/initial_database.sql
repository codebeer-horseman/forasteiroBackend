CREATE DATABASE forasteiro;

/*
    Users
*/
CREATE SEQUENCE seq_users_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE users (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    token text, 
    is_admin boolean not null
);

ALTER TABLE ONLY users 
    ALTER COLUMN id SET DEFAULT nextval('seq_users_id'::regclass);

ALTER TABLE ONLY users 
    ADD CONSTRAINT pk_users_id PRIMARY KEY (id);
