FROM node:10
RUN apt-get update || : && apt-get install python3 -y
RUN apt-get install pip3 -y
RUN pip3 install instaloader
RUN pip3 install --upgrade instaloader
RUN apt-get install -y git
RUN git clone https://github.com/VaterTaos/instaloader-service.git
WORKDIR instaloader-service
RUN npm install
CMD [ "node", "index.js" ]
VOLUME [ "/instaloader-service/data" ]
EXPOSE 8080