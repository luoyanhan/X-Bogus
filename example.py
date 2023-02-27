import execjs    
import urllib.parse

url = ""
user_agent = ""

query = urllib.parse.urlparse(url).query
xbogus = execjs.compile(open('./X-Bogus.js').read()).call('sign', query, user_agent)
new_url = url + "&X-Bogus=" + xbogus
print(new_url)