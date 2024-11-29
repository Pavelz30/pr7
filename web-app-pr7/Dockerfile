FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./static/ .
COPY ./nginx/default.conf.template /etc/nginx/templates/
EXPOSE 80
