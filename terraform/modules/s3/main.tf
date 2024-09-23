resource "aws_s3_bucket" "nappy_finder_app_bucket" {
  bucket = "${var.bucket-name}-${var.environment}"
}

//2.Provides an S3 bucket website configuration resource. For more information
resource "aws_s3_bucket_website_configuration" "nappy_finder_app_bucket_website" {
  bucket = aws_s3_bucket.nappy_finder_app_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

//3.Manages S3 bucket-level Public Access Block configuration

resource "aws_s3_bucket_public_access_block" "nappy_finder_app_bucket_public_access_block" {
  bucket = aws_s3_bucket.nappy_finder_app_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

//4. Propiedad del bucket S3

resource "aws_s3_bucket_ownership_controls" "nappy_finder_app_bucket_ownership_controls" {
  bucket = aws_s3_bucket.nappy_finder_app_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
  depends_on = [aws_s3_bucket_public_access_block.nappy_finder_app_bucket_public_access_block]
}

//5. Politica del bucket

resource "aws_s3_bucket_policy" "nappy_finder_app_bucket_policy" {
  bucket = aws_s3_bucket.nappy_finder_app_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.nappy_finder_app_bucket.arn}/*"
      }
    ]
  })

  depends_on = [
    aws_s3_bucket.nappy_finder_app_bucket,
    aws_s3_bucket_public_access_block.nappy_finder_app_bucket_public_access_block,
    aws_s3_bucket_ownership_controls.nappy_finder_app_bucket_ownership_controls
  ]
}


