
# Use Node.js 14 as the base image
FROM  node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install --force

# Copy the entire project to the container
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the desired port (replace 3000 with the appropriate port if needed)
EXPOSE 3000

# Set the command to run the Next.js server
CMD ["npm", "run", "dev"]