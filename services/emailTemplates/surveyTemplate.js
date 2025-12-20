const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding:40px 20px;">
              
              <table width="100%" style="max-width:600px; background:#ffffff; border-radius:10px; box-shadow:0 8px 24px rgba(0,0,0,0.08);" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:30px; text-align:center;">
                    
                    <h2 style="margin:0 0 10px; color:#1f2937;">
                      We’d love your feedback 💬
                    </h2>

                    <p style="margin:0 0 20px; color:#6b7280; font-size:15px;">
                      Please take a moment to answer the question below
                    </p>

                    <div style="margin:20px 0; padding:15px; background:#f9fafb; border-radius:8px; color:#111827; font-size:16px;">
                      ${survey.body}
                    </div>

                    <div style="margin-top:30px;">
                      <a 
                        href="${keys.redirectDomain}/api/surveys/${survey.id}/yes"
                        style="display:inline-block; margin:5px; padding:12px 28px; background:#4f46e5; color:#ffffff; text-decoration:none; border-radius:6px; font-weight:bold;"
                      >
                        👍 Yes
                      </a>

                      <a 
                        href="${keys.redirectDomain}/api/surveys/${survey.id}/no"
                        style="display:inline-block; margin:5px; padding:12px 28px; background:#e5e7eb; color:#111827; text-decoration:none; border-radius:6px; font-weight:bold;"
                      >
                        👎 No
                      </a>
                    </div>

                    <p style="margin-top:30px; font-size:12px; color:#9ca3af;">
                      Thank you for helping us improve!
                    </p>

                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};
