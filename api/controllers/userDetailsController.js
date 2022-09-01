import Users from "../models/UserModel.js";

//ALL USERS
export const getUsers = async (req, res) => {
  try {
    // const users = await Users.findAll({
    //   attributes: ["id", "username", "email", "userrole", "refresh_token"],
    // });
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//ONE USER
export const getUser = async (req, res) => {
  try {
    const users = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//UPDATE
export const updateUser = async (req, res) => {
  try {
    const users = await Users.update(
      {
        address: "452",
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // const users = await Users.findOrCreate(
    //   {
    //     where: {
    //       id: req.params.id,
    //     },
    //     defaults: {
    //       address: 'Technical Lead JavaScript'
    //     }
    //   }
    // );
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const deleteUser = async (req, res) => {
  try {
    const users = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
