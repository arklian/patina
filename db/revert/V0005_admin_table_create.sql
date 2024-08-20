-- Revert database_schema_config:V0005_admin_table_create from pg

BEGIN;

DROP TABLE IF EXISTS admin;

COMMIT;
