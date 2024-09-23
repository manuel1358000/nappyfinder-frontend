terraform {
  backend "s3" {
    bucket = "terraform-deploy-nappy-finder-app-state-dev"
    key = "state/terraform.tfstate"
    region = "us-west-2"
  }
}