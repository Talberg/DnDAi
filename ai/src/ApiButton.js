import { GoogleGenerativeAI } from "@google/generative-ai";
import { process_params } from "express/lib/router";
function MyComponent(props) {

   
    
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDhkM335P0JB9QepMKVFoER2vDip1uwPJI");

// ...

const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});

// ...
    let text
    async function run() {

         console.log(props.props)

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = props.props

  const result = await model.generateContent(prompt);
  const response = await result.response;
   text = response.text();
        console.log(text);
        var div = document.getElementById('response')
        div.innerHTML = text
}
    
     
    
  return (
      <div>
          <div id="response">{text }</div>
      <button onClick={run}>
      WEEEEEEE
      </button>
    </div>
  );
}

export default MyComponent