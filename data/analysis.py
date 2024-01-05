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
def __(pd, plt, results):
    locus = pd.DataFrame({"x":(results["Achiever"]+results["Explorer"]-results["Socializer"] - results["Influencer"])/(results["Achiever"]+results["Explorer"]+results["Socializer"]+results["Influencer"]),
                          "y":(results["Achiever"]-results["Explorer"]-results["Socializer"]+results["Influencer"])/(results["Achiever"]+results["Explorer"]+results["Socializer"]+results["Influencer"])})
    locus["count"] = 1
    _locus = locus.groupby(["x","y"]).sum().reset_index()
    # plt.figure(figsize=(10,10))
    _locus.plot.scatter(x="x",y="y",s="count",title="Personality locus")
    plt.plot(locus["x"].mean(),locus["y"].mean(),"*g",markersize=10,label="Mean locus")
    plt.plot(locus["x"].median(),locus["y"].median(),"xg",markersize=10,label="Median locus")
    plt.plot([-1,1],[0,0],'k',linewidth=0.5)
    plt.plot([0,0],[-1,1],'k',linewidth=0.5)
    plt.text(0.5,0.55,"Achiever",horizontalalignment="center")
    plt.text(0.5,-0.65,"Explorer",horizontalalignment="center")
    plt.text(-0.5,-0.65,"Socializer",horizontalalignment="center")
    plt.text(-0.5,0.55,"Influencer",horizontalalignment="center")
    plt.text(1.1,0,"System focus",
             rotation=90,
             verticalalignment="center",
             horizontalalignment="center")
    plt.text(-1.1,0,"Individual focus",
             rotation=90,
             verticalalignment="center",
             horizontalalignment="center")
    plt.text(0,1.1,"Action focus",
             verticalalignment="center",
             horizontalalignment="center")
    plt.text(0,-1.1,"Interaction focus",
             verticalalignment="center",
             horizontalalignment="center")
    plt.xlim([-1.2,1.2])
    plt.ylim([-1.2,1.2])
    plt.xlabel(None)
    plt.ylabel(None)
    plt.legend(loc='upper left')
    plt.gca()
    return locus,


@app.cell
def __(locus):
    locus["x"].mean(),locus["y"].mean()
    return


@app.cell
def __(characteristics, results):
    results[list(characteristics["Personality"])].sum().plot.pie(title="Personalities")
    return


@app.cell
def __(characteristics, mo, plt, results):
    #
    # Personalities by age group
    #
    _plots = []
    for _group in characteristics["Age group"]:
        plt.figure()
        _data = results[results["Age group"]==_group]
        _plots.append(_data[list(characteristics["Personality"])].sum().plot.pie(title=f"{_group} personality (N={len(_data)})"))
    mo.hstack(_plots)
    return


@app.cell
def __(characteristics, mo, plt, results):
    #
    # Personalities by marketing susceptibility
    #
    _plots = []
    for _group in characteristics["Marketing susceptible"]:
        plt.figure()
        _data = results[results["Marketing susceptible"]==_group]
        _plots.append(_data[list(characteristics["Personality"])].sum().plot.pie(title=f"{_group} personality (N={len(_data)})"))
    mo.hstack(_plots)
    return


@app.cell
def __(characteristics, mo, plt, results):
    #
    # Personalities by tech savviness
    #
    _plots = []
    for _group in characteristics["Tech savviness"]:
        plt.figure()
        _data = results[results["Tech savviness"]==_group]
        _plots.append(_data[list(characteristics["Personality"])].sum().plot.pie(title=f"{_group} personality (N={len(_data)})"))
    mo.hstack(_plots)
    return


@app.cell
def __(characteristics, mo, plt, results):
    #
    # Personalities by risk aversion
    #
    _plots = []
    for _group in characteristics["Risk aversion"]:
        plt.figure()
        _data = results[results["Risk aversion"]==_group]
        _plots.append(_data[list(characteristics["Personality"])].sum().plot.pie(title=f"{_group} personality (N={len(_data)})"))
    mo.hstack(_plots)
    return


@app.cell
def __(characteristics, mo, plt, results):
    #
    # Personalities by homeownership
    #
    _plots = []
    for _group in characteristics["Home ownership"]:
        plt.figure()
        _data = results[results["Home ownership"]==_group]
        _plots.append(_data[list(characteristics["Personality"])].sum().plot.pie(title=f"{_group} personality (N={len(_data)})"))
    mo.hstack(_plots)
    return


@app.cell
def __(mo, plt, results):
    _plots = []
    for _group in ["Risk aversion","Marketing susceptible","Age group","Home ownership","Tech savviness"]:
        plt.figure()
        _plots.append(results[_group].hist())
        _plots[-1].set_title(_group)
    mo.hstack(_plots)
    return


@app.cell
def __():
    import marimo as mo
    import pandas as pd
    import matplotlib.pyplot as plt
    return mo, pd, plt


if __name__ == "__main__":
    app.run()
