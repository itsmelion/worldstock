FROM node:alpine

RUN mkdir -p /opt/worldstock
RUN echo '🐳 => Building WorldStock 💵📈...'


# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /opt

COPY package.json yarn.lock* *mod.js ./
# ADD . /opt/worldstock
RUN rm -rf node_modules && \
npm cache verify && \
npm install && \
npm dedupe && \
npm prune

ENV PATH /opt/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
WORKDIR /opt/worldstock
COPY . /opt/worldstock

RUN echo '🐳 => WorldStock container built! ✅'

CMD ["npm", "start"]
