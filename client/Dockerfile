FROM node:latest
WORKDIR /app/client
COPY package.json /app/client/
RUN npm install
COPY . /app/client/
EXPOSE 8080
CMD ["npm", "start"]