import { DynamoDBClient } from "aws-sdk/clients/dynamodb";
import { putCommand, DynamoDBDocumentClient } from "aws-sdk/clients/dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const params = {
      TableName: "Users",
      Item: {
        userId: body.userId,
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
      },
    };

    await docClient.send(new putCommand(params));
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Data added successfully",
        data: params.Item,
      }),
    };
  } catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({
            message: "Error adding data",
            error: error.message
        })
    }
  }
};
