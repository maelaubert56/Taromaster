#!/bin/sh

sleep 10

npm run prisma db push
# npm run prisma generate
# npm run prisma migrate deploy
npm run prisma db seed

node app.js