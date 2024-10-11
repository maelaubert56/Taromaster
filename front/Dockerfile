# Stage 1: Build the React application
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG REACT_APP_CURRENT_PATH
ENV REACT_APP_CURRENT_PATH=${REACT_APP_CURRENT_PATH}
ARG REACT_APP_API
ENV REACT_APP_API=${REACT_APP_API}

RUN npm run build

# Stage 2: Serve the app using a lightweight node server like serve
FROM node:14
WORKDIR /app
COPY --from=build /app/build /app
RUN npm install -g serve
CMD ["serve", "-s", "/app", "-l", "3000"]
EXPOSE 3000