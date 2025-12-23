require("dotenv").config();
const moment = require("moment-timezone");
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
//usdt
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
//usdt
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
//usdt
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
//payins
app.post("/dailyReport", async (req, res) => {
  const { formattedDate, payhub_data, merchant_data, gateway_data, url } =
    req.body;
  console.log(formattedDate);
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : '0');

  // Parse with moment using the correct format
  const date = moment.tz(formattedDate, 'DD-MM-YYYY', 'Asia/Kolkata'); // or any timezone you prefer
  
  // Format the date
  const finalFormat = date.format('D MMMM YYYY, dddd');
  console.log(finalFormat); 
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com,",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
   <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif; margin: 0; padding: 0; color: #000;">
    <style>
      body, table, td, a, span, div {
        -webkit-text-size-adjust: none !important;
        -ms-text-size-adjust: none !important;
      }
  
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      }
    </style>
  
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #ffffff; border-radius: 12px;" class="container">
          <tr>
            <td style="padding: 0 20px;" class="container-padding">
             <table role="presentation" width="100%" style="height: 90px;">
  <tr>
    <td align="left" style="padding: 10px 0px; border-top-left-radius: 12px;">
      <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png" alt="PayHub Logo" style="display: block; width: auto; height: 40px; max-height: 40px; line-height: 1; border: 0;" />
    </td>
    <td align="right" style="padding: 10px 0px; border-top-right-radius: 12px; font-weight: 600; font-size: 20px; line-height: 100%; letter-spacing: 0%;">
      ${finalFormat}
    </td>
  </tr>
</table>
  
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;margin-bottom: 10px; margin-top: 10px; padding-top: 30px;background-color:#eee;border-radius: 10px;" >
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="font-size: 40px; font-weight: 600; line-height: 100%;">
                          <strong>₹${formatNumber(payhub_data)}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding-top: 20px; padding-bottom: 20px;font-size: 18px; font-weight: 500; line-height: 1.2; color: #00000099;">
                          Daily PayIn Volume
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
  
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; border: 2px solid #eee; border-radius: 10px; margin-top: 30px; margin-bottom: 30px;">
                <tr>
                  <th align="left" style="padding: 10px; font-weight: 600; font-size: 18px;">MERCHANTS</th>
                  <th align="right" style="padding: 10px; font-weight: 600; font-size: 18px;">VOLUME</th>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr><td style="border-top: 1px solid #0000001A; line-height: 0; font-size: 0;">&nbsp;</td></tr>
                    </table>
                  </td>
                </tr>
                ${merchant_data
                  .filter((item) => item.yesterday > 0)
                  .map((item) => `
                    <tr>
                      <td style="padding: 8px; font-weight: 500; font-size: 16px;">${(item.business_name || "NA").toUpperCase()}</td>
                      <td align="right" style="padding: 8px; font-weight: 500; font-size: 16px;">₹${formatNumber(item.yesterday)}</td>
                    </tr>
                  `).join("")}
              </table>
  
  
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; border: 2px solid #eee; border-radius: 10px; margin-bottom: 30px;" >
                <tr>
                  <th align="left" style="padding: 10px; font-weight: 600; font-size: 18px;">GATEWAYS</th>
                  <th align="right" style="padding: 10px; font-weight: 600; font-size: 18px;">VOLUME</th>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr><td style="border-top: 1px solid #0000001A; line-height: 0; font-size: 0;">&nbsp;</td></tr>
                    </table>
                  </td>
                </tr>
                ${gateway_data
                  .map((item) => {
                    if (item.yesterday > 0) {
                      return `
                        <tr>
                          <td style="padding: 8px; text-align: left; font-weight: 500; font-size: 16px;">${(item.gatewayName || "NA").toUpperCase()}</td>
                          <td style="padding: 8px; text-align: right; font-weight: 500; font-size: 16px;">₹${formatNumber(item.yesterday) || 0}</td>
                        </tr>
                      `;
                    }
                    return "";
                  }).join("")}
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #007bff; border-radius: 10px;">
                <tr>
                  <td align="center" style="padding: 12px 20px;">
                    <a href="${url}"
                       style="display: inline-block; background-color: #007bff; text-decoration: none; border-radius: 6px;">
                      <span style="color: #ffffff !important; font-size: 20px; font-weight: 500; font-family: 'Segoe UI', sans-serif; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-style-textfill-type:solid; mso-style-textfill-fill-color:#ffffff;">
                        Download Full Report
                      </span>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  
    <tr>
      <td>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td height="20" style="line-height: 20px; font-size: 0;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
{/*<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif; margin: 0; padding: 0; color: #000;">
<style>
  body, table, td, a, span, div {
    -webkit-text-size-adjust: none !important;
    -ms-text-size-adjust: none !important;
  }

  @media only screen and (max-width: 600px) {
    .container {
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
</style>

<tr>
  <td>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td height="20" style="line-height: 20px; font-size: 0;">&nbsp;</td>
      </tr>
    </table>
  </td>
</tr>

<tr>
  <td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #ffffff; border-radius: 12px;" class="container">
      <tr>
        <td style="padding: 0 20px;" class="container-padding">
          <table role="presentation" width="100%" style="height: 90px;">
            <tr>
              <td align="center" style="padding: 10px 20px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
                <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png" alt="PayHub Logo" style="display: block; width: auto; height: 40px; max-height: 40px; line-height: 1; border: 0;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 10px 20px; font-weight: 600; font-size: 20px; line-height: 100%; letter-spacing: 0%;">
                ${finalFormat}
              </td>
            </tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;margin-bottom: 10px;margin-top: 10px; padding-top: 20px;" >
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="font-size: 40px; font-weight: 600; line-height: 100%;">
                      <strong>₹${formatNumber(payhub_data)}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 20px; padding-bottom: 20px;font-size: 24px; font-weight: 500; line-height: 1.2; color: #00000099;">
                      Daily Volume
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; border: 2px solid #eee; border-radius: 10px; margin-top: 30px; margin-bottom: 30px;">
            <tr>
              <th align="left" style="padding: 10px; font-weight: 600; font-size: 18px;">MERCHANTS</th>
              <th align="right" style="padding: 10px; font-weight: 600; font-size: 18px;">VOLUME</th>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="border-top: 1px solid #0000001A; line-height: 0; font-size: 0;">&nbsp;</td></tr>
                </table>
              </td>
            </tr>
            ${merchant_data
              .filter((item) => item.yesterday > 0)
              .map((item) => `
                <tr>
                  <td style="padding: 8px; font-weight: 500; font-size: 16px;">${(item.business_name || "NA").toUpperCase()}</td>
                  <td align="right" style="padding: 8px; font-weight: 500; font-size: 16px;">₹${formatNumber(item.yesterday)}</td>
                </tr>
              `).join("")}
          </table>


          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; border: 2px solid #eee; border-radius: 10px; margin-bottom: 30px;" >
            <tr>
              <th align="left" style="padding: 10px; font-weight: 600; font-size: 18px;">GATEWAYS</th>
              <th align="right" style="padding: 10px; font-weight: 600; font-size: 18px;">VOLUME</th>
            </tr>
            <tr>
              <td colspan="2" style="padding: 0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="border-top: 1px solid #0000001A; line-height: 0; font-size: 0;">&nbsp;</td></tr>
                </table>
              </td>
            </tr>
            ${gateway_data
              .map((item) => {
                if (item.yesterday > 0) {
                  return `
                    <tr>
                      <td style="padding: 8px; text-align: left; font-weight: 500; font-size: 16px;">${(item.gatewayName || "NA").toUpperCase()}</td>
                      <td style="padding: 8px; text-align: right; font-weight: 500; font-size: 16px;">₹${formatNumber(item.yesterday) || 0}</td>
                    </tr>
                  `;
                }
                return "";
              }).join("")}
          </table>
          
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #007bff; border-radius: 10px;">
            <tr>
              <td align="center" style="padding: 12px 20px;">
                <a href="${url}"
                   style="display: inline-block; background-color: #007bff; text-decoration: none; border-radius: 6px;">
                  <span style="color: #ffffff !important; font-size: 20px; font-weight: 500; font-family: 'Segoe UI', sans-serif; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-style-textfill-type:solid; mso-style-textfill-fill-color:#ffffff;">
                    Download Full Report
                  </span>
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>

<tr>
  <td>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td height="20" style="line-height: 20px; font-size: 0;">&nbsp;</td>
      </tr>
    </table>
  </td>
</tr>
</table>*/}

//payouts

app.post("/today",async (req,res)=>{

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "akshay2898.as@gmail.com",
  subject: "Daily Transaction Report ",
  text: ``,
  html: `
<html>
   <head>
      <meta charset="UTF-8">
      <style>
         body, table, td, a, span, div {
         -webkit-text-size-adjust: none !important;
         -ms-text-size-adjust: none !important;
         }
         @media only screen and (max-width: 600px) {
         .container {
         width: 100% !important;
         padding-left: 0 !important;
         padding-right: 0 !important;
         }
         .column {
         display: block !important;
         margin-bottom: 20px !important;
         }
         .spacer {
         display: none !important;
         }
         .desktop-table {
         display: none !important;
         }
         .mobile-row {
         border: 1px solid #eee;
         border-radius: 10px;
         padding: 16px;
         margin-bottom: 10px;
         background-color: #fff;
         }
         .mobile-label {
         margin-bottom: 4px;
         }
         .mobile-value {
         font-size: 16px;
         color: #00000099;
         margin-bottom: 12px;
         }}
         @media only screen and (min-width: 601px) {
         .mobile-table {
         display: none !important;
         }
         }
      </style>
   </head>
   <body style="margin:0; padding:0; background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
         <tr>
            <td align="center">
               <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                  style="max-width: 1018px; background-color: #ffffff; border-radius: 12px; margin-top:10px;"
                  class="container ios-padding-fix">
                  <tr>
                     <td style="padding: 40px 20px;" class="container-padding">
                        <table width="100%" role="presentation" style="height: 90px;">
                           <tr>
                              <td align="left">
                                 <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png" alt="PayHub Logo"
                                    style="display: block; height: 40px; border: 0;" />
                              </td>
                              <td align="right" style="font-weight: 600; font-size: 20px; color: #000000;">
                                 
                              </td>
                           </tr>
                        </table>
                        <table width="100%" style="background-color:#0000000A; border-radius: 10px; margin: 20px 0;">
                           <tr>
                              <td align="center" style="padding: 20px 0;">
                                 <div style="font-size: 36px; font-weight: 600; color: #000000;">₹ {{offramp_volume}}
                                 </div>
                                 <div style="font-size: 24px; font-weight: 500; color: #00000099; padding-top: 10px;">Daily Offramp Volume</div>
                              </td>
                           </tr>
                        </table>
                        <table width="100%" role="presentation" style="margin: 20px 0; table-layout: fixed;">
                           <tr>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Total Users</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">{{total_users}}</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">New Users Today</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">{{total_arrived_user}}</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Transacting Users Today</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">{{distinct_user_count}}</div>
                              </td>
                           </tr>
                        </table>
                        <table width="100%" role="presentation" style="margin: 20px 0; table-layout: fixed;">
                           <tr>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Success Rate (Txn)</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">{{successfull_transaction_count}}</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Total KYC Completed</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">{{total_verified_users}}</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">New KYC Today</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">{{total_kyc_done_user}}</div>
                              </td>
                           </tr>
                        </table>
                        
                     </td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
   </body>
</html>

    `,
};

try {
  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: "Email sent successfully" });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});
app.post("/dailyPayout", async (req, res) => {
  const { formattedDate, payhub_data, merchant_data,gateway_data, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
 <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
   style="background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif; margin: 0; padding: 0; color: #000;">
   <tr>
      <td align="center">
         <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="max-width: 600px; background-color: #ffffff; border-radius: 12px; margin-top:10px;" class="container">
            <tr>
               <td style="padding: 0 20px;" class="container-padding">
                  <table role="presentation" width="100%" style="height: 90px;">
                     <tr>
                        <td align="left" style="padding: 10px 0px;">
                           <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png"
                              alt="PayHub Logo"
                              style="display: block; width: auto; height: 40px; max-height: 40px; border: 0;" />
                        </td>
                        
                        <td align="right"
                           style="padding: 10px 0px; font-weight: 600; font-size: 20px;">
                           ${formattedDate}
                        </td>
                     </tr>
                  </table>
                  <table width="100%" style="background-color:#0000000A; border-radius: 10px; margin: 20px 0;">
                     <tr>
                        <td align="center" style="padding: 20px 0;">
                           <div style="font-size: 40px; font-weight: 600;">₹${formatNumber(payhub_data)}</div>
                           <div style="font-size: 18px; font-weight: 500; color: #00000099; padding-top: 10px;">Daily Payout Volume</div>
                        </td>
                     </tr>
                  </table>
                  <table width="100%" style="border: 2px solid #0000001A; border-radius: 10px; margin-bottom: 30px;">
                              <tr>
                                 <th align="left" style="padding: 8px; font-weight: 700; font-size: 18px;">MERCHANTS</th>
                                 <th align="right" style="padding: 8px; font-weight: 700; font-size: 18px;">VOLUME</th>
                              </tr>
                              <tr><td colspan="3" style="border-top: 1px solid #0000001A;"></td></tr>
                              ${merchant_data
                              .filter(item => item.yesterday > 0)
                              .map(item => `
                                 <tr>
                                    <td style="padding: 8px; font-weight: 500; font-size: 16px;">${(item.business_name || "NA").toUpperCase()}</td>
                                    <td align="right" style="padding: 8px; font-weight: 500; font-size: 16px;">₹${formatNumber(item.yesterday)}</td>
                                 </tr>`).join('')}
                  </table>
                  <table width="100%" style="border: 2px solid #0000001A; border-radius: 10px; margin-bottom: 30px;">
                     <tr>
                        <th align="left" style="padding: 10px; font-weight: 600; font-size: 18px;">GATEWAYS</th>
                        <th align="right" style="padding: 10px; font-weight: 600; font-size: 18px;">VOLUME</th>
                     </tr>
                     <tr><td colspan="3" style="border-top: 1px solid #0000001A;"></td></tr>
                     ${gateway_data
                     .filter(item => item.yesterday > 0)
                     .map(item => `
                        <tr>
                           <td style="padding: 8px; font-weight: 500; font-size: 16px;">${(item.gatewayName || "NA").toUpperCase()}</td>
                           <td align="right" style="padding: 8px; font-weight: 500; font-size: 16px;">₹${formatNumber(item.yesterday)}</td>
                        </tr>`).join('')}
                  </table>

                  <!-- Download Button -->
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                     style="background-color: #007bff; border-radius: 10px; margin-bottom: 20px;">
                     <tr>
                        <td align="center" style="padding: 12px 20px;">
                           <a href="${url}"
                              style="color: #ffffff; font-size: 20px; font-weight: 500; text-decoration: none; font-family: 'Segoe UI', sans-serif;">
                              Download Full Report
                           </a>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </td>
   </tr>
</table>

      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/daily", async (req, res) => {
  const { formattedDate, payhub_data, merchant_data, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif; margin: 0; padding: 0; color: #000;">
   <style>
      body, table, td, a, span, div {
      -webkit-text-size-adjust: none !important;
      -ms-text-size-adjust: none !important;
      }
      @media only screen and (max-width: 600px) {
      .container {
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      }
      }
   </style>
   <tr>
      <td align="center">
         <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; margin-top:10px;" class="container">
            <tr>
               <td style="padding: 0 20px;" class="container-padding">
                  <table role="presentation" width="100%" style="height: 90px;">
                     <tr>
                        <td align="left" style="padding: 10px 0px; border-top-left-radius: 12px;">
                           <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png" alt="PayHub Logo" style="display: block; width: auto; height: 40px; max-height: 40px; line-height: 1; border: 0;" />
                        </td>
                        <td align="right" style="padding: 10px 0px; border-top-right-radius: 12px; font-weight: 600; font-size: 20px; line-height: 100%; letter-spacing: 0%;">
                           ${formattedDate}
                        </td>
                     </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;margin-bottom: 10px;margin-top: 10px; padding-top: 20px;background-color:#0000000A;border-radius: 10px;" >
                     <tr>
                        <td align="center">
                           <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                 <td align="center" style="font-size: 40px; font-weight: 600; line-height: 100%;">
                                    ₹${formatNumber(payhub_data)}
                                 </td>
                              </tr>
                              <tr>
                                 <td align="center" style="padding-top: 20px; padding-bottom: 20px;font-size: 18px; font-weight: 500; line-height: 1.2; color: #00000099;">
                                    Daily  Volume
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0"
                     style="max-width: 600px; border: 1px solid #0000001A; border-radius: 10px; margin-top: 30px; margin-bottom: 30px;">
                     <tr>
                        <td style="padding: 16px; padding-bottom:8px">
                           <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                 <th align="left" style="padding: 8px; font-weight: 600; font-size: 18px;">MERCHANT</th>
                                 <th align="right" style="padding: 8px; font-weight: 600; font-size: 18px;">VOLUME</th>
                              </tr>
                           </table>
                        </td>
                     </tr>
                     <tr>
                        <td style="padding: 0;">
                           <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                 <td style="border-top: 1px solid #0000001A; font-size: 0; line-height: 0; padding: 0;">&nbsp;</td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                     <tr>
                        <td style="padding: 16px; padding-top:8px">
                           <table width="100%" cellpadding="0" cellspacing="0">
                              ${merchant_data
                              .filter((item) => item.yesterday > 0)
                              .map((item) => `
                              <tr>
                                 <td style="padding: 8px; font-weight: 700; font-size: 16px; color: #00000099;">
                                    ${(item.business_name || "NA").toUpperCase()}
                                 </td>
                                 <td align="right" style="padding: 8px; font-weight: 500; font-size: 16px; color: #00000099;">
                                    ₹${formatNumber(item.yesterday)}
                                 </td>
                              </tr>
                              `).join("")}
                           </table>
                        </td>
                     </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #007bff; border-radius: 10px; margin-bottom:10px">
                     <tr>
                        <td align="center" style="padding: 12px 20px;">
                           <a href="${url}"
                              style="display: inline-block; background-color: #007bff; text-decoration: none; border-radius: 6px;">
                           <span style="color: #ffffff !important; font-size: 20px; font-weight: 500; font-family: 'Segoe UI', sans-serif; -webkit-text-size-adjust: none; -ms-text-size-adjust: none; mso-style-textfill-type:solid; mso-style-textfill-fill-color:#ffffff;">
                           Download Full Report
                           </span>
                           </a>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </td>
   </tr>
   <tr>
      <td>
         <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
               <td height="20" style="line-height: 20px; font-size: 0;">&nbsp;</td>
            </tr>
         </table>
      </td>
   </tr>
</table>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/email", async (req, res) => {
  const { formattedDate, summary, merchants, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body, table, td, a, span, div {
      -webkit-text-size-adjust: none !important;
      -ms-text-size-adjust: none !important;
    }

    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .column {
        display: block !important;
        margin-bottom: 20px !important;
      }
      .spacer {
        display: none !important;
      }
        .desktop-table {
      display: none !important;
    }

    .mobile-row {
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 10px;
      background-color: #fff;
    }

    .mobile-label {
      margin-bottom: 4px;
    }

    .mobile-value {
      font-size: 16px;
      color: #00000099;
      margin-bottom: 12px;
    }}
     @media only screen and (min-width: 601px) {
    .mobile-table {
      display: none !important;
    }
  }
  </style>
</head>
<body style="margin:0; padding:0; background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width: 1018px; background-color: #ffffff; border-radius: 12px; margin-top:10px;"
               class="container ios-padding-fix">
          <tr>
            <td style="padding: 40px 20px;" class="container-padding">

              <table width="100%" role="presentation" style="height: 90px;">
                <tr>
                  <td align="left">
                    <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png" alt="PayHub Logo"
                         style="display: block; height: 40px; border: 0;" />
                  </td>
                  <td align="right" style="font-weight: 600; font-size: 20px;">
                    ${formattedDate}
                  </td>
                </tr>
              </table>

              <table width="100%" role="presentation" style="margin: 20px 0; table-layout: fixed;">
                <tr>
                  <td class="column" style="padding: 16px; background-color: #eaf3ff; border-radius: 10px; text-align: center;">
                    <div style="font-size: 32px; font-weight: 700;">₹${formatNumber(summary.totalVolumeProcessed)}</div>
                    <div style="font-size: 18px; color: #666; padding-top: 4px;">Total Volume Processed</div>
                  </td>
                  <td class="spacer" style="width: 30px;"></td>
                  <td class="column" style="padding: 16px; background-color: #eaf3ff; border-radius: 10px; text-align: center;">
                    <div style="font-size: 32px; font-weight: 700;">93.89%</div>
                    <div style="font-size: 18px; color: #666; padding-top: 4px;">Average Success Rate</div>
                  </td>
                  <td class="spacer" style="width: 30px;"></td>
                  <td class="column" style="padding: 16px; background-color: #eaf3ff; border-radius: 10px; text-align: center;">
                    <div style="font-size: 32px; font-weight: 700;">₹${formatNumber(summary.settlementsProcessed)}</div>
                    <div style="font-size: 18px; color: #666; padding-top: 4px;">Settlements Processed</div>
                  </td>
                </tr>
              </table>

             
              <table width="100%" role="presentation" class="desktop-table" style="border: 1px solid #eee; border-radius: 10px;">
                <thead>
                  <tr style="background-color: #fff;">
                    <th align="left" style="padding: 8px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #eee;">Merchant</th>
                    <th align="center" style="padding: 8px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #eee;">Today’s Volume</th>
                    <th align="center" style="padding: 8px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #eee;">Successful Trans.</th>
                    <th align="center" style="padding: 8px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #eee;">Success Rate</th>
                    <th align="center" style="padding: 8px; font-size: 18px; font-weight: bold; border-bottom: 1px solid #eee;">Last Settlement</th>
                  </tr>
                </thead>
                <tbody>
                 ${merchants
                  .map((item) =>`
                  <tr>
                    <td style="padding: 8px; font-weight: 700; font-size: 16px; color: #00000099;">${(item.business_name || "NA").toUpperCase()}</td>
                    <td align="center" style="padding: 8px; font-size: 16px; color: #00000099;">₹${formatNumber(item.todaysVolume)}</td>
                    <td align="center" style="padding: 8px; font-size: 16px; color: #00000099;">${formatNumber(item.successfulTransactions)}</td>
                    <td align="center" style="padding: 8px; font-size: 16px; color: #00000099;">${formatNumber(item.successRate)}</td>
                    <td align="center" style="padding: 8px; font-size: 16px; color: #00000099;">₹${formatNumber(item.lastSettlement)}</td>
                  </tr>
                  `).join("")}
                </tbody>
              </table>
             <table width="100%" cellpadding="0" cellspacing="0" role="presentation" class="mobile-table" style="border: 1px solid #0000001A; border-radius: 10px;  margin-bottom: 10px;">
  ${merchants
    .map((item) => `
      <tr>
        <td style="padding: 10px; font-weight: 600; font-size: 16px; text-align: left; width: 50%;">Merchant</td>
        <td align="right" style="padding: 10px; font-size: 16px; color: #00000099; text-align: right; width: 50%;">${(item.business_name || "NA").toUpperCase()}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: 600; font-size: 16px; text-align: left;">Today’s Volume</td>
        <td style="padding: 10px; font-size: 16px; color: #00000099; text-align: right;">₹${formatNumber(item.todaysVolume)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: 600; font-size: 16px; text-align: left;">Successful Trans.</td>
        <td style="padding: 10px; font-size: 16px; color: #00000099; text-align: right;">${formatNumber(item.successfulTransactions)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: 600; font-size: 16px; text-align: left;">Success Rate</td>
        <td style="padding: 10px; font-size: 16px; color: #00000099; text-align: right;">${formatNumber(item.successRate)}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: 600; font-size: 16px; text-align: left;">Last Settlement</td>
        <td style="padding: 10px; font-size: 16px; color: #00000099; text-align: right;">₹${formatNumber(item.lastSettlement)}</td>
      </tr>
       <tr><td colspan="2" style="padding: 8px 0;"><hr style="border: 0; border-top: 1px solid #eee;"></td></tr>
    `)
    .join("")}
</table>




             
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                     style="background-color: #007bff; border-radius: 10px; margin-top: 30px;">
                <tr>
                  <td align="center" style="padding: 16px;">
                    <a href="${url}" style="text-decoration: none; display: inline-block; border-radius: 6px;">
                      <span style="color: #ffffff; font-size: 20px; font-weight: 500; font-family: 'Segoe UI', sans-serif;">
                        Download Full Report
                      </span>
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>

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
  const { formattedDate, payhub_data, merchant_data, gateway_data, url } = req.body ?? {
    formattedDate: "2025-10-14T12:00:00Z",
    payhub_data: {
      id: "PH12345",
      name: "PayHub Main Account",
      totalTransactions: 157,
      totalAmount: 128934.55,
      status: "active",
    },
    merchant_data: {
      id: "MRC45678",
      name: "Acme Retailers Pvt. Ltd.",
      email: "billing@acmeretailers.com",
      contact: "+91-9876543210",
      address: "45, MG Road, Bengaluru, India",
    },
    gateway_data: {
      id: "GW98765",
      name: "RazorPay",
      successRate: "98.7%",
      dailyVolume: 45900.25,
      currency: "INR",
    },
    url: "https://payhub.example.com/transactions/summary",
  };
  
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
//payhub
app.post("/lowBalance", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Invitation",
    text: ``,
    html: `
   <!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="color-scheme" content="light dark">
		<title>
			Payout Alert
		</title>
		<style>
			@media (prefers-color-scheme: dark) { body { background-color: #121212
			!important; color: #ffffff !important; } .email-container { background-color:
			#1c1c1c !important; color: #ffffff !important; } } @media only screen and
			(max-width: 600px) { .content-padding { padding: 30px 15px !important;
			} }
		</style>
	</head>
	<body style="margin:0; padding:0;  font-family: 'General Sans','Segoe UI', sans-serif; background-color: #ffffff; color: #000000;">
		<table width="100%" class="email-container" cellpadding="0" cellspacing="0"
		border="0" role="presentation" style="background-color: #f5f5f5;">
			<tr>
				<td align="center" style="padding: 0;">
					<table width="700" cellpadding="0" cellspacing="0" border="0" role="presentation"
					style="width: 100%; max-width: 700px;">
						<tr>
							<td style="padding: 0; margin: 0; ">
								<img src="https://res.cloudinary.com/dbr9mrvja/image/upload/v1749624174/Screenshot_2025-06-11_at_12.11.19_PM_fapgg8.png"
								alt="PayHub Logo" width="700" style="display: block; width: 100%; max-width: 700px; border: 0; line-height: 100%; vertical-align: middle; border-top-left-radius: 12px; border-top-right-radius: 12px;">
							</td>
						</tr>
						<tr>
							<td class="content-padding" style="background-color: #ffffff; padding: 30px;">
								<p style="margin-top: 0; font-size: 16px; line-height: 1.5;">
									Hi Admin,
								</p>
								<p style="font-size: 16px; font-weight: semibold; line-height: 1.5;">
									Akshay (Shakshay1101@gmail.com) has requested the following accesses in
									the PayHub Admin Dashboard.
								</p>
								<h3 style="font-size: 16px;  margin-top: 30px;">
									Request Details
								</h3>
								<table cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 16px; margin-bottom: 20px;">
									<tr>
										<td style="border-bottom: 1px solid #e0e0e0; text-align: left; padding: 8px 0;">
											Requested By :
										</td>
										<td style="border-bottom: 1px solid #e0e0e0; text-align: right; padding: 8px 0;">
											Akshay
										</td>
									</tr>
									<tr>
										<td style="border-bottom: 1px solid #e0e0e0; text-align: left; padding: 8px 0;">
											Email :
										</td>
										<td style="color: #d32f2f;font-weight: 500; border-bottom: 1px solid #e0e0e0; text-align: right; padding: 8px 0;">
											shakshay1101@gmail.com
										</td>
									</tr>
									<tr>
										<td style="border-bottom: 1px solid #e0e0e0; text-align: left; padding: 8px 0;">
											Requested Access :
										</td>
										<td style="border-bottom: 1px solid #e0e0e0; font-weight: 500;  text-align: right; padding: 8px 0;">
											Payin Read
										</td>
									</tr>
									<tr>
										<td style="text-align: left; padding: 8px 0;">
											Requested On :
										</td>
										<td style="text-align: right; padding: 8px 0; font-weight: 500; ">
											April 29, 2025 10:24 AM
										</td>
									</tr>
								</table>
								<p style="font-size: 16px; line-height: 1.5;">
									Please review this request and decide whether to grant the required access
									permissions.
								</p>
								<p style="margin: 20px 0;">
									🔗
									<a href="https://example.com/dashboard" style="color: #1a83ff; font-size: 16px;">
										Approve request from dashboard
									</a>
								</p>
								<hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;"
								/>
								<p style="font-size: 16px; line-height: 1.5;">
									If you have any questions or this request seems suspicious, kindly reach
									out to the Admin or support immediately.
								</p>
								<p style="font-size: 16px; margin-bottom: 5px;">
									Thank you,
								</p>
								<strong style="font-size: 16px;">
									The PayHub Team
								</strong>
								<p style="font-size: 12px;  margin-top: 30px;">
									Need help? Contact us anytime at
									<a href="mailto:support@payhub.com" style="color: #1a83ff;">
										support@payhub.com
									</a>
									.
								</p>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>

</html>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/otpverify", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "One-time verification ",
    text: `Your recent transaction has been Failed.`,
    html: `
   <style>
   @media only screen and (max-width: 600px) {
      .show-on-mobile {
         display: block !important;
         height: 1px !important;
      }

      .link-row {
         display: block !important;
         width: 100% !important;
      }

      .link-col {
         display: block !important;
         width: 100% !important;
         padding: 6px 0 !important;
      }
   }
</style>

<body style="margin: 0; padding: 0; background-color: #f8f8f8;">
   <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
      style="background-color: #f8f8f8;">
      <tr>
         <td align="center">
            <table cellpadding="0" cellspacing="0" border="0" width="100%"
               style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden;">

               <tr>
                  <td
                     style="background-image: url('https://usdt-marketplace.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-03-17+at+1.28.59+PM.jpeg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                     <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                           <td align="center" style="background-color: rgba(0, 0, 0, 0.6) !important; padding: 15px;">
                              <table cellpadding="0" cellspacing="0" border="0">
                                 <tr>
                                    <td align="center" valign="middle">
                                       <img
                                          src="https://usdt-marketplace.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-03-17+at+1.28.59+PM+(1).jpeg"
                                          width="36" height="36" alt="Logo"
                                          style="border-radius: 8px; vertical-align: middle;">
                                    </td>
                                    <td align="center" valign="middle" style="padding-left: 10px;">
                                       <span
                                          style="font-size: 18px; font-weight: 600; color: #ffffff; font-family: sans-serif;">USDT
                                          Marketplace</span>
                                    </td>
                                 </tr>
                              </table>
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>


               <tr>
                  <td
                     style="padding: 24px; font-family: sans-serif; font-size: 16px; color: #000000; line-height: 1.6; background-image: url('https://usdt-marketplace.s3.ap-south-1.amazonaws.com/watermark-bg.png'); background-size: 240px; background-position: right bottom; background-repeat: no-repeat;">
                     <p style="margin: 0 0 16px 0;">Dear User,</p>
                     <p style="margin: 0 0 16px 0;">A one-time verification code was requested for your account:</p>
                     <p style="font-size: 28px; font-weight: bold; margin: 0 0 16px 0;">{{otp}}</p>
                     <p style="margin: 0 0 4px 0;">This code is valid for the next 10 minutes.</p>
                     <p style="margin: 0 0 24px 0;">If you did not request this code, no further action is required.</p>

                     <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;">

                     <p style="margin: 0 0 6px 0; ">For assistance, contact:</p>
                     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                           <td align="left" style="padding: 0;">

                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" class="link-row"
                                 style="width: 100%;">
                                 <tr>
                                    <td class="link-col"
                                       style="padding: 0 10px 8px 0; font-family: sans-serif; font-size: 14px;">
                                       <a href="mailto:support@usdtmarketplace.com"
                                          style="color: #007bff; text-decoration: none;">support@usdtmarketplace.com</a>
                                    </td>
                                    <td class="link-col"
                                       style="padding: 0 0 8px 10px; font-family: sans-serif; font-size: 14px;">
                                       <a href="https://usdtmarketplace.com"
                                          style="color: #007bff; text-decoration: none;">https://usdtmarketplace.com</a>
                                    </td>
                                 </tr>
                              </table>

                           </td>
                        </tr>
                     </table>
                     <!-- Mobile-only HR using inline styles -->
                     <hr style="display: none; border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;"
                        class="show-on-mobile">


                     <p style="margin: 0 0 4px 0;">USDT Marketplace</p>
                     <p style="margin: 0 0 16px 0;">DLF Tower, New Delhi, India 110015</p>

                     <p style="font-size: 13px; margin: 0;">You are receiving this system email because an action was
                        initiated using your account credentials.</p>
                  </td>
               </tr>
            </table>
         </td>
      </tr>
   </table>
</body>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post("/dailyOfframpVolume", async (req, res) => {
  const { formattedDate, summary, merchants, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com,washidhussain825@gmail.com",
    subject: "Daily Transaction Report ",
    text: ``,
    html: `
  <!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <style>
         body, table, td, a, span, div {
         -webkit-text-size-adjust: none !important;
         -ms-text-size-adjust: none !important;
         }
         @media only screen and (max-width: 600px) {
         .container {
         width: 100% !important;
         padding-left: 0 !important;
         padding-right: 0 !important;
         }
         .column {
         display: block !important;
         margin-bottom: 20px !important;
         }
         .spacer {
         display: none !important;
         }
         .desktop-table {
         display: none !important;
         }
         .mobile-row {
         border: 1px solid #eee;
         border-radius: 10px;
         padding: 16px;
         margin-bottom: 10px;
         background-color: #fff;
         }
         .mobile-label {
         margin-bottom: 4px;
         }
         .mobile-value {
         font-size: 16px;
         color: #00000099;
         margin-bottom: 12px;
         }}
         @media only screen and (min-width: 601px) {
         .mobile-table {
         display: none !important;
         }
         }
      </style>
   </head>
   <body style="margin:0; padding:0; background-color: #F8F8F8; font-family: 'General Sans','Segoe UI', sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
         <tr>
            <td align="center">
               <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                  style="max-width: 1018px; background-color: #ffffff; border-radius: 12px; margin-top:10px;"
                  class="container ios-padding-fix">
                  <tr>
                     <td style="padding: 40px 20px;" class="container-padding">
                        <table width="100%" role="presentation" style="height: 90px;">
                           <tr>
                              <td align="left">
                                 <img src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/p_hzyjop.png" alt="PayHub Logo"
                                    style="display: block; height: 40px; border: 0;" />
                              </td>
                              <td align="right" style="font-weight: 600; font-size: 20px; color: #000000;">
                                 ${formattedDate}
                              </td>
                           </tr>
                        </table>
                        <table width="100%" style="background-color:#0000000A; border-radius: 10px; margin: 20px 0;">
                           <tr>
                              <td align="center" style="padding: 20px 0;">
                                 <div style="font-size: 36px; font-weight: 600; color: #000000;">₹${formatNumber(
                                    7858230
                                    )}
                                 </div>
                                 <div style="font-size: 24px; font-weight: 500; color: #00000099; padding-top: 10px;">Daily Offramp Volume</div>
                              </td>
                           </tr>
                        </table>
                        <table width="100%" role="presentation" style="margin: 20px 0; table-layout: fixed;">
                           <tr>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Total Users</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">1,284</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">New Users Today</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">37</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Transacting Users Today</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">263</div>
                              </td>
                           </tr>
                        </table>
                        <table width="100%" role="presentation" style="margin: 20px 0; table-layout: fixed;">
                           <tr>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Success Rate (Txn)</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">1,284</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">Total KYC Completed</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">912</div>
                              </td>
                              <td class="spacer" style="width: 30px;"></td>
                              <td class="column" 
                                 style="padding: 16px; border: 1px solid #E5E5E5; border-radius: 10px; background: transparent; text-align: center;">
                                 <div style="font-size: 18px; color: #00000099; padding-top: 4px;">New KYC Today</div>
                                 <div style="font-size: 32px; font-weight: 700; color: #000;">1,284</div>
                              </td>
                           </tr>
                        </table>
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                           style="background-color: #000000; border-radius: 10px; margin-top: 30px;">
                           <tr>
                              <td align="center" style="padding: 16px;">
                                 <a href="${url}" style="text-decoration: none; display: inline-block; border-radius: 6px;">
                                 <span style="color: #ffffff; font-size: 20px; font-weight: 500; font-family: 'Segoe UI', sans-serif;">
                                 Download Full Report
                                 </span>
                                 </a>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
   </body>
</html>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//payhub
app.post("/topup-request", async (req, res) => {
  const { formattedDate, payhub_data, merchant_data, gateway_data, url } =
    req.body;
  const formatNumber = (num) => (num ? Math.round(num).toLocaleString() : "0");
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "akshay2898.as@gmail.com",
    subject: "Invitation",
    text: ``,
    html: `
    <!DOCTYPE html>
<html>

<head>
   <meta charset="UTF-8">
   <meta name="color-scheme" content="light dark">
   <title>Payout Alert</title>
   <style>
      @media only screen and (min-width: 601px) {
         .logo-desktop {
            display: block !important;
         }

         .logo-mobile {
            display: none !important;
         }

         .show-mobile {
            display: none !important;
         }
      }

      @media only screen and (max-width: 600px) {
         .logo-desktop {
            display: none !important;
         }

         .logo-mobile {
            display: block !important;
         }

         .hide-mobile {
            display: none !important;
         }

         .show-mobile {
            display: block !important;
            text-align: center !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            margin: 0 0 1em 0 !important;
         }

         .responsive-padding {
            padding: 30px 10px !important;
         }

         .no-border-mobile {
            border-bottom: none !important;
         }

         .responsive-text {
            font-size: 18px !important;
         }

         .responsive-bottomtext {
            font-size: 14px !important;
         }

         .details-table-wrapper {
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            padding: 1em;
            background-color: #ffffff;
            margin-bottom: 1.5em;
         }

         .details-table {
            width: 100% !important;
         }

         .details-table tr {
            display: block;
            margin-bottom: 1em;
            border-bottom: 1px solid #eee;
         }

         .logo-img {
            height: 100px !important;
            object-fit: cover;
         }

         .details-table td {
            display: block;
            text-align: left !important;
            width: 100% !important;
            padding: 0.25em 0 !important;
         }

         .details-table td.label {
            font-size: 16px;
         }

         .details-table td.value {
            font-weight: 600;
            font-size: 18px;
         }

         .details-table tr:last-child {
            border-bottom: none;
            margin-bottom: 0;
         }
      }

      @media (prefers-color-scheme: dark) {
         body {
            background-color: #121212 !important;
            color: #ffffff !important;
         }

         .email-container {
            background-color: #1c1c1c !important;
            color: #ffffff !important;
         }
      }
   </style>
</head>

<body
   style="margin:0; padding:0;  font-family: 'General Sans','Segoe UI', sans-serif; background-color: #ffffff; color: #000000;">
   <table width="100%" class="email-container" cellpadding="0" cellspacing="0" border="0" role="presentation"
      style="background-color: #f5f5f5;">
      <tr>
         <td align="center" style="padding: 0;">
            <table cellpadding="0" cellspacing="0" border="0" role="presentation"
               style="width: 100%; max-width: 700px;">
               <tr>
                  <td style="padding: 0; margin: 0;">
                     <img class="logo-img logo-desktop"
                        src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/Screenshot_2025-06-11_at_12.11.19_PM_fapgg8.png"
                        alt="PayHub Logo"
                        style="display: block; width: 100%; max-width: 700px; border: 0; line-height: 100%; vertical-align: middle; border-top-left-radius: 12px; border-top-right-radius: 12px;">

                     <img class="logo-img logo-mobile"
                        src="https://csvpayhub.s3.ap-south-1.amazonaws.com/images/Screenshot_2025-07-09_at_3.07.05_PM_uboseb.png"
                        alt="PayHub Logo Mobile"
                        style="display: none; width: 100%; max-width: 700px; border: 0; line-height: 100%; vertical-align: middle; border-top-left-radius: 12px; border-top-right-radius: 12px;">
                  </td>
               </tr>

               <tr>
                  <td class="responsive-padding" style="background-color: #ffffff; padding: 30px;">
                     <p class="responsive-text" style="margin-top: 0; font-size: 16px; line-height: 1.5;">Hi Admin,</p>

                     <p class="responsive-text" style="font-size: 16px; line-height: 1.5;">
                        You’ve received a new top-up request from one of your merchants.
                     </p>

                     <h3 class="hide-mobile" style="font-size: 16px; font-weight: semibold; margin-top: 30px;">Request
                        Details</h3>
                     <div class="details-table-wrapper">
                        <p class="show-mobile" style="font-size: 18px;">Request Details</p>
                        <table class="details-table" cellspacing="0" width="100%"
                           style="border-collapse: collapse; font-size: 16px;">
                           <tr>
                              <td class="label no-border-mobile"
                                 style="border-bottom: 1px solid #e0e0e0; text-align: left; padding: 8px 0;">Merchant
                                 Name</td>
                              <td class="value"
                                 style="border-bottom: 1px solid #e0e0e0; text-align: right; padding: 8px 0;">GENNPAY
                              </td>
                           </tr>
                           <tr>
                              <td class="label" style="text-align: left; padding: 8px 0;">Requested Amount</td>
                              <td class="value"
                                 style="border-bottom: 1px solid #e0e0e0; text-align: right; padding: 8px 0;">₹28,300
                              </td>
                           </tr>
                           <tr>
                              <td class="label" style="text-align: left; padding: 8px 0;">Reference/Note</td>
                              <td class="value"
                                 style="border-bottom: 1px solid #e0e0e0; text-align: right; padding: 8px 0;">Payroll –
                                 May</td>
                           </tr>
                           <tr>
                              <td class="label" style="text-align: left; padding: 8px 0;">Requested On</td>
                              <td class="value" style="text-align: right; padding: 8px 0;">April 29, 2025 at 10:24 AM
                              </td>
                           </tr>
                        </table>
                     </div>


                     <p class="responsive-text" style="font-size: 16px; line-height: 1.5;">
                        Please log in to your admin dashboard to review, approve, and apply applicable platform fees
                        before processing the top-up.
                     </p>

                     <p style="margin: 20px 0;">
                        🔗 <a href="https://example.com/dashboard" class="responsive-text"
                           style="color: #1a83ff; font-size: 16px">Approve request from dashboard</a>
                     </p>

                     <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />

                     <p class="responsive-text" style="font-size: 16px; line-height: 1.5;">
                        If you have any questions or this request seems suspicious, kindly reach out to the merchant or
                        support immediately.
                     </p>
                     <p class="responsive-text" style="font-size: 16px; margin-bottom: 5px;">Thank you,</p>
                     <strong class="responsive-text" style="font-size: 16px;">The PayHub Team</strong>

                     <p class="responsive-bottomtext" style="font-size: 12px;  margin-top: 30px;">
                        Need help? Contact us anytime at
                        <a href="mailto:support@payhub.com" style="color: #1a83ff;">support@payhub.com</a>.
                     </p>
                  </td>
               </tr>
            </table>
         </td>
      </tr>
   </table>
</body>

</html>
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

