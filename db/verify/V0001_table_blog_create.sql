-- Verify database_schema_config:V0001_table_blog_create on pg
DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1
            FROM pg_tables
            WHERE schemaname = 'public'
              AND tablename = 'blog'
        ) THEN
            RAISE EXCEPTION 'Table "blog" does not exist in the public schema.';
        END IF;
    END $$;
