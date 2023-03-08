# Use an official Node.js runtime as a parent image
FROM node:16-alpine

RUN echo '@community http://nl.alpinelinux.org/alpine/v3.15/community' >> /etc/apk/repositories && \
    apk update && apk upgrade && \
    # DEPENDENCIES #############################################################
    apk add --update git && \
    # NODEJS ###################################################################
    apk add --update nodejs-current@community npm@community && \
    # NODEJS ###################################################################
    npm i -g vercel && \
    # CLEAN UP #################################################################
    rm -rf /var/cache/apk/*

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the Node.js application to listen on
EXPOSE 4000

# Start the Node.js application
CMD ["npm", "start"]
