import { SessionsClient } from '@google-cloud/dialogflow-cx';


async function detectIntentText(query, sessionId) {

    const projectId = "showdomilhaobot";
    const location = "us-central1";
    const agentId = "47fa226d-a770-4c5b-8fd7-7e2144b54e22";
    const languageCode = "en";
    const client = new SessionsClient({
        apiEndpoint: "us-central1-dialogflow.googleapis.com",
    });

    const sessionPath = client.projectLocationAgentSessionPath(
        projectId,
        location,
        agentId,
        sessionId
    );
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
            },
            languageCode,
        },
    };
    const [response] = await client.detectIntent(request);
    return response
}

module.exports = { detectIntentText } 