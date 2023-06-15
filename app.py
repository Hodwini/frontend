from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/home')
@app.route('/')
def page_index():
    return render_template("index.html")

@app.route('/wiki')
@app.route('/')
def page_wiki():
    return render_template("wiki.html")


if __name__ == "__main__":
    app.run(debug=True)