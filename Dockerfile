FROM docker.uclv.cu/node:14.16.1-alpine3.13

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["node", "src/index.js"]