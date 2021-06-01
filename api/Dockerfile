FROM node:12.19.0
WORKDIR /usr/src/app/
COPY . /usr/src/app/
RUN apt-get update && apt-get install netcat -y
RUN npm install
EXPOSE 3000
# CMD node index.js
ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]
