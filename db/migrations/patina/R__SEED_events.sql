-- Seed data to fill in the event table when starting with a fresh DB.
INSERT INTO event (name, message, location, date)
SELECT *
FROM (VALUES ('Event 1', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 2', 'First Day', 'fractal', date('2024-07-25')),
             ('Event 3', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 4', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 5', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 6', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 7', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 8', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 9', 'Welcome to Patina Network', 'online', date('2024-07-25')),
             ('Event 10', 'Welcome to Patina Network', 'online', date('2024-07-25')))
WHERE NOT EXISTS (SELECT id
                  FROM event
                  WHERE id = 1);
