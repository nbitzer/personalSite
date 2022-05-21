FROM node:latest
WORKDIR /app/server
COPY package.json /app/server/
RUN npm install
COPY . /app/server/
CMD ["npm", "start"]