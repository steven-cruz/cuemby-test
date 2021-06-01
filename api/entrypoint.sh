#!/usr/bin/env bash
while ! nc -z "db" 5432; do 
    sleep 0.1
done

echo "Conexion ready!"
sleep 4
cd /usr/src/app
node index.js
