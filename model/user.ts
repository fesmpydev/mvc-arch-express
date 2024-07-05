const userAPI =
  process.env.USER_API || "https://jsonplaceholder.typicode.com/users";

export default class UserModel {
  static async getUsers() {
    const response = await fetch(userAPI);
    const data = await response.json();
    return data;
  }
}
