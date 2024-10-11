FROM node:19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

RUN chmod +x backend-start.sh

ENTRYPOINT [ "/usr/src/app/backend-start.sh" ]

CMD [ "node", "app.js" ]