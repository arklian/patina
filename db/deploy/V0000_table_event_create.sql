-- Deploy database_schema_config:V0000_table_event_create to pg

BEGIN;

CREATE TABLE event
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    message  TEXT         NOT NULL,
    location VARCHAR(255) NOT NULL,
    date     DATE         NOT NULL,
    deleted  BOOLEAN      NOT NULL DEFAULT FALSE
);

COMMIT;
