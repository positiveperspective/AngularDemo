FROM node:20-alpine AS builder

RUN mkdir /app
WORKDIR /app

RUN npm install -g @angular/cli@19

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

#RUN NODE_OPTIONS=--max-old-space-size=8192 npm run build:ssr
RUN ng build

EXPOSE 4200

#CMD [ "ng", "serve", "--host", "0.0.0.0", "--poll", "2000" ]
#CMD ["npm", "run", "serve:ssr", "--host 0.0.0.0 --port 4200"]
#CMD ["ng", "serve", "--host", "0.0.0.0"]
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]