-- Verify database_schema_config:V0001_table_blog_create on pg

BEGIN;

SELECT 1 FROM blogpost LIMIT 1;

ROLLBACK;
