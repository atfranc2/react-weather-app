FROM node:lts-bullseye

WORKDIR /weather-app

COPY ./package.json /weather-app

COPY ./package-lock.json /weather-app

RUN npm install

COPY . /weather-app

EXPOSE 3001

CMD npm start