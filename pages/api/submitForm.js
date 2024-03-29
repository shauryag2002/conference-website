import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { data } = req.body;
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        const client = await auth.getClient();
        const googleSheets = google.sheets({ version: "v4", auth: client });
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            range: "Sheet1!A:I",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [[
                    data.Fullname,
                    data.Email,
                    data.Bio,
                    data.Social,
                    data.Title,
                    data.Description,
                    data.Format,
                    data.Level,
                    data.AdditionalInfo
                ]],
            },
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit feedback. Try again' });
    }
}