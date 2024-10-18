//Do not alter the starter code.
function main(){
    //Create your class "User" here with all the properties and methods
    class User{
        #name;
        #email;
        #password;
        #posts;

        constructor(name,email,password){
            this.#name = name;
            this.#email = email;
            this.#password = password;
            this.#posts = [];
        }

        get Name(){
            return this.#name;
        }
        get Email(){
            return this.#email;
        }
        get Password(){
            return this.#password;
        }

        set Name(newname){
            this.#name = newname;
        }
        set Email(newemail){
            this.#email = newemail;
        }
        set Password(pass){
            this.#password = pass;;
        }

        addPost(postObj){
            this.#posts.push(postObj);
        }

        deletePost(postObjtoDel){
            for(let i = 0;i<this.#posts.length;i++){
                if(this.#posts[i] === postObjtoDel){
                    this.#posts.splice(i,1);
                    return;
                }
            }
        }

        displayPosts(){
            for(let i=0;i<this.#posts.length;i++){
                console.log(this.#posts[i].title);
            }
        }

        
    }


    class Post extends User{
        #title;
        #content;
        #date;
        #likeCount;

        constructor(name,email,password,title, content , date ){
            super(name,email,password);
            this.#title = title;
            this.#content = content;
            this.#date = date;
            this.#likeCount = 0;
        }

        get title() {
            return this.#title;
        }
    
        set title(newTitle) {
            this.#title = newTitle;
        }
    
        // Getter and setter for content
        get content() {
            return this.#content;
        }
    
        set content(newContent) {
            this.#content = newContent;
        }
    
        // Getter and setter for date
        get date() {
            return this.#date;
        }
    
        set date(newDate) {
            this.#date = newDate;
        }
    
        // Getter for likeCount
        get likeCount() {
            return this.#likeCount;
        }

        addLike() {
            this.#likeCount++;
        }

        displayDetails() {
            console.log(
                `Owner: ${this.Name},
                Title: ${this.#title},
                Content: ${this.#content},
                Date: ${this.#date.toString().split('T')[0]}, // Format date to YYYY-MM-DD 
                LikeCount: ${this.#likeCount}`
            );
        }
    }

    /*split('T'): This method splits the string at the character 'T'. Since the ISO string contains a T separating the date from the time, this will create an array with two elements:

The first element (index 0) will be the date part (YYYY-MM-DD).
The second element (index 1) will be the time part (HH:mm:ss.sssZ).
[0]: This accesses the first element of the array created by split('T'), which is the date in YYYY-MM-DD format. */


    //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
      const user1 = new User("John", "john@example.com", "password123");
      const post1 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My first post",
        "Lorem ipsum dolor sit amet",
        "2021-01-01"
      );
      const post2 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My second post",
        "Consectetur adipiscing elit",
        "2021-01-02"
      );
      
      user1.addPost(post1);
      user1.addPost(post2);
      
      post1.addLike();
      post1.addLike();
      
      user1.displayPosts();
      // Output:
      // Posts by John:
      // - My first post
      // - My second post
      
      post1.displayDetails();
      // Output:
      // Owner: John
      // Title: My first post
      // Content: Loremipsum dolor sit amet
      // Date: 2021-01-01
      // Likes: 2
      return {User,Post};
    }

    main();