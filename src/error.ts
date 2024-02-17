// ++++ unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Tarun";
// userName = userInput //ERROR, below will work
if (typeof userInput === "string") {
  userName = userInput;
}

// ++++++++ Never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);
