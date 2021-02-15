#!/bin/bash


# Install Docker and Docker Compose
  sudo apt-get update

  sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

  sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

  sudo chmod +x /usr/local/bin/docker-compose

  sudo groupadd docker

  sudo usermod -aG docker $USER

  newgrp docker