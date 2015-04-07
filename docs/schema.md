# Schema Information



## friendships (probably bonus-only)
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
designer    | string    |
image_url   | string    | 

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

## shelves
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
user_id        | integer   | not null, foreign key

## shelvings
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
shelf_id       | integer   | not null, foreign key
game_id        | integer   | not null, foreign key


## tag
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null, unique

## tagging
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
tag_id         | integer   | not null, foreign_key
game_id        | integer   | not null, foreign_key
number_of_tags | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

