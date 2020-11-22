import sys
import time

import numpy as np
import pandas as pd
import tweepy as twp
from tweepy.streaming import StreamListener

import config

auth = twp.OAuthHandler(config.TWITTER_KEY, config.TWITTER_SECRET)
auth.secure = True
auth.set_access_token(config.TWITTER_ACCESS_TOKEN,
                      config.TWITTER_ACCESS_SECRET)

api = twp.API(auth)
ascs = pd.read_csv(
    "C:\projects\CodeChella\\twitterforwomenbot\\associations-women.csv")
# print(ascs.columns)

# rpl_head = ascs.iloc[0]
# ascs = ascs[1:]
# ascs.columns = rpl_head

states = ascs.columns
states = ascs['State'].tolist()
# for s in states:
#     if s == str('Mexico City'):
#         print(states.index(s))
orgz = ascs['Association'].tolist()
numbers = ascs['Phone number'].tolist()
emails = ascs['Mail'].tolist()

# If the authentication was successful, you should
# see the name of the account print out

# dms = api.list_direct_messages(1000)
# for dm in dms:
#     print(dm.message_create.get('message_data').get('text'))
#     print(" ")

rate_limit_counter = 0
alreadysent = set()
while(True):
    rate_limit_counter = rate_limit_counter+1
    try:
        if(rate_limit_counter < 100):
            dms = api.list_direct_messages(1000)
            for dm in dms:
                userid = dm.message_create.get('sender_id')
                if (userid != str(1264381268856315905) and (userid not in alreadysent)):
                    alreadysent.add(userid)
                    # listOfOrgz = "void"
                    user = api.get_user(userid)
                    text = dm.message_create.get(
                        'message_data').get('text').lower()
                    retList = []
                    for state in states:
                        if state.lower() in text:
                            idx = states.index(state)
                            org = orgz[idx]
                            num = int(numbers[idx])
                            email = emails[idx]
                            option = str(org)+" -> "+str(num)+", "+email
                            retList.append(option)
                            break
                    sendMg = "Hey @"+user.screen_name + \
                        " here is the organisation that can help: " + \
                        str(retList)
                    api.send_direct_message(userid, sendMg)
                    time.sleep(60)
        else:
            time.sleep(60*60)
    except Exception as e:
        print("error: " + str(e))
    time.sleep(60)
