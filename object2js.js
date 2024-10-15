function main() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001",
    },
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: "0101",
      zipCode: "10011",
    },
  };

  function getUserDetail(profile, keys) {
    // Implement your function here
    //let objectLength = Object.keys(profile).length;
    let keyslength = keys.length;
    let val = profile[keys[0]];
    for (let i = 1; i < keyslength ; i++) {
      let valtype = typeof(val);
      if (valtype === "object") {
        val = val[keys[i]];
      }
      else{
        if(val == undefined){
          val = "not available";
        }
        return val;
      }
    }
    if(val == undefined){
      val = "not available";
    }
    return val;
  }

  console.log(getUserDetail(userProfile, ["name"]));
  // Usage: should return "New York"
  //do not modify the return statement
  return getUserDetail;
}
console.log(main());
