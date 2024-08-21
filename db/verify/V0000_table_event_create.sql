-- Verify database_schema_config:V0000_table_event_create on pg
DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1
            FROM pg_tables
            WHERE schemaname = 'public'
              AND tablename = 'event'
        ) THEN
            RAISE EXCEPTION 'Table "event" does not exist in the public schema.';
        END IF;
    END $$;

