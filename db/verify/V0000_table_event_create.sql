-- Verify database_schema_config:V0000_table_event_create on pg

BEGIN;

SELECT 1 FROM event LIMIT 1;

ROLLBACK;
