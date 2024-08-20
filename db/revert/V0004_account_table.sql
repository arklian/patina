-- Revert database_schema_config:V0004_account_table from pg

BEGIN;

DROP TABLE IF EXISTS account;

COMMIT;
