FROM node:18-alpine
COPY explorer explorer
WORKDIR /usr/src
RUN yarn build && yarn formatting

FROM node:18-alpine
COPY --from=0 /usr/src/dest /usr/src/dest
