const mockTransactionalEmailsApi = jest.fn().mockImplementation(() => {
    return { 
        TransactionalEmailsApi: jest.fn(),
        sendTransacEmail: jest.fn()
    };
});

module.exports = {
    ApiClient: {
        instance: {
            authentications: {
                'api-key': {
                    apiKey: null
                }
            }
        }
    },
    TransactionalEmailsApi: mockTransactionalEmailsApi
}