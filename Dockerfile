FROM node:18 AS build

WORKDIR /app

COPY odontoChat/package*.json ./

RUN npm install

COPY odontoChat/ .

RUN npm run build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]