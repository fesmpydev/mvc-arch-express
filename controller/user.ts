import { Request, Response } from "express";
import UserModel from "../model/user";

export default class UserController {
  static async getUsers(_: Request, res: Response) {
    const users = await UserModel.getUsers();
    res.render("user", { users });
  }
}
