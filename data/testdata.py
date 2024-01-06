"""Generate test dataset"""

import pandas as pd
import datetime as dt
import random

DATE = dt.datetime.now().date()

questions = pd.read_csv("questions.csv",index_col="Question")

FILE = open("answers_2.csv","wt")
header = 'Timestamp,"' + '","'.join(questions.index) + '"'
print(header,file=FILE)
for n in range(10000):
    row = [str(DATE)]
    for question,answers in questions.iterrows():
        if question == "What state do you live in?":
            row.append("TEST")
        else:
            row.append(f'"{random.choice(answers.dropna())}"')
    print(",".join(row),file=FILE)