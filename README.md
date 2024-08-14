# MariaDB GitHub Action
![Node Version](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YakkaDev/cbc0fc3d1258e0bc92c749fb5fbc0860/raw/node-version.json)
![Release Version](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YakkaDev/cbc0fc3d1258e0bc92c749fb5fbc0860/raw/git-latest-release.json)
![Jest Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YakkaDev/cbc0fc3d1258e0bc92c749fb5fbc0860/raw/jest-coverage.json)
![File Count](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YakkaDev/cbc0fc3d1258e0bc92c749fb5fbc0860/raw/git-file-count.json)
![Last Commit](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/YakkaDev/cbc0fc3d1258e0bc92c749fb5fbc0860/raw/git-last-commit-date.json)

- [Introduction](#introduction)
- [Usage](#usage)
  - [Basic](#basic)
  - [Advanced](#advanced)
- [Options](#options)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction
This [GitHub Action](https://github.com/features/actions) sets up a MariaDB database in Docker container.

[MariaDB GitHub Action](https://github.com/YakkaDev/mariadb-actions) based on the Docker container and is limited by Github Actions, which contains only Linux now. Therefore it does not work in Mac OS and Windows environment.

## Usage
Below you will find some of the possible uses of this application.

### Basic
This preset will create the `TEST` database on the MariaDB engine version `10.6.15` with the root password `123123`.
```yml
steps:
- uses: YakkaDev/mariadb-action@latest
  with:
    version: '10.6.15'
    database: 'TEST'
    root-pass: '123123'
```

### Advanced
This preset will create the `TEST` database with user `username` and password `userpass` on the MariaDB engine version `10.6.15` and characters set `utf8mb4` with the `random` root password.
```yml
steps:
- uses: YakkaDev/mariadb-action@latest
  with:
    version: '10.6.15'
    character: 'utf8mb4'
    database: 'TEST'
    user: 'username'
    password: 'userpass'
```

See Docker Hub for available [MariaDB](https://hub.docker.com/_/mariadb) versions.

## Options
Below you will find all possible options of this application, as well as their description and default values.

| Option         | Description                               | Requried | Default            |
|----------------|-------------------------------------------|:--------:|--------------------|
| host-port      | Incoming port                             | No       | 3306               |
| container-port | Сontainer port                            | No       | 3306               |
| character      | The character set of MariaDB server       | No       | utf8mb4            |
| collation      | The character collation of MariaDB server | No       | utf8mb4_general_ci |
| version        | Version of MariaDB server                 | No       | latest             |
| root-pass      | Root user password                        | No       | RANDOM             |
| database       | MariaDB default database                  | Yes      | -                  |
| user           | User for created database                 | No       | root               |
| password       | MariaDB user password                     | Yes      | -                  |

## License
This project is released under the [MIT License](https://github.com/YakkaDev/mariadb-actions/LICENSE).

## Acknowledgments
The application uses a Docker container based on [MariaDB](https://mariadb.org/) images.

---