import marimo

__generated_with = "0.3.4"
app = marimo.App(width="full")


@app.cell
def __(pd, personality_questions_path):
    personality_questions = pd.read_csv(personality_questions_path)
    characteristics = list(personality_questions.columns)
    characteristics.pop(0)
    return characteristics, personality_questions


@app.cell
def __(personality_questions):
    ACHIEVER = personality_questions.columns[1]
    EXPLORER = personality_questions.columns[2]
    SOCIALIZER = personality_questions.columns[3]
    INFLUENCER = personality_questions.columns[4]
    return ACHIEVER, EXPLORER, INFLUENCER, SOCIALIZER


@app.cell
def __(expert_weights_path, pd):
    answer_weights = pd.read_csv(expert_weights_path)
    def get_weights(question_number, answer_number):
        weight = answer_weights.iloc[(question_number-1)*4:(question_number-1)*4+4, answer_number+1]
        classifier = answer_weights.iloc[(question_number-1)*4:(question_number-1)*4+4, 1]
        return dict(zip(classifier.values, weight.values))
    return answer_weights, get_weights


@app.cell
def __(personality_questions):
    def get_personality(question_numbe, answer_num):
        ans_idx = personality_questions.iloc[question_numbe-1, :].isin([answer_num]).values
        return personality_questions.iloc[question_numbe-1, :].index[ans_idx][0]
    return get_personality,


@app.cell
def __(answers_path, mo, os):
    answers_list = os.listdir(answers_path)
    answer_selector = mo.ui.dropdown(
        options=answers_list+["Total"],
        value="Total",
        label="Select the answer for anlysis"
    )
    answer_selector
    return answer_selector, answers_list


@app.cell
def __(mo):
    regions = {
        "New England": ["ME", "MA", "RI", "NH", "CT", "VT"],
    "Pacific Coast": ["CA", "OR", "WA", "HI", "AK"],
    "South": ["FL", "GA", "SC", "MS", "AL", "LA", "KY", "TN", "AR"],
    "Atlantic Coast": ["NY", "NJ", "DE", "MD", "PA", "VA", "DC", "WV", "NC"],
    "Midwest": ["OH", "IN", "MI", "IL", "WI", "MN", "KS", "NE", "IA", "MO", "ND", "SD"],
    "Mountains": ["WY", "ID", "MT", "UT", "CO"],
    "Southwest": ["OK", "TX", "NM", "AZ", "NV"]
    }
    region = mo.ui.dropdown(options = regions, label = "Choose a region: ")
    region
    return region, regions


@app.cell
def __(answer_selector, answers_list, answers_path, os, pd, plt, region):
    if answer_selector.value == "Total":
        personality_answers = pd.concat([pd.read_csv(os.path.join(answers_path, answer)) for answer in answers_list])
    else:
        personality_answers = pd.read_csv(os.path.join(answers_path, answer_selector.value))

    if region.value:
        personality_answers = personality_answers.loc[personality_answers["Region"].isin(region.value)]
    personality_answers.groupby("Region")["Region"].count().plot.pie(figsize=(10,10))
    plt.gca()
    return personality_answers,


@app.cell
def __(mo):
    wt_vs_val_toggle = mo.ui.checkbox(value=False, label="Expert Weighted")
    wt_vs_val_toggle
    return wt_vs_val_toggle,


@app.cell
def __(
    characteristics,
    get_personality,
    get_weights,
    pd,
    personality_answers,
    wt_vs_val_toggle,
):
    results = []
    for _n, _x in personality_answers.dropna().iterrows():
        _y = dict(zip(characteristics,[0] * len(characteristics)))
        for _m, _a in enumerate(_x[3:]):
            question_number = _m+1
            answer_number = _a
            if wt_vs_val_toggle.value:
                weights = get_weights(question_number, answer_number)
                for cls, wt in weights.items():
                    _y[cls] += wt
            else:
                personality = get_personality(question_number, answer_number)
                _y[personality] += 1
        results.append(_y)
    results = pd.DataFrame(results)
    return (
        answer_number,
        cls,
        personality,
        question_number,
        results,
        weights,
        wt,
    )


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
def __():
    import marimo as mo
    import pandas as pd
    import numpy as np
    import os
    import sys
    import matplotlib.pyplot as plt

    personality_questions_path = "personality/questions.csv"
    answers_path = "personality/answers"
    expert_weights_path = "personality/expert_weights.csv"
    pd.options.display.max_rows=99
    return (
        answers_path,
        expert_weights_path,
        mo,
        np,
        os,
        pd,
        personality_questions_path,
        plt,
        sys,
    )


if __name__ == "__main__":
    app.run()
