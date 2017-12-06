FROM node:8

MAINTAINER Simon Wood <i@wuqian.me>

COPY . /var/opt/

RUN npm install && npm install -g pm2

EXPOSE 5000

CMD ["pm2", "start", "/var/opt/server.js", "--no-daemon"]
