'use strict';

exports.hello = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.sayMessage = (request, response) => {
  if (request.body.message === undefined) {
    // This is an error case, as "message" is required
    response.status(400).send('No message defined!');
  } else {
    // Everything is ok
    console.log(request.body.message);
    response.status(200).send(request.body.message);
  }
};
