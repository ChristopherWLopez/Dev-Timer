import { useCallback, useState } from "react";


 export default async function makeOpenAiRequest (content){

        const key = process.env.API_KEY;
        const org = process.env.REACT_APP_OPENAI_ORG
        const url = "https://api.openai.com/v1/chat/completions";
        
        const message = {
            model: "gpt-3.5-turbo",
            message: [{ role: "user", content }],
        };
        
        const body = JSON.stringify(message);
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization" : `Bearer ${key}`,
                "OpenAI-Organiztion": `${org}`,
                "Content-Type": 'application/json'
            },
            body: body,
        });

        console.log("this my response " + response);
        
    
    if(response.ok){
        const responseJson = await response.json();

        return responseJson.choices[0].message.content;
    } else {
        const error = await response.text();
        return `${response.status} ${response.statusText} ${error}`;
    }

};


export const OpenAI=()=>{

    const [prompt, setPrompt] = useState('');
    const [chat, setChat] = useState('');


    const makeFetchHappen = useCallback(async()=>{
        const response = await makeOpenAiRequest(prompt);
        setChat(response);
    },[prompt]);

    return(
        <>
            <h3>Chat feature</h3>
            <label>
                Here to help you debugg
                <input value={prompt} onChange={(e)=> setPrompt (e.target.value)}/>
                <div>{chat}</div>
            </label>
            <button onClick={makeFetchHappen}/>
        </>
    )
}
