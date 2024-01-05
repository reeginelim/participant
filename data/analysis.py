import marimo

__generated_with = "0.1.69"
app = marimo.App(width="full")


@app.cell
def __(pd):
    #
    # Load questions
    #
    questions = pd.read_csv("questions.csv")
    questions
    return questions,


@app.cell
def __(pd):
    #
    # Load answers
    #
    answers = pd.read_csv("answers_1.csv",
                         usecols = range(1,15))
    answers
    return answers,


@app.cell
def __(questions):
    # 
    # Build classifier
    #
    characteristics = {
        "Personality" : {"Achiever","Explorer","Socializer","Influencer"},
        "Risk aversion" : {"Least risk averse","Less risk averse","More risk averse","Most risk averse"},
        "Marketing susceptible" : {"Most susceptible","More susceptible","Less susceptible","Least susceptible"},
        "Age group" : {"Gen-Z","Millenial","Gen-X (younger)","Gen-X (older)","Boomer","Silent"},
        "Home ownership" : {"Owner","Renter"},
        "Tech savviness" : {"Experimenter","Trendy","Follower","Luddite"},
    }
    _classifier = {}
    for characteristic,values in characteristics.items():
        _classifier[characteristic] = questions.loc[range(len(questions)),list(values)].dropna().to_dict()
    # [(a,[(b,list(c.values())) for b,c in x.items()]) for a,x in classifier.items()]
    classifier = {}
    for a,x in _classifier.items():
        for b,c in x.items():
            for d in c.values():
                classifier[d] = (a,b)
    classifier
    return (
        a,
        b,
        c,
        characteristic,
        characteristics,
        classifier,
        d,
        values,
        x,
    )


@app.cell
def __(answers, classifier, pd):
    #
    # Classify answers
    #
    results=[]
    for n,row in answers.dropna().iterrows():
        result = {"Achiever":0,"Explorer":0,"Socializer":0,"Influencer":0}
        for m,answer in enumerate(row[0:]):
            try:
                category = classifier[answer][0]
                classification = classifier[answer][1]
                if category in ["Personality"]:
                    result[classification] += 1
                else:    
                    result[category] = classification
            except:
                if m != 11:
                    print("NOTFOUND:",n,answers.columns[m],answer)
        results.append(result)
    results = pd.DataFrame(results)
    results.to_csv("results_1.csv",header=True,index=False)
    results
    return answer, category, classification, m, n, result, results, row


@app.cell
def __(characteristics, results):
    results[list(characteristics["Personality"])].sum().plot.pie()
    return


@app.cell
def __(characteristics, results):
    results[results["Age group"]=="Millenial"][list(characteristics["Personality"])].sum().plot.pie(title="Millenial personality")
    return


@app.cell
def __(results):
    #Marketing susceptible
    results[results["Age group"]=="Millenial"]["Marketing susceptible"].hist()
    return


@app.cell
def __():
    import marimo as mo
    import pandas as pd
    import matplotlib.pyplot as plt
    return mo, pd, plt


if __name__ == "__main__":
    app.run()
