# Sử dụng image node phiên bản LTS làm base image
FROM node:lts

# Đặt thư mục làm working directory
WORKDIR /src

# Copy package.json và package-lock.json vào working directory
COPY package*.json ./

# Cài đặt dependencies của ứng dụng
RUN npm install

# Copy tất cả các file trong thư mục hiện tại vào working directory
COPY . .

# Build production build của ứng dụng
RUN npm run build

# Khai báo port mà ứng dụng sẽ sử dụng
EXPOSE 3001

# Khai báo lệnh để chạy ứng dụng khi container được khởi chạy
CMD ["npm", "start"]
