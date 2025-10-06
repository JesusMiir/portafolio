type NewUser = {
  username: string;
  password: string;
};

export function validateNewUser(userInput: NewUser) {
  if (typeof userInput.username !== "string") throw {};
}
