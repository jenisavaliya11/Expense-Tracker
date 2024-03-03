const mailer = require("nodemailer");


const sendMail = async (to, subject, text) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "jenisha1154@gmail.com",
      pass: "kmlluxcwdntgjqlr",
    },
  });

  const mailOptions = {
    from: "jenisha1154@gmail.com",
    to: to,
    subject: subject,
    text: text,
    html: `
            <h1>Hello....</h1>
        `,
    attachments: [
      {
        filename: "jeni.jpg",
        path: "C:\\EXPENSE MANAGER\\NODEJS\\image\\jeni.jpg",
      },

    ],
  };

  const res = await transporter.sendMail(mailOptions);
  console.log(res);
  return res;
};
// sendMail("sujalnayak1504@gmail.com", "Test Mail", "This is test mail from nodejs")
module.exports = {sendMail}