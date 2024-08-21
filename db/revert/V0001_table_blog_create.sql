-- Revert database_schema_config:V0001_table_blog_create from pg

BEGIN;

DROP TABLE IF EXISTS blog;

COMMIT;
