# Use node image as base
FROM node:16.20.0

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install Angular CLI globally (@v11.2.14)
RUN npm install -g @angular/cli@11.2.14

# Install project dependencies
RUN npm install --legacy-peer-deps
