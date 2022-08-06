Moralis.Cloud.define("getUsers", async function (request) {
    const query = new Parse.Query("User");
    const result = await query.find({ useMasterKey: true });
    return result;
  });