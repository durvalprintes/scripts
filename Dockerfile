FROM node:lts-alpine
RUN mkdir -p /home/node/scripts
WORKDIR /home/node/scripts
COPY . .
CMD ["npm", "start"]
