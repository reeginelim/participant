import marimo

__generated_with = "0.3.4"
app = marimo.App()


@app.cell
def __(pd):
    personality_questions = pd.read_csv("questions_personality.csv")
    return personality_questions,


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
