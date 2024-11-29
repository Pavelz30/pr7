# Backend приложение
Небольшой Backend на Java Spring Boot с Gradle в качестве системы сборки.

## Сборка образа
Сборку образа можно выполнить в ручном режиме при помощи команды:
```
$ docker build -t spring-back-pr7 .
```

## Запуск приложения
Запустить контейнер можно при помощи команды:
```
$ docker run -d --name spring-back-pr7 -e DATABASE_PASSWORD=<pass> -e DATABASE_URL=jdbc:postgresql://<host>:5432/<dbname> -e DATABASE_USERNAME=<user> spring-back-pr7
```

Передаваемые переменные отвечают за параметры подключения к БД. Приведенная URL характерна для подключения к БД PostgreSQL.

## Развертывание БД
Базу данных PostgreSQL можно также разместить в Docker при помощи команды
```
docker run --name postgres -p 5432:5432 -d -e POSTGRES_PASSWORD=<pass> -e POSTGRES_DB=<dbname> postgres:16
```
