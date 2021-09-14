import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.Sendgrid_API || "");

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
    const msg: any = {
      to: req.body.emailAddress,
      subject: "Testing.....",
      from: {
        email: "sayurikamble123@gmail.com",
        name: "Sayuri",
      },
      templateId: "d-d00203c818ec4ee9a1598086f5213c10",
      dynamic_template_data: {
        user: "Coder",
      },
    };
    const data = await sgMail.send(msg);
    if (data[0].statusCode === 202) {
      res.status(200).json({ msg: "Mail Sent" });
    } else {
      console.log("errors");
    }
  }
}
