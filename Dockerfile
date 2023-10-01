ARG BASE_IMAGE=node:18-alpine3.18
ARG PROJECT_NAME=web-ixo

# This is a multiple stage Dockerfile.
# - Stage 1: starter (base image with Node.js 18 and the turbo package installed globally)
# - Stage 2: builder (adds dependencies, environment variables, and builds the project using yarn)
# - Stage 3: runner (final image for the web project, sets environment variables, starts the server)

# Stage: starter
FROM --platform=linux/amd64 ${BASE_IMAGE} AS starter
WORKDIR /app
RUN npm i -g turbo

################################################################################

# Stage: builder
FROM --platform=linux/amd64 starter AS builder

### First install the dependencies (as they change less often)
COPY . .

RUN corepack enable && yarn -v && yarn install --inline-builds

## Setting up the environment variables for the docker container.
ARG PROJECT_NAME=web-ixo
ENV NODE_ENV=production
# Devnet
# ENV NEXT_PUBLIC_GRAPHQL_URL=https://graphql.blockscan.devnet.ixo.earth/v1/graphql
# ENV NEXT_PUBLIC_GRAPHQL_WS=wss://graphql.blockscan.devnet.ixo.earth/v1/graphql
# ENV NEXT_PUBLIC_RPC_WEBSOCKET=wss://devnet.ixo.earth/rpc/websocket
# ENV NEXT_PUBLIC_CHAIN_TYPE=devnet
# Testnet
ENV NEXT_PUBLIC_GRAPHQL_URL=https://graphql.blockscan.testnet.ixo.earth/v1/graphql
ENV NEXT_PUBLIC_GRAPHQL_WS=wss://graphql.blockscan.testnet.ixo.earth/v1/graphql
ENV NEXT_PUBLIC_RPC_WEBSOCKET=wss://testnet.ixo.earth/rpc/websocket
ENV NEXT_PUBLIC_CHAIN_TYPE=testnet

## Build the project
RUN yarn workspace ${PROJECT_NAME} add sharp && yarn workspace ${PROJECT_NAME} run build

WORKDIR /app/apps/${PROJECT_NAME}

CMD ["yarn","start"]
# CMD yarn start -p 3000
