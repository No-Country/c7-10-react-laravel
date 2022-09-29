# c7-10-react-laravel
 composer install
 cp .env.example .env
 php artisan key:generate

 # en caso de subir imagenes
 php artisan storage:link

 # correr migraciones + seeder
 php artisan migrate --seed