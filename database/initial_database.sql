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



-- /*
--     Compras
-- */
-- CREATE SEQUENCE seq_compras_id
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- -- definir dados da tabela
-- CREATE TABLE compras (
--     id integer NOT NULL,
--     username text NOT NULL,
--     password text NOT NULL,
--     token text
-- );

-- ALTER TABLE ONLY compras 
--     ALTER COLUMN id SET DEFAULT nextval('compras_id_seq'::regclass);

-- ALTER TABLE ONLY compras 
--     ADD CONSTRAINT pk_compras_id PRIMARY KEY (id);



-- /*
--     Destino
-- */
-- CREATE SEQUENCE seq_destino_id
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;

-- CREATE TABLE destino (
--     id integer NOT NULL,
--     username text NOT NULL,
--     password text NOT NULL,
--     token text
-- );

-- ALTER TABLE ONLY destino 
--     ALTER COLUMN id SET DEFAULT nextval('destino_id_seq'::regclass);

-- ALTER TABLE ONLY destino 
--     ADD CONSTRAINT pk_destino_id PRIMARY KEY (id);



-- /*
--     Evento
-- */
-- CREATE SEQUENCE seq_evento_id
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;

-- CREATE TABLE evento (
--     id integer NOT NULL,
--     username text NOT NULL,
--     password text NOT NULL,
--     token text
-- );

-- ALTER TABLE ONLY evento 
--     ALTER COLUMN id SET DEFAULT nextval('evento_id_seq'::regclass);

-- ALTER TABLE ONLY evento 
--     ADD CONSTRAINT pk_evento_id PRIMARY KEY (id);



