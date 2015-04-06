# Schema Information

## friendships
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
first_user_id  | integer   | not null, foreign key (references users)
second_user_id | integer   | not null, foreign key (references users)

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_url   | string    | 

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null
user_id     | integer   | not null, foreign key
game_id     | integer   | not null, foreign key

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key
game_id     | integer   | not null, foreign key
