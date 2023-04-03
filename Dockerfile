FROM node:18.15.0
WORKDIR /Users/mild/Desktop/KUlony/Frontend

COPY package*.json ./
RUN npm i -f

COPY . .
EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]