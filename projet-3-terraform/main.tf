terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

provider "docker" {}

resource "docker_image" "devops_app" {
  name = "abderahim7875/devops-app:latest"
}

resource "docker_container" "devops_container" {
  image = docker_image.devops_app.image_id
  name  = "devops-app-container"

  ports {
    internal = 3000
    external = 3000
  }
}
