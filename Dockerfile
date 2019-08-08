FROM node:8.16.0-alpine AS build
COPY . /src/node
WORKDIR /src/node
RUN npm install && npm run build

FROM nginxinc/nginx-unprivileged:1.16.0-alpine
COPY --from=build /src/node/dist /usr/share/nginx/html
