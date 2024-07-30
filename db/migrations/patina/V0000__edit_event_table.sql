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

CREATE TABLE blogpost
(
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);
