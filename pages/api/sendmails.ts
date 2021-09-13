import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SendGrid_API || "");

type Data = {
  msg: any;
};
type Error = {
  error: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method === "POST") {
    console.log(req.body.emailAddress);
    const msg: any = {
      to: req.body.emailAddress,
      subject: "Testing.....",
      from: {
        email: "sayurikamble123@gmail.com",
        name: "Sayuri",
      },
      text: "Still Testing...",
    };
    const data = await sgMail.send(msg);
    if (data[0].statusCode === 202) {
      res.status(200).json({ msg: "Mail Sent" });
    } else {
      console.log("errors");
    }
  }
}