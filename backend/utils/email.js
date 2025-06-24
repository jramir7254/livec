const sendEmail = async ({ to, subject, body }) => {
  console.log(`
  📬 Email Sent
  To: ${to}
  Subject: ${subject}
  ---------------------
  ${body}
  `);
};

export default sendEmail;
