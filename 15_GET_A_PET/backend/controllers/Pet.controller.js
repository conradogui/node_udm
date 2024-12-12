import Pet from "../models/Pet.js";

//helpers
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";

export default class PetController {
  //create a pet
  static async create(req, res) {
    const { name, age, weight, color } = req.body;

    const images = req.files

    const avaliable = true;

    // images uploads

    // validation
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    }
    if (!age) {
      res.status(422).json({ message: "A idade é obrigatória!" });
      return;
    }
    if (!weight) {
      res.status(422).json({ message: "O peso é obrigatório!" });
      return;
    }
    if (!color) {
      res.status(422).json({ message: "A cor é obrigatória!" });
      return;
    }
    if (images.length === 0) {
        res.status(422).json({ message: "A imagem é obrigatória!" });
        return;
      }

    // get pet owner
    const token = getToken(req);
    const user = await getUserByToken(token);

    // create a pet
    const pet = new Pet({
      name,
      age,
      weight,
      color,
      avaliable,
      images: [],
      user: {
        _id: user._id,
        name: user.name,
        image: user.image,
        phone: user.phone,
      },
    });

    images.map((image) => {
        pet.images.push(image.filename);
    })

    try {
      const newPet = await pet.save();
      res.status(201).json({
        message: "Pet cadastrado com sucesso!",
        newPet,
      });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}