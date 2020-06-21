FROM node:14-slim
WORKDIR /code
COPY . ./
RUN npm install

EXPOSE 3000

CMD npm run start