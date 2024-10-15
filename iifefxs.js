function main() {
  let userAuth = (function () {
    // Create an empty array to store user data.
    let registeredUsers = [];
    // Define the registerUser function.
    return {
      registerUser: function (username, password) {
        if (this.checkCredentials(username, password) === true) {
          console.log("The user is already registered");
        } else {
          registeredUsers.push({ username, password });
          console.log("The user have been added to the registered");
        }
      },
      checkCredentials: function (uname, pword) {
        for (let i of registeredUsers) {
          if (i.username === uname && i.password === pword) {
            return true;
          } else {
            return false;
          }
        }
        return false;
        // first time no user exists hence return false and then the if else will take care of return
      },
    };
    // Define the checkCredentials function.

    // Return the functions as an object
  })();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123"));
  // Output: "The user have been added to the registeredUser array"
  console.log(userAuth.registerUser("user1", "password123"));
  // Output: "The user is already registered"
  userAuth.registerUser("testuser", "password123");
  userAuth.registerUser("testuser", "password123");
  return userAuth;
}

console.log(main());
