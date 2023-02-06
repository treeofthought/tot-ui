FROM nginx:1.21.6-alpine

EXPOSE 9000
COPY ./build /var/www
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/nginx.conf .platform/nginx/conf.d 

COPY ./nginx/templates /etc/nginx/templates/

CMD ["nginx", "-g", "daemon off;"]
