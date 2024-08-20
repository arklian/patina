-- Deploy database_schema_config:V0003_blog_image_col to pg

BEGIN;

ALTER TABLE blog
    ADD COLUMN image VARCHAR(1000);

COMMIT;
