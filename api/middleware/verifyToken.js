import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, "SECRET_ACCESS", (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    // res.send(req.userId);
    next();
  });
};

import Users from "../models/userModel.js";

export const isAdmin = async (req, res, next) => {
  const user = await Users.findAll({
    where: {
      //decoded id
      id: req.userId,
    },
  });
  if (user[0].userrole === "admin") {
    next();
    return;
  } else {
    res.send("Require Admin Role");
  }
  next();
};
export const isModerator = async (req, res, next) => {
  const user = await Users.findAll({
    where: {
      id: req.userId,
    },
  });

  //   res.send(user);
  //   res.send(user[0].userrole);
  next();
};

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  Users.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.send({
        message: "Failed! Username is already in use!",
      });
      return;
    }
    // Email
    Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.send({
          message: "Failed! Email is already in use!",
        });
        return;
      }
      next();
    });
  });
};
