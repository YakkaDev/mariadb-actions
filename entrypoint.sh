#!/bin/sh

command="docker run"

if [ -n "$INPUT_ROOT_PASS" ]; then
  echo "Root password not empty, use root superuser"

  command="$command -e MARIADB_ROOT_PASSWORD=$INPUT_ROOT_PASS"
  
elif [ -n "$INPUT_USER" ]; then
  if [ -z "$INPUT_PASSWORD" ]; then
    echo "The MariaDB Password must not be empty when MariaDB User exists"
    exit 1
  fi

  echo "Use specified user and password"

  command="$command -e MARIADB_RANDOM_ROOT_PASSWORD=true -e MARIADB_USER=$INPUT_USER -e MARIADB_PASSWORD=$INPUT_PASSWORD"
  
else
  echo "Both root password and superuser are empty, must contains one superuser"
  exit 1
fi

if [ -n "$INPUT_DATABASE" ]; then
  echo "Use specified database"

  command="$command -e MARIADB_DATABASE=$INPUT_DATABASE"
fi

command="$command -d --name mariadb -p $INPUT_HOST_PORT:$INPUT_LOCAL_PORT mariadb:$INPUT_VERSION --port=$INPUT_CONTAINER_PORT"
command="$command --character-set-server=$INPUT_CHARACTER --collation-server=$INPUT_COLLATION"

sh -c "$command"