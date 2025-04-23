FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Set environment variables (will be overridden by Fly.io secrets)
ENV NODE_ENV=production
ENV PORT=5000

# Create uploads directory with proper permissions
RUN mkdir -p uploads && chmod 777 uploads

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["node", "server.cjs"]