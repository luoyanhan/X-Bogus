# X-Bogus
TikTok X-Bogus Signature Generator.


**`⭐` Make sure to star this project!**

# Example Usage 
`Python:`
```py
import execjs    
import urllib.parse

# Replace the empty strings with valid values
url = ""
user_agent = ""

query = urllib.parse.urlparse(url).query
xbogus = execjs.compile(open('./X-Bogus.js').read()).call('sign', query, user_agent)
new_url = url + "&X-Bogus=" + xbogus
print(new_url)
```
`JavaScript:`
```js
const { sign } = require("./X-Bogus.js");

// Replace the empty strings with valid values
const url = "";
const userAgent = "";

const query = url.includes("?") ? url.split("?")[1] : "";
const xbogus = sign(query, userAgent);
const newUrl = url + "&X-Bogus=" + xbogus;
console.log(newUrl);
```

## `🧑‍💻` Contact
- **Website**: https://aithe.dev/
- **Telegram**: t.me/aithedev
- **Discord**: ai#4444
