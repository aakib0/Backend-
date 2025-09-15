const register = (req, res) => {
  // data {email password}
  // validate data
  // check in db user exist or not
  // if user is existed then throw response
  // create user in db
  // verification token banaya
  // save ther token in db
  //user email send krenge
  // save db and send response

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email and password",
      success: false,
    });
  }

};

export {
  register, // this is named export
};

// const  myController = {
//     register : register,
// }

// console.log(myController.register);

// export default myController
