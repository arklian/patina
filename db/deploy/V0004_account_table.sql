-- Deploy database_schema_config:V0004_account_table to pg

BEGIN;

CREATE TABLE account (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(254) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
