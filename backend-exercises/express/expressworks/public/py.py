#!/usr/bin/python3
'''
a Python script that takes my GitHub credentials 
(username and password(PAT)) and uses the GitHub API to display my id
'''
import requests
import sys

if __name__ == '__main__':
    my_username = sys.argv[1]
    my_PAToken = sys.argv[2]
    
    req = requests('https://api.github.com/user', auth=(my_username, my_PAToken))
    
    json_file = req.json()
    my_ID = json_file['id']
    
    try:
        print(my_ID)
    except:
        print("None")
        
        
        
        






    URL = sys.argv[1]
    res = requests.get(URL)
    header = res.headers.get('X-Request-Id')

    print(header)
    
    
    
#!/usr/bin/python3
# a Python script that takes in a URL, sends a request to the URL and
# displays the value of the X-Request-Id variable found in the header of
# the response --using urllib module
import urllib.request
import sys

if __name__ == "__main__":

    with urllib.request.urlopen(sys.argv[1]) as respon:
        # val = respon.info()
        val = respon.headers.get('X-Request-Id')
    print(val)
    
    
#!/usr/bin/python3
# a pyhthon script that will list 10 commits (from the most recent to
# oldest) of the repository “rails” by the user “rails”  

import requests
from sys import argv

if __name__ == '__main__':

    repo_name = sys.argv[1]
    owner_name = sys.argv[2]
    url = 'https://api.github.com/repos/{}/{}/commits'.format(owner_name, repo_name)
    res = requests.get(url)
    js = res.json()
    
    try:
        for i in (0,10):
            print("{}: {}".format(
                js[i].get("sha"),
                js[i].get("commit").get("author").get("name")))
    except IndexError:
        print("IndexError")
        
    
    
    