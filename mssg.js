//Do not alter the starter code.
function main() {
    class Message {
      sender;
      receiver;
      messageContent;
      static totalMessages = 0;
      static status = false;
  
      constructor(sender , receiver,messageContent){
          this.sender = sender;
          this.receiver = receiver;
          this.messageContent = messageContent;
          //Message.totalMessages +=1;
      }
      
  
      static recordMessage() {
        Message.totalMessages += 1;
      }
  
  static changeStatus() {
          Message.status = !Message.status;
          console.log(
            `The status has been changed to ${
              Message.status ? "online" : "offline"
            }`
          );
        }
  
      sendMessage(){
        console.log(
          `The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`
        );
        Message.recordMessage();
      }
  
      displayDetails(){
          console.log( 
        `
  Sender: ${this.sender}
  Receiver: ${this.receiver}
  Message: ${this.messageContent}
  Status: ${Message.status?"online":"offline"}
  Total Messages: ${Message.totalMessages}`);
      }
    }
  
    //Create your Message Class here with all the properties and methods
  
    Message.changeStatus();
    const myMessage = new Message("John", "Jane", "Hello");
    myMessage.sendMessage();
    myMessage.displayDetails();
  
    return Message;
  }
  
main();  