let aws = require('aws-sdk');
​
let ddb = new aws.DynamoDB();
​
exports.handler = (event, context, callback) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Items: {
        "id": { S: event.request.userAttributes.sub },
        "__typename": { S: "User" },
        "username": { S: event.username },
        "email": { S: event.request.userAttributes.email },
        "createdAt": { S: date.toISOString() },
        "updatedAt": { S: date.toISOString() }
      },
      TableName: process.env.USERTABLE
    };
​
    try {
      await ddb.putItem(params).promise();
      console.log('SUCCESS!');
    } catch (error) {
      console.log('Error', error);
    }
​
    context.done(null, event);
  } else {
    console.log('Error: Nothing was written to dynamoDB');
    context.done(null, event);
  }
};
