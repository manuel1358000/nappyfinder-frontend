output "prod_bucket_name" {
  value = module.s3_bucket.bucket_name
}

output "prod_bucket_url" {
  value = module.s3_bucket.bucket_url
}