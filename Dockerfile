# FROM node:14.16.0

# WORKDIR /app

# ADD . /app
# RUN npm install

# CMD ["npm", "start"]

#
# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14.16.0 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
# RUN npm run build
CMD ["npm", "run build"]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
# COPY --from=build-stage /app/build/ /usr/share/nginx/html/react-sample
COPY --from=build-stage /app/build/ /etc/nginx/html/react-sample
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
