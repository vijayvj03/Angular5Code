# Stage 0, based on Node.js, to build and compile Angular
FROM node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/

RUN npm start 

FROM node

# Create app directory
WORKDIR /usr/src/app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]