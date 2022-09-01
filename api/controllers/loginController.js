import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export const Login = async (req, res) => {
//   try {
//     const user = await Users.findAll({
//       where: {
//         email: req.body.email,
//       },
//     });
//     res.send(user);
//     const match = await bcrypt.compare(req.body.password, user[0].password);
//     if (!match) return res.status(400).json({ msg: "Wrong Password" });
//     const userId = user[0].id;
//     const name = user[0].name;
//     const email = user[0].email;
//     const accessToken = jwt.sign(
//       { userId, name, email },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: "15s",
//       }
//     );
//     const refreshToken = jwt.sign(
//       { userId, name, email },
//       process.env.REFRESH_TOKEN_SECRET,
//       {
//         expiresIn: "1d",
//       }
//     );
//     await Users.update(
//       { refresh_token: refreshToken },
//       {
//         where: {
//           id: userId,
//         },
//       }
//     );
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });
//     res.json({ accessToken });
//   } catch (error) {
//     res.status(404).json({ msg: "Email not found" });
//   }
// };

export const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login email---- " + email);
  try {
    const userEmail = await Users.findOne({
      where: {
        email: email,
      },
    });
    const user = await Users.findAll({
      where: {
        email: email,
      },
    });

    // console.log("+++++++++" + user);
    if (userEmail === null)
      return res.json({ message: "Wrong Password or Email" });
    // res.send(user);
    // res.send(password);
    // res.send(user[0].password);
    const match = await bcrypt.compare(password, user[0].password);
    // res.send(match);
    if (!match) return res.json({ message: "Wrong Password or Email" });
    const userId = user[0].id;
    const username = user[0].name;
    const mail = user[0].email;
    const userrole = user[0].userrole;
    const city = user[0].city;
    const town = user[0].town;
    const address = user[0].address;
    const phone_number = user[0].phone_number;

    // res.send(mail);
    //id will be the decoded id in the verify token
    const accessToken = jwt.sign({ id: userId }, "SECRET_ACCESS", {
      expiresIn: "60s",
    });
    const refreshToken = jwt.sign({ id: userId }, "SECRET_REFRESH", {
      expiresIn: "86400s",
    });
    // res.json({ accessToken: accessToken });
    // res.send({ refreshToken: refreshToken });
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

    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    // res.json({ cookie: req.cookies.refreshToken });
    res.json({
      accessToken: accessToken,
      refresh_token: refreshToken,
      id: userId,
      email: mail,
      name: username,
      userrole: userrole,
      address,
      phone_number,
      city,
      town,
    });
  } catch (err) {
    // res.send({ message: "email is invalid" });
  }
};
