var enabled;
async function run() {
    enabled = (await chrome.storage.local.get('enabled')).enabled;
    if (!enabled) {
        const target_div = document.getElementById('extabar');
        const length_div = document.getElementById('center_col');
        const gpt_response = document.createElement('div');
        const search_query = document.getElementsByName('q')[0].value;
        const label_element = document.createElement('h3');

        label_element.textContent = "SearchGPT Result";
        gpt_response.id = "gpt-response";
        gpt_response.style.fontSize = "12pt";
        gpt_response.style.lineHeight = "150%";
        gpt_response.style.padding = "6px";
        gpt_response.style.margin = "2px";
        gpt_response.style.border = "1px solid #3c4043";
        gpt_response.style.borderRadius = "5px";
        gpt_response.style.color = "#bdc1c6";
        gpt_response.style.backgroundColor = "#303134";
        gpt_response.style.width = `${length_div.offsetWidth}px`;
        target_div.insertAdjacentElement('afterend', label_element);
        label_element.insertAdjacentElement('afterend', gpt_response);

        var key;
        var model;
        var max_tokens;
        var temperature;
        var top_p;

        async function retrieveValues() {
            key = (await chrome.storage.local.get('key')).key;
            model = (await chrome.storage.local.get('model')).model;
            max_tokens = (await chrome.storage.local.get('max_tokens')).max_tokens;
            temperature = (await chrome.storage.local.get('temperature')).temperature;
            top_p = (await chrome.storage.local.get('top_p')).top_p;

            const endpoint = 'https://api.openai.com/v1/completions';

            async function completeText() {
                const apiKey = key;
                const data = {
                    prompt: "Q:" + search_query + "\n A:",
                    model: model,
                    max_tokens: parseInt(max_tokens),
                    temperature: parseFloat(temperature),
                    top_p: parseFloat(top_p),
                    stop: ["A:", "Q:"]
                };

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify(data)
                });

                const json = await response.json();
                return json.choices[0].text;
            }

            const promise = completeText();
            promise.then(
                result => {
                    gpt_response.textContent = result;
                },
                error => console.error(error)
            );
        }

        retrieveValues();
    }
}

run();
