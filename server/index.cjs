const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

// Apply CORS middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact", (req, res) => {
  console.log("req.body", req.body);
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;

  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
            <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
