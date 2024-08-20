-- Deploy database_schema_config:V0005_admin_table_create to pg

BEGIN;

CREATE TABLE admin (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(254) NOT NULL UNIQUE
);


COMMIT;
