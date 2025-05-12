require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/success-Payment-email", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Confirmation: Successful Transaction",
    text: `Your transaction Successful completed.`,
    html: `
     <div style="font-family: Figtree, sans-serif; margin: 0; padding: 0;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; background-color: #ffffff !important; border-radius: 12px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); text-align: center; border: 1px solid #ddd;" bgcolor="#ffffff">
        
        <tr>
          <td style="background-image: url('https://res.cloudinary.com/dbr9mrvja/image/upload/v1742885141/ocxzjfcdcecgxgmlvcvm.jpg'); background-size: cover; background-position: center;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td align="center" style="background-color: rgba(0, 0, 0, 0.6) !important; padding: 15px; backdrop-filter: blur(10px) !important;">
                  <img src="https://res.cloudinary.com/dbr9mrvja/image/upload/v1742885169/eygnaio0rgsjsxkjxbcx.jpg" alt="USDT Logo" width="30" height="30" style="border-radius: 8px; vertical-align: middle;">
                  <h2 style="display: inline-block; margin: 0; font-size: 18px; color: white !important;">USDT Marketplace</h2>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr>
          <td style="padding: 15px; text-align: center;">
            <h3 style="color: #6BA401 !important; font-size: 16px; font-weight: 700; margin: 10px 0;">Transaction Successfully Processed 🎉</h3>
            <p style="color: #555 !important; font-size: 14px; margin: 5px 0;">Your recent transaction has been completed successfully.</p>
          </td>
        </tr>

        <tr>
          <td style="background-color: #f3f8e9 !important; padding: 12px; border-radius: 8px; text-align: left;" bgcolor="#f3f8e9">
            <h4 style="text-align: center; font-size: 16px; font-weight: bold; margin: 10px 0;">Transaction Details</h4>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="5" border="0" style="font-size: 14px; color: #555 !important;">
              <tr><td><b>Transaction ID:</b></td><td>1c9d0e5d-7bd7-40ea-b778-50a843b94a1d</td></tr>
              <tr><td><b>Amount Paid:</b></td><td>98.25 INR</td></tr>
              <tr><td><b>Crypto Received:</b></td><td>1.19 USDT</td></tr>
              <tr><td><b>Blockchain:</b></td><td>TRC20</td></tr>
              <tr><td><b>Transaction Hash:</b></td><td>5a8f3817af2446afd7a1abe25c457f93</td></tr>
              <tr><td><b>Status:</b></td><td><b>Successful 🎉</b></td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding: 15px; text-align: left;">
            <p style="font-size: 16px; font-weight: 600; margin: 5px 0;">Need help?</p>
            <p style="color: #00000099 !important; margin: 5px 0;">
              If you have any questions or need assistance, reach out
              <a href="mailto:support@usdtmarketplace.com" style="color: #007bff !important; text-decoration: none;">support@usdtmarketplace.com</a>.
            </p>
            <p style="color: #00000099 !important; font-weight: 500; margin: 5px 0;">Thank you for choosing <b>USDT Marketplace!</b> 🚀</p>
          </td>
        </tr>
      </table>
    </div>

    <style>
      @media (prefers-color-scheme: dark) {
        body, table {
          background-color: #ffffff !important;
          color: #000000 !important;
        }
        a {
          color: #007bff !important;
        }
      }
    </style>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/failed-Payment-email", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Transaction Failed ",
    text: `Your recent transaction has been Failed.`,
    html: `
       <div style="font-family: Figtree, sans-serif; margin: 0; padding: 0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; background-color: #ffffff !important; border-radius: 12px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); text-align: center; border: 1px solid #ddd;" bgcolor="#ffffff">
    
    <tr>
      <td style="background-image: url('https://res.cloudinary.com/dbr9mrvja/image/upload/v1742885141/ocxzjfcdcecgxgmlvcvm.jpg'); background-size: cover; background-position: center;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center" style="background-color: rgba(0, 0, 0, 0.6) !important; padding: 15px; backdrop-filter: blur(10px) !important;">
              <img src="https://res.cloudinary.com/dbr9mrvja/image/upload/v1742885169/eygnaio0rgsjsxkjxbcx.jpg" alt="USDT Logo" width="30" height="30" style="border-radius: 8px; vertical-align: middle;">
              <h2 style="display: inline-block; margin: 0; font-size: 18px; color: white !important;">USDT Marketplace</h2>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <tr>
      <td style="padding: 15px; text-align: center;">
        <h3 style="color: #E10E0E !important; font-size: 16px; font-weight: 700; margin: 10px 0;">Transaction Failed 👎</h3>
        <p style="color: #555 !important; font-size: 14px; margin: 5px 0;">Your recent transaction could not be processed.</p>
      </td>
    </tr>

    <tr>
      <td style="background-color: #fce4e4 !important; padding: 12px; border-radius: 8px; text-align: left;" bgcolor="#fce4e4">
        <h4 style="text-align: center; font-size: 16px; font-weight: bold; margin: 10px 0;">Transaction Details</h4>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="5" border="0" style="font-size: 14px; color: #555 !important;">
          <tr><td><b>Transaction ID:</b></td><td>1c9d0e5d-7bd7-40ea-b778-50a843b94a1d</td></tr>
          <tr><td><b>Amount Paid:</b></td><td>98.25 INR</td></tr>
          <tr><td><b>Crypto Attempted:</b></td><td>1.19 USDT</td></tr>
          <tr><td><b>Blockchain:</b></td><td>TRC20</td></tr>
          <tr><td><b>Transaction Hash:</b></td><td>5a8f3817af2446afd7a1abe25c457f93</td></tr>
          <tr><td><b>Status:</b></td><td><b>Failed</b></td></tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 15px; text-align: left;">
        <p style="font-size: 16px; font-weight: 600; margin: 5px 0;">Need help?</p>
        <p style="color: #00000099 !important; margin: 5px 0;">
          If you have any questions or need assistance, reach out
          <a href="mailto:support@usdtmarketplace.com" style="color: #007bff !important; text-decoration: none;">support@usdtmarketplace.com</a>.
        </p>
        <p style="color: #00000099 !important; font-weight: 500; margin: 5px 0;">Thank you for choosing <b>USDT Marketplace!</b> 🚀</p>
      </td>
    </tr>
  </table>
</div>

<style>
  @media (prefers-color-scheme: dark) {
    body, table {
      background-color: #ffffff !important;
      color: #000000 !important;
    }
    a {
      color: #007bff !important;
    }
  }
</style>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/otp", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Transaction Failed ",
    text: `Your recent transaction has been Failed.`,
    html: `
      <div style="font-family: Figtree, sans-serif; margin: 0; padding: 0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); text-align: center; border: 1px solid #ddd;">
    
    <!-- Header Section -->
    <tr>
      <td style="background-image: url('https://res.cloudinary.com/dbr9mrvja/image/upload/v1742885141/ocxzjfcdcecgxgmlvcvm.jpg'); background-size: cover; background-position: center;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center" style="background-color: rgba(0, 0, 0, 0.6); padding: 15px;">
              <img src="https://res.cloudinary.com/dbr9mrvja/image/upload/v1742885169/eygnaio0rgsjsxkjxbcx.jpg" alt="USDT Logo" width="30" height="30" style="border-radius: 8px; vertical-align: middle;">
              <h2 style="display: inline-block; margin: 0; font-size: 18px; color: white;">USDT Marketplace</h2>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    
    <!-- Greeting & OTP Message -->
    <tr>
      <td style="padding: 20px; text-align: left;">
        <p style="color: #000000; font-size: 16px; font-weight: 500; margin-bottom: 0;">Dear User,</p>
        <p style="color: #000000; font-size: 16px; font-weight: 500; margin-top: 5px;">Please enter the below OTP to log in to your USDT Marketplace account.</p>
      </td>
    </tr>

    <!-- OTP Code -->
    <tr>
      <td style="padding: 20px; text-align: left;">
        <p style="color: #000000; font-size: 24px; font-weight: 600; margin: 0; display: inline-block; padding: 10px 20px; border-radius: 8px;">0346</p>
      </td>
    </tr>

    <!-- OTP Validity -->
    <tr>
      <td style="padding: 10px; text-align: left;">
        <p style="color: #000000; font-size: 16px; font-weight: 500;">Note: This OTP is valid for 10 minutes.</p>
      </td>
    </tr>

    <!-- Signature -->
    <tr>
      <td style="padding: 10px; text-align: left;">
        <p style="color: #000000; font-size: 16px; margin: 0; font-weight: 500;">Best regards,</p>
        <p style="color: #000000; font-size: 16px; margin: 0; font-weight: 500;">The USDT Marketplace Team</p>
      </td>
    </tr>

    <!-- Support Section -->
    <tr>
      <td style="padding: 15px; text-align: left;">
        <p style="font-size: 16px; font-weight: 600; margin: 5px 0;">Need help?</p>
        <p style="color: #666666; margin: 5px 0;">
          If you have any questions or need assistance, reach out
          <a href="mailto:support@usdtmarketplace.com" style="color: #007bff; text-decoration: none;">support@usdtmarketplace.com</a>.
        </p>
        <p style="color: #666666; font-weight: 500; margin: 5px 0;">Thank you for choosing <b>USDT Marketplace!</b> 🚀</p>
      </td>
    </tr>
  </table>
</div>

      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/dailyReport", async (req, res) => {
  const { formattedDate, payhub_data, merchant_data, gateway_data, url }=req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : '0');
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
    <div style="font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; background: #fff; color: #000;">
      <div style="max-width: 700px; margin: 40px auto; padding: 20px;">

        <!-- Header -->
        <div style="text-align: left; margin-bottom: 30px;">
          <div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Daily Transaction Report</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
            <tr>
              <td style="font-size: 14px; color: #555;">${formattedDate}</td>
              <td align="right" style="font-size: 14px;">
               Total Volume:  
              </td>
              <tr>
              <td align="left" style="font-size: 14px;">
              </td>
               <td align="right" style="font-size: 14px;">
              <strong>₹${formatNumber(payhub_data)}</strong>
              </td>
              </tr>
            </tr>
          </table>
        </div>
      <hr style="border: 1px solid #00000033; margin: 10px 0;" />

        <!-- Merchants Section -->
        <h3 style="font-size: 16px; font-weight: 600; margin: 20px 0 8px;">MERCHANTS</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border: 2px solid #eee; border-radius: 10px; margin-bottom: 30px;">
          <tr>
            <th align="left" style="padding: 10px; font-weight: 600;">MERCHANT</th>
            <th align="right" style="padding: 10px; font-weight: 600;">VOLUME (₹)</th>
          </tr>
          ${merchant_data
            .filter(item => item.yesterday > 0)
            .map(item => `
              <tr>
                <td style="padding: 8px;">${(item.business_name || "NA").toUpperCase()}</td>
                <td align="right" style="padding: 8px;">₹${formatNumber(item.yesterday)}</td>
              </tr>
            `)
            .join('')}
        </table>

        <!-- Gateways Section -->
         <h3 style="color: #444; text-transform: uppercase; font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-top: 30px;font-size: 16px">Gateways</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${gateway_data
              .map((item) => {
                if (item.yesterday > 0) {
                  return `
                    <tr>
                      <td style="padding: 8px; text-align: left;">${(item.gatewayName || "NA").toUpperCase()}</td>
                      <td style="padding: 8px; text-align: right;">${formatNumber(item.yesterday) || 0}</td>
                    </tr>
                  `;
                }
                return ''; // Skip rows with no data
              })
              .join('')}
          </table>

        <!-- Download Button -->
        <div style="text-align: center; margin-top: 30px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #007bff; border-radius: 10px;">
          <a href="${url}" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-size: 16px; display: inline-block;">Download Full Report</a>
        </table>
        </div>
      </div>
    </div>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
