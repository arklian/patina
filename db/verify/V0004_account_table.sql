-- Verify database_schema_config:V0004_account_table on pg

DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1
            FROM pg_tables
            WHERE schemaname = 'public'
              AND tablename = 'account'
        ) THEN
            RAISE EXCEPTION 'Table "account" does not exist in the public schema.';
        END IF;
    END $$;

