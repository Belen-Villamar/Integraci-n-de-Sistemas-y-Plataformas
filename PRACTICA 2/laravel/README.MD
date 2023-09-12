*PRACTICA LARAVEL

* docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
![Alt text](image.png)

//ahora lo quiero correr
docker-compose up -d --build server
![Alt text](image-2.png)

//migrar artisan
* docker-compose run --rm artisan migrate
docker-compose run --rm artisan list
docker-compose run --rm npm version
![Alt text](image-3.png)