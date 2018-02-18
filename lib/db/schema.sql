DROP SCHEMA IF EXISTS teaching_app CASCADE;
CREATE SCHEMA teaching_app;

CREATE TABLE teaching_app.users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  is_disabled BOOLEAN DEFAULT false
);