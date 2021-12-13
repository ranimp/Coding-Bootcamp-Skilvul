FROM node:15-alpine3.13

RUN node --version

COPY . ./

RUN npm install

ENV PORT=3000

CMD ["node", "index.js"]
