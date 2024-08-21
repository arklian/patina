-- Verify database_schema_config:V0003_blog_image_col on pg

BEGIN;

SELECT column_name
FROM information_schema.columns
WHERE table_name = 'blog'
  AND column_name = 'image';

ROLLBACK;
