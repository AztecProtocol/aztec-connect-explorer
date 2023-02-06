FROM node:18-alpine
WORKDIR /usr/src
COPY . .
RUN yarn && yarn build && yarn formatting

FROM node:18-alpine
COPY --from=0 /usr/src/dest /usr/src/dest
