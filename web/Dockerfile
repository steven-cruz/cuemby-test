FROM node:12.19.0
WORKDIR /usr/src/app/
COPY . /usr/src/app/
RUN npm install http-server -g
EXPOSE 8080
# CMD node index.js
ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]
