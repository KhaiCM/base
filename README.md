# Code base

- API: Laravel
- CLient: Vue CLI

## Start guides for Docker

1. Clone this repository

```bash
$ git clone git@github.com:KhaiCM/base.git

$ cd path-to-project

- open with Vscode:

$ code .

- open with sublime text:

$ subl .
```

2. Start Docker

```bash
cd path-to-project

docker-compose up --build
```

3. Install Laravel

``` bash
docker-compose exec workspace bash

# Inside container workspace
cp .env.example .env

composer install

php artisan key:generate
```

4. => Start on serve  

```bash
- With laravel app on http://localhost:8002

- With Vue client app on http://localhost:8080

- With adminer on http://localhost:8082 (MYSQL_DATABASE: homestead, MYSQL_USER: homestead, MYSQL_PASSWORD: secret)
```
5. Exec docker container

- Laravel:

```bash
docker-compose exec workspace bash
```

- Mysql:

```bash
docker-compose exec mysql bash
```

- Vue:

```bash
docker-compose exec app sh
```
6. Stop docker

```bash
docker-compose stop/down
`
