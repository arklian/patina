-- Verify database_schema_config:V0002_table_blogtag_create on pg

BEGIN;

SELECT 1 FROM blogtag LIMIT 1;

ROLLBACK;
