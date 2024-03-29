import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { data } = req.body;
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: "shauryag2002@asyncapi-418609.iam.gserviceaccount.com",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLTWbsDI2JpcUP\npEqoRut6L6m8ub8coJDqW8ljDIlmKnvZmk/eQGu1+xfTViEewiATP3e297x9v6Yi\nlNPcqiG1uwXrcW1SV6KOCc3wSapxxkCMFvsdDSXwjE8u7QCsOU81EPtpI35XYeDG\n6van+COs/MYeO/Rjtxv0hwRLQCt2DztZCtB+qncPuIV06OxGbbSm81iOcagZ/tSt\n0nhSn0u347KRSbyXq3QROR1JptUb2WEhUSGd2xDIdFoZpQJzAeU6bVLhYAYzDWTc\nCj2j40/9I04L6IEjCryK0wCeOhLPAa0UkKAbXdnUo/eGQVCz8xV3By/W1/mHYZ4H\nDFKUg7ZrAgMBAAECggEATElvJYRQWCZsG8J6gUqbce4Qs1C/9e4KcuaeWxyJMl0e\nvDi7X5qs0Ey4VAUtyGzvvElEktPDVyxjGvbdyR/OJnNXdVHKw+s+hC4JqPD7lFXg\nQrEc6XnVkr4TuHgWmImovzDwJjO7ZO7Fed8RT1Y9jNwNO6sjuYcsZkWDxvj9Vf8V\n/4OHXYQWux9o48Tvmfe5hQpNtvataedM10QUyv//Y974+bGVo09kmXT/5/WcMQGl\nWR5XtUxS7+qYHB5cumO4EwZ2fuMZHLjQhhqwCoyFMoV77RSP7U9vDIbTRHqmPxuq\nUpHmX3T3RjVmxmWdCoSu6C4wqC8nh8mQkJGHeVp7AQKBgQDktQc6MtH7RZZwk8tk\nFmUchcn3sNh2+u+b2UIuptprZsc1o1K7UxbydyoKBSJ2xiH99xyfcQiagLozIi23\nxcEztAULMWX51nQcuXj0/xBxx5EL2nHbMak0+7QnddUfNMUFi6LfzWeHsW6okBrR\nAEKC8grhhGqs0tF3ko4M0xrnYwKBgQDjkELOv6ajcEtYoq28f5J32dW8yuXt/ggo\nBdryZ24oZXLMSaDmu/MyD7cznJGmYrr8SVAmB83hFUkkZf5HQSbZ7bBM9ioZsDDg\n4VOX3v0Ch2gir+BG/DbDD/m1Oudr7Cnm2GqTpx6O0KFFAwNRuwAWzKLFrYlIzV5t\nzZSB77E3WQKBgQDVLYP6FGqzmw56CtjXhyRiLLawAJAUfxwemajd0TrgR2HCNmUk\nJHPMN5Tg2B5itZXzooV0fKi3Uuu8Q8x3coX+inr1DuttsB50s9DyFFmgpJMniEr+\nNFDzCPbInUW1G7vVym1bzJsG2TU7O28zhtl4MuI/iOziAHOsz9dGTvPR3wKBgAbf\nJVVO7j5DNtM/XlWx2H9sAYtI6TaNlDt5KcpmGyp3HcdTddth048wcEzLro5CrvjN\nUfFEDRB97w59Ufde3Uh5Z/h6+nx6GI/B3h9Y6XT5F8jsXK5oEVNEmTrCw5g7smw5\nHsbEpiST4jrOQ3xlVDRcC5JCkkGzieVw7soZrdVJAoGARKhQPXKQi0MkY97q69Im\nQI/zNgGtp7YWjq+vFYXTMlb51J6Ic7KpiPjzLbmirIJxWPyXFnCSL3wepo1hv77Y\nSBXPZcJenHdR/67jMBpJKSOIkSfkXiWF4Pl+AzoQc1qJXSGeTAC+3J681Tq5kzqY\nxqZeRDY405sJWirGFMglJj4=\n-----END PRIVATE KEY-----\n",
            },
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        const client = await auth.getClient();
        const googleSheets = google.sheets({ version: "v4", auth: client });
        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId: "1_Fiyo-ZUSeGh-oKm_-zi4akLyEepRgKswnyqC_vbyuM",
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