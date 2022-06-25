FROM node:lts-alpine
RUN mkdir -p /home/node/scripts
WORKDIR /home/node/scripts
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
