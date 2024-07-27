# Database (SQL)

Our database engine is PostgresQL. 

There is a managed instance hosted in Digital Ocean.

## Style Guide


### Column names
Columns should be all lower case in snake_case
- One consideration is that Google proto design guide uses this for their APIs.
  - https://cloud.google.com/apis/design/standard_fields

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
