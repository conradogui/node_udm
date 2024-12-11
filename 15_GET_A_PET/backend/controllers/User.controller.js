import User from "../models/User.js";
import bcrypt from "bcrypt"

export default class UserController {
  static async register(req, res) {
    const { name, email, phone, password, confirmpassword } = req.body;

    // Validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório" });
      return;
    }
    if (!phone) {
      res.status(422).json({ message: "O telefone é obrigatório" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "A seha é obrigatória" });
      return;
    }
    if (!confirmpassword) {
      res.status(422).json({ message: "A confirmação de seha é obrigatória" });
      return;
    }

    if (password !== confirmpassword) {
      res.status(422).json({
        message: "A senha e a confirmação de seha precisam ser iguais",
      });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(422).json({
        message: "Este e-mail já esta em uso!",
      });
      return;
    }

    // create a password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //create a user
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();
      res.status(201).json({
        message: "Usuário criado com sucesso!",
        newUser,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
