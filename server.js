import { ChatOpenAI } from "@langchain/openai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//  json goed ontvangen :)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors());

app.use(express.json());

//connect with API
const model = new ChatOpenAI({
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiVersion: process.env.OPENAI_API_VERSION,
    azureOpenAIApiInstanceName: process.env.INSTANCE_NAME,
    azureOpenAIApiDeploymentName: process.env.ENGINE_NAME,
});


let todoHistory = [];

async function processInput(fetchInput) {
    let prompt = `You are an AI assistant dedicated to managing my to-do list. The user input is: ${fetchInput}. Process the input to add or remove tasks.
     If the user explicitly requests the removal of a task, proceed to remove it. Refer to the latest to-do list: ${todoHistory} as the current context. Be prepared for the addition of a new task if the history is empty.
    When the user requests the to-do list, present it in a bulleted format. Enumerate each task with bullet points for clear visualization.`
    

    const response = await model.invoke(prompt);
    return response.content
}

app.get('/', async (req, res) => {
    res.send(" we liveeee")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post('/input', async (req, res) => {
    try {
        const fetchInput = req.body.query;
        const response = await processInput(fetchInput);
        //chat history in array plaatsen
                todoHistory.push(response);
        console.log(todoHistory);
        console.log(response);  
            res.json({ response })
    } catch (error) {
        console.error("error fetching response:", error);
    }
});

