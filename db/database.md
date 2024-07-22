

https://github.com/flyway/flywaydb.org/blob/gh-pages/documentation/concepts/migrations.md


Seed data
Sqitch vs Fly

https://github.com/nathansutton/database-migrations/blob/main/src/migrations/sqitch/deploy/concept.sql

Change project dialect to PostgresSQL in IntelliJ
- Disable `no data sources configured` in IntelliJ inspections
- Disable `unrecognized references`
- Actions on Save -> Reformat Code + SQL


flyway -url=$FLYWAY_URL -user=$DATABASE_USER -password=$DATABASE_PASSWORD info
flyway -url=$FLYWAY_URL -user=$DATABASE_USER -password=$DATABASE_PASSWORD -locations=db/migrations/patina info

@Value("${baeldung.presentation}")
private String baeldungPresentation;

Database naming conventions:

Options:
- Plural vs Singular Table Names
- Pascal/Camel/Snake case
- Capital Tables + Lowercase Cols?
Always:
- No Spaces



pgAdmin4 
- Preferences
  - Turn off `Show empty object collection`
