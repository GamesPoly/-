#!/usr/bin/env bash

# Install/Update dependencies
dependencies=(
  git
  curl
  neovim
  nginx=1.25.*
)

sudo apt-get update

for dependency in "${dependencies[@]}"; do
  sudo apt-get install -y "$dependency"
  if [ $? -ne 0 ]; then
    echo "Failed to install $dependency. Exiting..."
    exit 1
  fi
done

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Docker
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Add current user to docker group (optional, to avoid using sudo with docker commands)
sudo usermod -aG docker $USER

mkdir /var/www
mkdir /var/www/polygames/

# TODO: letsencrypt, nginx config links
