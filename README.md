# single-linked-list

A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node.Each element in a linked list is called a node.A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.The first node is called the head.

1. Clone the repository,install node packages and run
   //on local
   git clone https://github.com/vickyc78/single-linked-list.git
   cd single-linked-list
   yarn install
   nodemon or node app.js

2. How to use

- POST Add Node API
  Use Case
  To start adding node in the list or documents use this api it will return the JSON object.

Request Attributes
Content Type : JSON

Body
node:value

Response Codes & Messages
200:Success
500:Internal server error

Request Curl
curl --request POST \
 --url https://bfc78d39febe.ngrok.io//createNode \
 --header 'content-type: application/json' \
 --data '{
"node":7
}'

Response Object
{
"createdAt": "2021-01-28T14:25:22.995Z",
"updatedAt": "2021-01-28T14:25:22.995Z",
"node": 7,
"address": null,
"id": "6012c953e2b72a41377d2334"
}

- GET Length Of Node API
  Use Case
  To get the length of the list.

Request Attributes
Content Type : JSON

Response Codes & Messages
200:Success
500:Internal server error

Request Curl
curl --request GET \
 --url http://localhost:1337/lengthOfNode \
 --cookie sails.sid=s%253An74dP6g3Vxwq1Zef9DqfwPON8_SSPMo9.gUvVAZwzJ8UiaZW8yTMp18JL8O61WLTtGBokPF8btwA

Response Object
{
"lengthOfList": 3
}

- GET Get All Nodes API
  Use Case
  To get the all nodes from the lists or documents.

Request Attributes
Content Type : JSON

Response Codes & Messages
200:Success
404:No Node Found
500:Internal server error

Request Curl
curl --request GET \
 --url http://localhost:1337/getAllNodes \
 --cookie sails.sid=s%253An74dP6g3Vxwq1Zef9DqfwPON8_SSPMo9.gUvVAZwzJ8UiaZW8yTMp18JL8O61WLTtGBokPF8btwA

Response Object
[
{
"createdAt": "2021-01-28T13:16:55.946Z",
"updatedAt": "2021-01-28T13:17:11.819Z",
"node": 1,
"address": "6012b9576102b232506ec305",
"id": "6012b9476102b232506ec304"
}
]

- POST order node API
  Use Case
  To get the order list in ascending and descending order use this api and pass node as a payload value and it will response array of JSON object.

Request Attributes
Content Type : JSON

Response Codes & Messages
200:Success
500:Internal server error

Request Curl
curl --request POST \
 --url http://localhost:1337/orderNode \
 --header 'content-type: application/json' \
 --cookie sails.sid=s%253An74dP6g3Vxwq1Zef9DqfwPON8_SSPMo9.gUvVAZwzJ8UiaZW8yTMp18JL8O61WLTtGBokPF8btwA \
 --data '{
"order":1
}'

Response Object
[
{
"createdAt": "2021-01-28T13:16:55.946Z",
"updatedAt": "2021-01-28T13:17:11.819Z",
"node": 1,
"address": "6012b9576102b232506ec305",
"id": "6012b9476102b232506ec304"
}
]

- POST search node API
  Use Case
  To search the particular node in the list use this api and pass node as a payload value it will response array of JSON object.

Request Attributes
Content Type : JSON

Response Codes & Messages
200:Success
404:No Nodes Found For Given Search Node
500:Internal server error

Request Curl
curl --request POST \
 --url http://localhost:1337/searchNode \
 --header 'content-type: application/json' \
 --cookie sails.sid=s%253An74dP6g3Vxwq1Zef9DqfwPON8_SSPMo9.gUvVAZwzJ8UiaZW8yTMp18JL8O61WLTtGBokPF8btwA \
 --data '{
"node":5
}'

Response Object
[
{
"createdAt": "2021-01-28T13:17:11.813Z",
"updatedAt": "2021-01-28T13:17:17.058Z",
"node": 5,
"address": "6012b95d6102b232506ec306",
"id": "6012b9576102b232506ec305"
}
]

- POST delete node API
  Use Case
  To delete node list use this api.

Request Attributes
Content Type : JSON

Response Codes & Messages
200:Success
500:Internal server error

Request Curl
curl --request POST \
 --url http://localhost:1337/deleteNode \
 --header 'content-type: application/json' \
 --cookie sails.sid=s%253An74dP6g3Vxwq1Zef9DqfwPON8_SSPMo9.gUvVAZwzJ8UiaZW8yTMp18JL8O61WLTtGBokPF8btwA \
 --data '{
"node":5
}'
