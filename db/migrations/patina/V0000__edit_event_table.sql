-- TODO(Henry): Figure out better column names.
CREATE TABLE event
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    message  TEXT         NOT NULL,
    location VARCHAR(255) NOT NULL,
    date     DATE         NOT NULL,
    deleted  BOOLEAN      NOT NULL DEFAULT FALSE
);
