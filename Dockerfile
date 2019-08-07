FROM node:8.16.0-alpine AS build
COPY . /src/node
WORKDIR /src/node
RUN npm install && npx gulp

FROM nginxinc/nginx-unprivileged:1.16.0-alpine
COPY --from=build /src/node/build /usr/share/nginx/html
