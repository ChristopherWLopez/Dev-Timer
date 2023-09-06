import React, { useState } from "react";

const MyChatComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCall = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("API_ENDPOINT", {
        method: "POST",
        headers: {
          "Authorization": "Bearer YOUR_API_KEY",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      setApiResponse(data.response);
    } catch (error) {
      console.error("API Error:", error);
      setApiResponse("An error occurred while fetching the response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={makeApiCall}>Submit</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>User Input: {userInput}</p>
          <p>API Response: {apiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default MyChatComponent;
