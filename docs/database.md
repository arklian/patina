# Database (SQL)

Our database engine is PostgresQL. 

There is a managed instance hosted in Digital Ocean.


## Migrations and Config as Code 
When the schema of the database changes, a migration needs to happen to make that change. This could
be things like adding or deleting a column, index or table.
https://github.com/flyway/flywaydb.org/blob/gh-pages/documentation/concepts/migrations.md

To keep track of database schema and such, we can keep versions of our DB as a list of SQL queries
to apply. 

Currently, Flyway is being tested as the way to handle migrations, but other alternatives
being considered are:
- sqitch
  - https://github.com/nathansutton/database-migrations/blob/main/src/migrations/sqitch/deploy/concept.sql
- custom script

flyway -url=$FLYWAY_URL -user=$DATABASE_USER -password=$DATABASE_PASSWORD -locations=db/migrations/patina info

### Seed Data
Todo: Write this

## Style Guide
The usual points of contention for SQL styles are:
- Singular or Plural for table names
  - Plural neatly avoids most reserved words as they are singular
  - Singular is more algebraically correct
- PascalCase or snake_case for column names
  - snake_case allows for all lowercase as most engines are case-insensitive
  - PascalCase allows for the use of underscores more deliberately
- id or table_id for primary key
  - id allows for a neat convention that primary key is id
    - Breaks down somewhat if you require multiple cols to create a unique key
  - table_id allows joins to be on the same column name
    - Can tell primary keys based on table name

Always:
- No spaces in tables or cols

### Column names
Columns should be all lower case in snake_case
- One consideration is that Google proto design guide uses this for their APIs.
    - https://cloud.google.com/apis/design/standard_fields

### IntelliJ Settings
Change project dialect to PostgresSQL in IntelliJ
- Disable `no data sources configured` in IntelliJ inspections
- Disable `unrecognized references`
- Actions on Save -> Reformat Code + SQL

### pgAdmin4
GUI for managing PostgresQL DBs.
- Preferences
    - Turn off `Show empty object collection`


## Id Consideration
https://dba.stackexchange.com/questions/151253/non-integer-primary-key-considerations
https://en.wikipedia.org/wiki/Snowflake_ID
https://www.callicoder.com/distributed-unique-id-sequence-number-generator/

Snowflake ids seem to be a good option.

## Future Work
TODO(Henry)
- Set up Style Guide
- Set up local development with docker
- Set up dev instance fallback
- Set up migrations flow
  - Figure out how to best use flyway or if sqitch is better
- Set up better ids
- Investigate AstroDB for a generous free tier for simpler content
  - PatNet Blog + Events?
  - SQLite could be another option, and just host the data inside of Github
  - Turso? https://docs.turso.tech/introduction https://www.youtube.com/watch?v=aUfYzjKNCh4

#### Tags:
db
sql
database
postgres
postgresql
data
