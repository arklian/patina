-- Deploy database_schema_config:V0001_table_blog_create to pg

BEGIN;

CREATE TABLE blogpost
(
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
