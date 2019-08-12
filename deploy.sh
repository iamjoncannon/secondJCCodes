node-sass scss/main.scss public/style.css 
webpack -p --progress
cd public
aws s3 sync . s3://www.joncannon.codes