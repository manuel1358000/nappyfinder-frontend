module "s3_bucket" {
  source      = "../../modules/s3"
  bucket-name = "nappy-finder-app-terraform"
  environment = "prod"
}
