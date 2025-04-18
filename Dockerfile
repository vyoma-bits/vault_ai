# Step 1: Use Node.js base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and lock files
COPY package.json package-lock.json* ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application
COPY . .

# Step 6: Build your Tailwind CSS (if needed) and Next.js app
RUN npm run build

# Step 7: Expose the port the app runs on
EXPOSE 3000

# Step 8: Start the application
CMD ["npm", "start"]
