FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY package-lock.json ./

RUN ls
#RUN npm install
# If you are building your code for production
RUN npm ci

# Bundle app source
COPY . .
RUN npx typescript
EXPOSE 13370

CMD [ "node", "dist/index.js" ]