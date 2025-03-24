import AWS from "aws-sdk";
import {
  DynamoDBClient,
  PutItemCommand,
  CreateTableCommand,
} from "aws-sdk/lib/services/dynamodb";
AWS.config.update({
  region: "us-east-1",
});

const createTable = async () => {
  const client = new DynamoDBClient({ region: "us-east-1" });
  const params = {
    TableName: "Users",
    KeySchema: [
      { AttributeName: "userId", KeyType: "HASH" },
      { AttributeName: "firstname", KeyType: "RANGE" },
    ],
    AttributeDefinitions: [
      { AttributeName: "userId", AttributeType: "S" },
      { AttributeName: "firstname", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };
  try {
    await client.send(new CreateTableCommand(params));
    console.log("Table Created Successfully");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};
