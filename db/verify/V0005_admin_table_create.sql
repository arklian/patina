-- Verify database_schema_config:V0005_admin_table_create on pg

BEGIN;

DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1
            FROM pg_tables
            WHERE schemaname = 'public'
              AND tablename = 'admin'
        ) THEN
            RAISE EXCEPTION 'Table "admin" does not exist in the public schema.';
        END IF;
    END $$;


ROLLBACK;
