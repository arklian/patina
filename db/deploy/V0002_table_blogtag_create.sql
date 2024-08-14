-- Deploy database_schema_config:V0002_table_blogtag_create to pg

BEGIN;

CREATE TABLE blogtag
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


COMMIT;
