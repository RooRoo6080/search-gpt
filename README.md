# SearchGPT
Get summarized results in seconds by using the power of OpenAI's GPT-3 models to enhance Google searches with artificial intelligence.


![icon-128](https://user-images.githubusercontent.com/67977174/211217221-9e7719f4-f80a-49d9-a2d3-6e07d6a562f8.png)


## Setup
1. Make an OpenAI Account and get your API key at https://beta.openai.com/account/api-keys
2. Open the popup by clicking on the SearchGPT icon in your toolbar
3. Copy and paste the key into popup of the SearchGPT extension


![image](https://user-images.githubusercontent.com/67977174/211216631-80bf45fc-8ca0-4bdf-8ad0-6860b6cd163f.png)


## Functionality
* Use the toggle at the top of the popup to enable/disable the extension
  * Search something up with the Google Search engine. This should pop up:
  
  
  ![image](https://user-images.githubusercontent.com/67977174/211216935-f7246941-f6e6-4198-ba53-71b5484d48da.png)

* Details on advanced properties are available at https://beta.openai.com/docs/api-reference/completions/create#completions/create-model
  * Model
    * The higher up the name on the list, the more powerful (and expensive) it gets
    * Davinci 3 is strongly recommended for best results
  * Max tokens
    * The amount of output words
    * 100 tokens is about 750 words
    * Low amounts can cut off replies but the higher you go, the more you pay
    
    
--------------------------------------
## Disclaimers    
* Currently only works with www.google.com search queries (URLs starting with www.google.com/search)
* Using your OpenAI API key will charge money to your account after the free trial (typically $18 for 3 months)
  * See model prices here: https://openai.com/api/pricing/ (Language Models)
