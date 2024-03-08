import marimo

__generated_with = "0.1.45"
app = marimo.App(width="full")


@app.cell
def __(pd):
    #
    # Load questions
    #
    questions = pd.read_csv("questions.csv")
    # questions
    return questions,


@app.cell
def __(questions):
    #
    # Columns labels
    #
    ACHIEVER = questions.columns[1]
    EXPLORER = questions.columns[2]
    SOCIALIZER = questions.columns[3]
    INFLUENCER = questions.columns[4]
    LEASTRISK = questions.columns[5]
    LESSRISK = questions.columns[6]
    MORERISK = questions.columns[7]
    MOSTRISK = questions.columns[8]
    MOSTSUSCEPTIBLE = questions.columns[9]
    MORESUSCEPTIBLE = questions.columns[10]
    LESSSUSCEPTIBLE = questions.columns[11]
    LEASTSUSCEPTIBLE = questions.columns[12]
    GENZ = questions.columns[13]
    MILLENIAL = questions.columns[14]
    GENXYOUNGER = questions.columns[15]
    GENXOLDER = questions.columns[16]
    BOOMER = questions.columns[17]
    SILENT = questions.columns[18]
    OWNER = questions.columns[19]
    RENTER = questions.columns[20]
    EXPERIMENTER = questions.columns[21]
    TRENDY = questions.columns[22]
    FOLLOWER = questions.columns[23]
    LUDDITE = questions.columns[24]
    return (
        ACHIEVER,
        BOOMER,
        EXPERIMENTER,
        EXPLORER,
        FOLLOWER,
        GENXOLDER,
        GENXYOUNGER,
        GENZ,
        INFLUENCER,
        LEASTRISK,
        LEASTSUSCEPTIBLE,
        LESSRISK,
        LESSSUSCEPTIBLE,
        LUDDITE,
        MILLENIAL,
        MORERISK,
        MORESUSCEPTIBLE,
        MOSTRISK,
        MOSTSUSCEPTIBLE,
        OWNER,
        RENTER,
        SILENT,
        SOCIALIZER,
        TRENDY,
    )


@app.cell
def __():
    #
    # Row labels
    #
    PERSONALITY_ROWS = list(range(8))
    RISKAVERSION_ROWS = [8]
    SUSCEPTIBLE_ROWS = [9]
    AGEGROUP_ROWS = [10]
    STATE_ROWS = [11]
    OWNERSHIP_ROWS = [12]
    TECHSAVVY_ROWS = [13]
    return (
        AGEGROUP_ROWS,
        OWNERSHIP_ROWS,
        PERSONALITY_ROWS,
        RISKAVERSION_ROWS,
        STATE_ROWS,
        SUSCEPTIBLE_ROWS,
        TECHSAVVY_ROWS,
    )


@app.cell
def __(mo, pd):
    answersets = pd.read_csv("answersets.csv",index_col="answerset")
    _options = dict([(f"{x['source'].title()} ({x['date']})",n) for n,x in answersets.iterrows()])
    answerset = mo.ui.dropdown(options = _options,value = list(_options)[0],label = "Choose a dataset: ")
    answerset
    return answerset, answersets


@app.cell
def __(mo):
    regions = {
        "New England" : ["Maine", "Massachusetts", "Rhode Island", "New Hampshire", "Connecticut", "Vermont"],
        "Pacific Coast" : ["California", "Oregon", "Washington", "Hawaii", "Alaska"],
        "South" : ["Florida", "Georgia", "South Carolina", "Mississippi", "Alabama", "Louisiana", "Kentucky", "Tennessee", "Arkansas"],
        "Atlantic Coast" : ["New York", "New Jersey", "Delaware", "Maryland", "Pennsylvania", "Virginia", "Washington DC", "West Virginia", "North Carolina"],
        "Midwest" : ["Ohio", "Indiana", "Michigan", "Illinois", "Wisconsin", "Minnesota", "Kansas", "Nebraska", "Iowa", "Missouri", "North Dakota", "South Dakota"],
        "Mountains" : ["Wyoming", "Idaho", "Montana", "Utah", "Colorado"],
        "Southwest" : ["Oklahoma", "Texas", "New Mexico", "Arizona", "Nevada"],
    }
    region = mo.ui.dropdown(options = regions, label = "Choose a region: ")
    region
    return region, regions


@app.cell
def __(answerset, pd, plt, region):
    #
    # Load answers
    #
    ANSWERSET = answerset.value
    answers = pd.read_csv(f"answers_{ANSWERSET}.csv",
                          usecols = range(1,15),
                         )

    # limit results to selected region
    if region.value:
        answers = answers.loc[answers["Which state do you live in?"].isin(region.value)]
        answers.groupby("Which state do you live in?")["Which state do you live in?"].count().plot.pie(figsize=(10,10))

    plt.gca()
    return ANSWERSET, answers


@app.cell
def __(np, pd, questions):
    answer_weights = pd.read_csv("expert_weights.csv")
    personality_matrix = questions.iloc[:8, :5]
    def get_personality_weight(answer):
        question, option = np.where(personality_matrix.isin([answer]).values)
        question = question[0] + 1
        option = option[0] + 1
        return dict(zip(answer_weights["Categories"][answer_weights.isin([question])["Question"]].values, answer_weights[answer_weights.columns[option]][answer_weights.isin([question])["Question"]].values))

    return answer_weights, get_personality_weight, personality_matrix


@app.cell
def __(
    AGEGROUP_ROWS,
    OWNERSHIP_ROWS,
    PERSONALITY_ROWS,
    RISKAVERSION_ROWS,
    SUSCEPTIBLE_ROWS,
    TECHSAVVY_ROWS,
    questions,
):
    #
    # Build classifier
    #
    PERSONALITY = "Personality"
    RISKAVERSION = "Risk aversion"
    SUSCEPTIBILITY = "Susceptibility"
    AGEGROUP = "Age group"
    STATE = "State"
    OWNERSHIP = "Home ownership"
    TECHSAVVY = "Tech savviness"

    characteristics = {
        PERSONALITY: questions.loc[PERSONALITY_ROWS[0]].dropna().index[1:],
        RISKAVERSION: questions.loc[RISKAVERSION_ROWS[0]].dropna().index[1:],
        SUSCEPTIBILITY: questions.loc[SUSCEPTIBLE_ROWS[0]].dropna().index[1:],
        AGEGROUP: questions.loc[AGEGROUP_ROWS[0]].dropna().index[1:],
        OWNERSHIP: questions.loc[OWNERSHIP_ROWS[0]].dropna().index[1:],
        TECHSAVVY: questions.loc[TECHSAVVY_ROWS[0]].dropna().index[1:],
    }

    _classifier = {}
    for characteristic, values in characteristics.items():
        _classifier[characteristic] = (
            questions.loc[range(len(questions)), list(values)].dropna().to_dict()
        )

    classifier = {}
    for _a, _x in _classifier.items():
        for _b, _c in _x.items():
            for _d in _c.values():
                classifier[_d] = (_a, _b)
    # classifier
    # characteristics
    return (
        AGEGROUP,
        OWNERSHIP,
        PERSONALITY,
        RISKAVERSION,
        STATE,
        SUSCEPTIBILITY,
        TECHSAVVY,
        characteristic,
        characteristics,
        classifier,
        values,
    )


@app.cell
def __(mo):
    wt_vs_val_toggle = mo.ui.checkbox(value=False, label="Expert Weighted")
    wt_vs_val_toggle
    return wt_vs_val_toggle,


@app.cell
def __(
    ANSWERSET,
    PERSONALITY,
    answers,
    characteristics,
    classifier,
    get_personality_weight,
    pd,
    region,
    wt_vs_val_toggle,
):
    #
    # Classify answers
    #
    results = []
    for _n, _x in answers.dropna().iterrows():
        # print(f"{_n} answer")
        # print("------------------------")
        _y = dict(
            zip(
                characteristics[PERSONALITY],
                [0] * len(characteristics[PERSONALITY]),
            )
        )
        for _m, _a in enumerate(_x[0:]):
            # print(f"{_m} question")
            # print(_a)
            try:
                category = classifier[_a][0]
                # print("category: ", category)
                classification = classifier[_a][1]
                # print("classification: ", classification)
                if category in [PERSONALITY]:                
                    if wt_vs_val_toggle.value:
                        ans_wt = get_personality_weight(_a)
                        # print(ans_wt)
                        for cls, wt in ans_wt.items():
                            _y[cls] += wt
                    else:
                        _y[classification] += 1
                else:
                    _y[category] = classification
            except:
                if _m != 11:
                    print("NOTFOUND:", _n, answers.columns[_m], _a)
        results.append(_y)
    results = pd.DataFrame(results)
    if region.value is None:
        results.to_csv(f"results_{ANSWERSET}.csv", header=True, index=False)
    # results
    return ans_wt, category, classification, cls, results, wt


@app.cell
def __(mo):
    mo.md("# Participant attention/motivation locus")
    return


@app.cell
def __(ACHIEVER, EXPLORER, INFLUENCER, SOCIALIZER, pd, plt, results):
    _total = (
        results[ACHIEVER]
        + results[EXPLORER]
        + results[SOCIALIZER]
        + results[INFLUENCER]
    )
    locus = pd.DataFrame(
        {
            "x": (
                results[ACHIEVER]
                + results[EXPLORER]
                - results[SOCIALIZER]
                - results[INFLUENCER]
            )
            / _total,
            "y": (
                results[ACHIEVER]
                - results[EXPLORER]
                - results[SOCIALIZER]
                + results[INFLUENCER]
            )
            / _total,
        }
    )
    locus["count"] = 1
    _locus = locus.groupby(["x", "y"]).sum().reset_index()
    _locus.plot.scatter(
        x="x",
        y="y",
        s=_locus["count"]/len(locus)*1000,
        color="lightblue",
        title=f"Participation locus (N={len(locus)})",
    )
    plt.plot(
        locus["x"].mean(),
        locus["y"].mean(),
        "xg",
        markersize=10,
        label="Mean locus",
    )
    plt.plot(
        locus["x"].median(),
        locus["y"].median(),
        "+g",
        markersize=10,
        label="Median locus",
    )
    plt.plot([-1, 1], [0, 0], "k", linewidth=0.5)
    plt.plot([0, 0], [-1, 1], "k", linewidth=0.5)
    plt.text(0.5, 0.55, ACHIEVER, horizontalalignment="center")
    plt.text(0.5, -0.65, EXPLORER, horizontalalignment="center")
    plt.text(-0.5, -0.65, SOCIALIZER, horizontalalignment="center")
    plt.text(-0.5, 0.55, INFLUENCER, horizontalalignment="center")
    plt.text(
        1.1,
        0,
        "System focus",
        rotation=90,
        verticalalignment="center",
        horizontalalignment="center",
    )
    plt.text(
        -1.1,
        0,
        "Individual focus",
        rotation=90,
        verticalalignment="center",
        horizontalalignment="center",
    )
    plt.text(
        0,
        1.1,
        "Action motive",
        verticalalignment="center",
        horizontalalignment="center",
    )
    plt.text(
        0,
        -1.1,
        "Interaction motive",
        verticalalignment="center",
        horizontalalignment="center",
    )
    plt.xlim([-1.2, 1.2])
    plt.ylim([-1.2, 1.2])
    plt.xlabel("Attention")
    plt.ylabel("Motivation")
    plt.legend(loc="upper left")
    plt.gca()
    return locus,


@app.cell
def __(locus, mo, np):
    _x = locus["x"]
    _y = locus["y"]
    mo.md(
        f"""<table>
    <caption>Correlation coefficients</caption>
    <tr><th>Variables<hr/></th><th>Value<hr/></th></tr>
    <tr><th>Attention &mdash; Motivation</th><td>{np.corrcoef(_x,_y)[0,1]:.3f}</td></tr> 
    </table>
    """
    ).center()
    return


@app.cell
def __(PERSONALITY, mo):
    mo.md(f"## {PERSONALITY}")
    return


@app.cell
def __(PERSONALITY, characteristics, results):
    results[list(characteristics[PERSONALITY])].sum().plot.pie(title=PERSONALITY)
    return


@app.cell
def __(PERSONALITY, characteristics, mo, np, results):
    _v = list(characteristics[PERSONALITY])
    _m = np.array(results[_v].to_dict("tight")["data"])
    _cc = np.corrcoef(_m, rowvar=False)
    mo.md(
        f"""<table>
    <caption>Correlation coefficients</caption>
    <tr><th>Variables<hr/></th><th>Value<hr/></th></tr>
    <tr><th>{_v[0]} &mdash; {_v[1]}</th><td>{_cc[0][1]:.3f}</td></tr> 
    <tr><th>{_v[0]} &mdash; {_v[2]}</th><td>{_cc[0][2]:.3f}</td></tr> 
    <tr><th>{_v[0]} &mdash; {_v[3]}</th><td>{_cc[0][3]:.3f}</td></tr> 
    <tr><th>{_v[1]} &mdash; {_v[2]}</th><td>{_cc[1][2]:.3f}</td></tr> 
    <tr><th>{_v[1]} &mdash; {_v[3]}</th><td>{_cc[1][3]:.3f}</td></tr> 
    <tr><th>{_v[2]} &mdash; {_v[3]}</th><td>{_cc[2][3]:.3f}</td></tr> 
    </table>
    """
    ).center()
    return


@app.cell
def __(AGEGROUP, mo):
    mo.md(f"### {AGEGROUP}")
    return


@app.cell
def __(
    AGEGROUP,
    BOOMER,
    GENXOLDER,
    GENXYOUNGER,
    GENZ,
    MILLENIAL,
    PERSONALITY,
    SILENT,
    characteristics,
    mo,
    plt,
    results,
):
    #
    # Personalities by age group
    #
    _plots = {}
    for _group in characteristics[AGEGROUP]:
        plt.figure()
        _data = results[results[AGEGROUP] == _group]
        _plots[_group] = (
            _data[list(characteristics[PERSONALITY])]
            .sum()
            .plot.pie(title=f"{_group} (N={len(_data)})")
        )
    mo.vstack(
        [
            mo.hstack([_plots[GENZ], _plots[MILLENIAL], _plots[GENXYOUNGER]]),
            mo.hstack([_plots[GENXOLDER], _plots[BOOMER], _plots[SILENT]]),
        ]
    )
    return


@app.cell
def __():
    return


@app.cell
def __(SUSCEPTIBILITY, mo):
    mo.md(f"### {SUSCEPTIBILITY}")
    return


@app.cell
def __(
    LEASTSUSCEPTIBLE,
    LESSSUSCEPTIBLE,
    MORESUSCEPTIBLE,
    MOSTSUSCEPTIBLE,
    PERSONALITY,
    SUSCEPTIBILITY,
    characteristics,
    mo,
    plt,
    results,
):
    #
    # Personalities by marketing susceptibility
    #
    _plots = {}
    for _group in characteristics[SUSCEPTIBILITY]:
        plt.figure()
        _data = results[results[SUSCEPTIBILITY] == _group]
        _plots[_group] = (
            _data[list(characteristics[PERSONALITY])]
            .sum()
            .plot.pie(title=f"{_group} (N={len(_data)})")
        )
    mo.hstack(
        [
            _plots[LEASTSUSCEPTIBLE],
            _plots[LESSSUSCEPTIBLE],
            _plots[MORESUSCEPTIBLE],
            _plots[MOSTSUSCEPTIBLE],
        ]
    )
    return


@app.cell
def __(TECHSAVVY, mo):
    mo.md(f"### {TECHSAVVY}")
    return


@app.cell
def __(
    EXPERIMENTER,
    FOLLOWER,
    LUDDITE,
    PERSONALITY,
    TECHSAVVY,
    TRENDY,
    characteristics,
    mo,
    plt,
    results,
):
    #
    # Personalities by tech savviness
    #
    _plots = {}
    for _group in characteristics[TECHSAVVY]:
        plt.figure()
        _data = results[results[TECHSAVVY] == _group]
        _plots[_group] = (
            _data[list(characteristics[PERSONALITY])]
            .sum()
            .plot.pie(title=f"{_group} (N={len(_data)})")
        )
    mo.hstack(
        [_plots[EXPERIMENTER], _plots[TRENDY], _plots[FOLLOWER], _plots[LUDDITE]]
    )
    return


@app.cell
def __(RISKAVERSION, mo):
    mo.md(f"### {RISKAVERSION}")
    return


@app.cell
def __(
    LEASTRISK,
    LESSRISK,
    MORERISK,
    MOSTRISK,
    PERSONALITY,
    RISKAVERSION,
    characteristics,
    mo,
    plt,
    results,
):
    #
    # Personalities by risk aversion
    #
    _plots = {}
    for _group in characteristics[RISKAVERSION]:
        plt.figure()
        _data = results[results[RISKAVERSION] == _group]
        _plots[_group] = (
            _data[list(characteristics[PERSONALITY])]
            .sum()
            .plot.pie(title=f"{_group} (N={len(_data)})")
        )
    mo.hstack(
        [_plots[LEASTRISK], _plots[LESSRISK], _plots[MORERISK], _plots[MOSTRISK]]
    )
    return


@app.cell
def __(OWNERSHIP, mo):
    mo.md(f"### {OWNERSHIP}")
    return


@app.cell
def __(
    OWNER,
    OWNERSHIP,
    PERSONALITY,
    RENTER,
    characteristics,
    mo,
    plt,
    results,
):
    #
    # Personalities by homeownership
    #
    _plots = {}
    for _group in characteristics[OWNERSHIP]:
        plt.figure()
        _data = results[results[OWNERSHIP] == _group]
        _plots[_group] = (
            _data[list(characteristics[PERSONALITY])]
            .sum()
            .plot.pie(title=f"{_group} (N={len(_data)})")
        )
    mo.hstack([_plots[OWNER], _plots[RENTER]])
    return


@app.cell
def __(mo):
    mo.md("## Participant responses")
    return


@app.cell
def __(PERSONALITY, characteristics, mo, pd, plt, results):
    _plots = []
    for _group in results:
        plt.figure()
        if _group in characteristics[PERSONALITY]:
            _plots.append(results[_group].hist(bins=range(8), width=0.5, density=True))
            _plots[-1].set_title(_group)
            plt.ylabel("Frequency (pu)")
            plt.ylim([0,1])
            plt.yticks([x/10 for x in range(11)])
        else:
            _data = pd.DataFrame(results[_group]).set_index(_group)
            _data["count"] = 1
            _counts = (_data.groupby(_group).sum() / len(_data) ).to_dict()["count"]
            try:
                _counts, _bins = [_counts[x] for x in characteristics[_group]], list(
                    characteristics[_group]
                )
                _plot = plt.bar(
                    x=range(0, len(_bins)),
                    height=_counts,
                    tick_label=_bins,
                    width=0.5,
                )
                plt.grid()
                plt.ylabel("Frequency (pu)")
                plt.ylim([0,1])
                plt.yticks([x/10 for x in range(11)])
                plt.title(_group)
                _plots.append(_plot)
            except:
                pass
    mo.vstack(
        [
            mo.hstack(_plots[:4]),
            mo.hstack(_plots[4:]),
        ]
    )
    return


@app.cell
def __():
    import marimo as mo
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt
    pd.options.display.max_rows=99
    return mo, np, pd, plt


if __name__ == "__main__":
    app.run()
