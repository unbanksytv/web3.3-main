# Web 3.3 

### Features
---
This application contains the following features:
- authentication with metamask
- editing username
- posting a new tweet
- deleting an old tweet
- like and dislike a tweet
- follow other users
- show user recommendations to follow


### Installation
---

in the server, add the following code to the cloud function
```
Moralis.Cloud.define("getUsers", async function (request) {
  const query = new Parse.Query("User");
  const result = await query.find({ useMasterKey: true });
  return result;
});
```
create a .env file, and paste in the following code:
```
NEXT_PUBLIC_URL=the url of your moralis server
NEXT_PUBLIC_ID=the id of your moralis server
```
run:
```
npm install
npm run dev
```
go to http://localhost:3000 and enjoy!
