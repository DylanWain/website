const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone, url } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Form Submission from Find Places`,
        html: `
          <p><strong>Phone Number: ${phone}</strong></p>
          <p><strong>URL: ${url}</strong></p>
        `,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};
