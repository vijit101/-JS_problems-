function main() {
  let userAuth = (function () {
    // Create an empty array to store user data.
    let registeredUsers = [];

    return {
      registerUser: function (username, password) {
        if (this.checkCredentials(username, password)) {
          //console.log("The user is already registered");
          return "User already registered";
        } else {
          const user = { username, password };
          registeredUsers.push(user);
          //console.log("The user has been added to the registeredUser array");
          return "User successfully registered";
        }
      },

      checkCredentials: function (uname, pword) {
        return registeredUsers.some(
          (user) => user.username === uname && user.password === pword
        );
      },
    };
  })();

  // Example usage
  console.log(userAuth.registerUser("user1", "password123")); // Now it will return success message
  console.log(userAuth.registerUser("user1", "password123")); //

  return userAuth;
}

console.log(main());
