terraform {
  backend "s3" {
    bucket = "nappy-finder-app-state-terraform"
    key = "state/terraform.tfstate"
    region = "us-west-2"
  }
}