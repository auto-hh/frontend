FROM alpine/openssl:latest AS certs

WORKDIR /certs/

RUN openssl ecparam -genkey -name secp384r1 -out key.pem
RUN openssl req -x509 -new -key key.pem -out cert.pem -days 365 -subj "/C=RU/ST=Moscow/L=Strogino/O=auto-hh/OU=IT/CN=localhost"


FROM node:25-alpine3.22 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:1.29.7-alpine3.23-slim

RUN apk add --no-cache gettext

COPY ./nginx.conf /tmp/nginx.conf
COPY --from=certs /certs/ /etc/nginx/certs/
COPY --from=builder /app/dist/ /var/www/static/

CMD [ "sh", "-c", "envsubst '$BACKEND_HOST $BACKEND_PORT' < /tmp/nginx.conf > /etc/nginx/nginx.conf && /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf" ]
