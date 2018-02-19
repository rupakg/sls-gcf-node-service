# gcf-nodejs-service

A sample serverless service deployed to Google Cloud Functions.

## Set up Google Cloud account

Check out this [post](https://serverless.com/blog/google-cloud-functions-application/) to setup your Google Cloud account.

## Install dependencies

`$ npm install`

## Deploy

`$ sls deploy`

## Run

### GET /hello

```
curl https://xxxxxxxxxxxxx.cloudfunctions.net/hello

Hello World!
```

### POST /sayMessage

```
curl -X POST -H "Content-Type:application/json"  -d '{"message":"Hello World POSTed!!!"}' https://xxxxxxxxxxx.cloudfunctions.net/sayMessage

Hello World POSTed!!!
```
