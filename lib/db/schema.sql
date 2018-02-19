DROP SCHEMA IF EXISTS teaching_app CASCADE;
CREATE SCHEMA teaching_app;

CREATE TABLE teaching_app.users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  is_disabled BOOLEAN DEFAULT false
);

CREATE TABLE teaching_app.bubbles (
  id SERIAL PRIMARY KEY,
  color VARCHAR(100),
  diameter_mm INTEGER,
  user_id INTEGER,
  popped BOOLEAN DEFAULT false,
  FOREIGN KEY (user_id) REFERENCES teaching_app.users (id)
);