FROM node:10
RUN apt-get update || : && apt-get install python3 -y
WORKDIR /home/node/app
COPY . .
RUN npm install
CMD [ "node", "index.js" ]
EXPOSE 8080