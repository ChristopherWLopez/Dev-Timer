// import { useCallback, useState } from "react";
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();


export const OpenAI=()=>{

const promptExamples = { 
    1:"I am trying to figure out how to solve this bug."
}

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);

async function completion (prompt){
    try{
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",

            messages:[{ role: "system", content: 'You are a debugger that is going to help the dev out with whatever error they have'
            }
        ]

        })
        const message = response.data.choices[0].message.content;
        return message;
    } catch (error){
        throw new Error(error.message);
    }
}

    const handleApi = async (id) =>{
        try{
            console.log("Helping with debugging");
            const response = await completion(id);
            console.log(response);
            return response;
        } catch(error){
            throw error;
        }
    }





    return(
        <>
            <h3>Chat feature</h3>
            <label>
                Here to help you debugg
                <input value={prompt} onChange={(e)=> setPrompt(e.target.value)}/>
                <div>{chat}</div>
            </label>
            <button onClick={makeFetchHappen}/>
        </>
    )
}
