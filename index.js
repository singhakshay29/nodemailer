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
                  <img src="" alt="USDT Logo" width="30" height="30" style="border-radius: 8px; vertical-align: middle;">
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
  const { formattedDate, payhub_data, merchant_data, gateway_data, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  const date = new Date(formattedDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const finalFormat = `${day} ${month} ${year}, ${weekday}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
    <div
  style="font-family: 'General Sans','Segoe UI', sans-serif; margin: 0; padding: 0; background: #F8F8F8; color: #000;">
  <div style="height: 20px;"></div>
  <div style="max-width: 600px; background: #FFF; margin: 10px auto; border-radius: 12px; padding-top:15px">
    <table role="presentation" width="100%" style="height: 90px;">
      <tr>
        <td align="center" style="
      position: relative;
      padding: 10px 20px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    ">
          <img src="https://res.cloudinary.com/dbr9mrvja/image/upload/v1747657007/p_hzyjop.png" alt="PayHub Logo" />
        </td>
      </tr>
      <tr>
        <td align="center" style="
      padding: 10px 20px;
      font-weight: 600;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0%;
    ">
          ${finalFormat}
        </td>
      </tr>
    </table>

    <div style="padding:  20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="height: 150px; margin-bottom: 10px; ">
        <tr>
          <td align="center" valign="middle">
            <div style="font-size: 40px; font-weight: 600; line-height: 100%; margin-bottom: 20px;">
              <strong>₹${formatNumber(payhub_data)}</strong>
            </div>
            <div style="font-size: 24px; font-weight: 500;line-height: 1.2;color: #00000099;">
              Daily Volume
            </div>
          </td>
        </tr>
      </table>
      <table width="100%" cellpadding="0" cellspacing="0"
        style="border: 2px solid #eee; border-radius: 10px; margin-top: 30px; margin-bottom: 30px;">
        <tr>
          <th align="left" style="padding: 10px; font-weight: 600;font-size: 18px;">MERCHANTS</th>
          <th align="right" style="padding: 10px; font-weight: 600;font-size: 18px;">VOLUME (₹)</th>
        </tr>
        <tr>
          <td colspan="2" style="padding: 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-top: 1px solid #0000001A; line-height: 0; font-size: 0;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
        ${merchant_data
          .filter((item) => item.yesterday > 0)
          .map(
            (item) => `
        <tr>
          <td style="padding: 8px;font-weight: 500;font-size: 16px;">${(
            item.business_name || "NA"
          ).toUpperCase()}</td>
          <td align="right" style="padding: 8px;font-weight: 500;font-size: 16px;">₹${formatNumber(
            item.yesterday
          )}</td>
        </tr>
        `
          )
          .join("")}
      </table>
      <table width="100%" cellpadding="0" cellspacing="0"
        style="border: 2px solid #eee; border-radius: 10px; margin-bottom: 30px;">
        <tr>
          <th align="left" style="padding: 10px; font-weight: 600;font-size: 18px;">Payment Gateway</th>
          <th align="right" style="padding: 10px; font-weight: 600;font-size: 18px;">VOLUME (₹)</th>
        </tr>
        <tr>
          <td colspan="2" style="padding: 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-top: 1px solid #0000001A; line-height: 0; font-size: 0;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
        ${gateway_data
          .map((item) => {
            if (item.yesterday > 0) {
              return `
        <tr>
          <td style="padding: 8px; text-align: left;font-weight: 500;font-size: 16px;">${(
            item.gatewayName || "NA"
          ).toUpperCase()}</td>
          <td style="padding: 8px; text-align: right;font-weight: 500;font-size: 16px;">${
            formatNumber(item.yesterday) || 0
          }</td>
        </tr>
        `;
            }
            return "";
          })
          .join("")}
      </table>
      <div style="text-align: center; margin-top: 30px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #007bff; border-radius: 10px;">
          <a href="${url}"
            style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; font-size: 20px; display: inline-block;">Download
            Full Report</a>
        </table>
      </div>
    </div>

  </div>
  <div style="height: 20px;"></div>
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
app.post("/invitation", async (req, res) => {
  const { formattedDate, payhub_data, merchant_data, gateway_data, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Invitation",
    text: ``,
    html: `
    <table width="100%" cellpadding="0" cellspacing="0">
     <div style="margin:0; padding:0; font-family:General Sans,'Segoe UI', sans-serif; background-color:#f5f5f5; color:#000;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
      <tr>
        <td>
          <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 700px; margin: 0 auto;">
            <tr>
              <td style="position: relative; background: linear-gradient(to right, #111111, #383838); padding: 20px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
                <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/payhubWhite_ivid3r.png" alt="PayHub Logo" style="max-width: 140px; display: block; color: #ffffff;">
              </td>
            </tr>
            <tr>
              <td style="background-color: #ffffff; padding: 40px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
                <h2 style="margin-top: 0; font-size: 22px;">Welcome to PayHub, Akshay!</h2>

                <p style="font-size: 16px; line-height: 1.5;">
                  You’ve been invited to join the <strong>PayHub Admin Portal</strong> as a <strong>Level 1 Sub-Admin.</strong>
                </p>

                <p style="font-size: 16px; line-height: 1.5;">
                  You’ve been granted access to manage merchant accounts, payment gateways, and transaction tools within our secure admin portal.
                </p>

                <p style="font-size: 16px; line-height: 1.5;">
                  To get started, click the button below to set up your account:
                </p>

                <p style="margin: 20px 0;">
                   🔗
                  <a href="https://example.com/accept" style="color: #1a83ff; font-size: 16px; border-radius: 6px; display: inline-block;">
                    Accept Your Invitation
                  </a>
                </p>

                <p style="font-size: 16px; line-height: 1.5;">
                  If you weren’t expecting this invitation, you can safely ignore this email.
                </p>

                <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />

                <p style="font-size: 16px;">
                  We’re excited to have you on board!<br />
                </p>
                <strong>The PayHub Team</strong>

                <p style="font-size: 12px; color: #000;">
                  Need help? Contact us anytime at <a href="mailto:support@payhub.com" style="color: #1a83ff;">support@payhub.com</a>.
                </p>
              </td>
            </tr>
          </table>
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
