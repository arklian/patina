-- Revert database_schema_config:V0003_blog_image_col from pg

BEGIN;

ALTER TABLE blog
    DROP COLUMN image;

COMMIT;
