import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login email---- " + email);
  try {
    //find the user in users table
    const userEmail = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (userEmail === null)
      return res.json({ message: "Wrong Password or Email" });

    const match = await bcrypt.compare(password, userEmail.password);
    // res.send(match);
    if (!match) return res.json({ message: "Wrong Password or Email" });
    const userId = userEmail.id;

    // const accessToken = jwt.sign({ id: userId }, "SECRET_ACCESS", {
    //   expiresIn: "60s",
    // });
    const accessToken = jwt.sign(
      {
        id: userId,
      },
      process.env.JWT_SEC,
      { algorithm: "HS256", expiresIn: "3d" }
    );
    const refreshToken = jwt.sign({ id: userId }, "SECRET_REFRESH", {
      expiresIn: "86400s",
    });

    await Users.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    const updateUser = await Users.findOne({
      where: {
        id: userId,
      },
    });

    const response = { ...updateUser.dataValues, accessToken: accessToken };
    res.status(200).json(response);
  } catch (err) {
    // res.send({ message: "email is invalid" });
    res.status(500).json(err);
  }
};

//register
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
    // console.log(error);
    res.status(500).json(error);
  }
};
