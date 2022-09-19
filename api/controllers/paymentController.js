import Payments from "../models/paymentModel.js";

//Payment SAVE
export const savePayment = async (req, res) => {
  try {
    const newPayments = await Payments.create(req.body);
    res.status(201).json(newPayments);
  } catch (error) {
    res.status(500).json(error);
  }
};

//ALL Payments
export const getPayments = async (req, res) => {
  try {
    const payments = await Payments.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ONE Payment
export const getPayment = async (req, res) => {
  try {
    const payments = await Payments.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE
export const updatePayment = async (req, res) => {
  try {
    const payments = await Payments.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE
export const deletePayment = async (req, res) => {
  try {
    const payments = await Payments.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json("Payment has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};
