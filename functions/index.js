const functions = require("firebase-functions");
const admin = require("firebase-admin");
// SandGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "Sendgrid_Key"
);

admin.initializeApp();

const sendSendGridMail = async (snap) => {
  try {
    const docId = snap.id;
    const name = snap.data().name;
    const email = snap.data().email;
    const fname = name.split(" ")[0];
    let info = await sgMail
      .send({
        from: "DevFest India Team <no-reply@devfestindia.com>",
        dynamicTemplateData: { name: fname },
        to: email,
        templateId: "Your_Template_ID",
      })
      .then((res) => {
        console.log("Called");
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    admin
      .firestore()
      .collection("edata")
      .doc(docId)
      .update({
        status: "Email Sent",
        eventConfirmation: 'Email Sent'
      });
  } catch (e) {
    console.log(e);
  }
};

exports.sendConfirmationEmail = functions.firestore
  .document("edata/{id}")
  .onCreate((snap, context) => {
    sendSendGridMail(snap);
  });
