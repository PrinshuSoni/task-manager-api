const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendWelcomeEmail = (email, name) => {
    sendSmtpEmail = {
        to: [{
            email: email,
            name: name
        }],
        templateId: 1,
        params: {
            email: email,
            name: name
        }
    };

    apiInstance.sendTransacEmail(sendSmtpEmail)
}

const sendCancellationEmail = (email, name) => {
    sendSmtpEmail = {
        to: [{
            email: email,
            name: name
        }],
        templateId: 2,
        params: {
            email: email,
            name: name
        }
    };

    apiInstance.sendTransacEmail(sendSmtpEmail)
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}