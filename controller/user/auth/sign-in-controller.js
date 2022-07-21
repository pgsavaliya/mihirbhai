import { login } from "../../../services/user/auth/sign-in-services.js";

export async function userlogin(req, res) {
  try {
    const response = await login(req.body);
    //   res.send(response);

    if (response == "") {
      res.send("Data Not Found");
    } else {
      res.send(response);
    }
  } catch (error) {
    res.status(404).send(error || "something worng123");
  }
}
