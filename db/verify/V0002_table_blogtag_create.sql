-- Verify database_schema_config:V0002_table_blogtag_create on pg
DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1
            FROM pg_tables
            WHERE schemaname = 'public'
              AND tablename = 'blogtag'
        ) THEN
            RAISE EXCEPTION 'Table "blogtag" does not exist in the public schema.';
        END IF;
    END $$;
