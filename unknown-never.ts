let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Bidemi";
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };  
}
generateError('An error occurred!', 500); 