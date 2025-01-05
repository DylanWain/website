export async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone, url } = req.body;

    // Example: Using Nodemailer to send the email
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Replace with your email service (e.g., Gmail, SendGrid)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender's email
        to: process.env.RECIPIENT_EMAIL, // Your email address
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
}