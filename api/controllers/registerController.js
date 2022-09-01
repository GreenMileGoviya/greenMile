import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const {
    username,
    email,
    password,
    confPassword,
    userrole,
    address,
    phone_number,
    city,
    town,
  } = req.body;
  if (password !== confPassword)
    return res.send({
      message: "Password and Confirm Password does not match",
    });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  if (hashPassword) {
    console.log("Successfull hashing");
  } else {
    console.log("Error in hashing");
  }

  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
      userrole: userrole,
      address: address,
      phone_number: phone_number,
      city: city,
      town: town,
    });
    res.send({ message: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};
