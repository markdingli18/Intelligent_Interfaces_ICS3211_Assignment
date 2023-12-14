from flask import Flask, render_template, request, jsonify 
# import openai 

app = Flask(__name__, static_url_path="/static") 

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/faq")
def faq():
    return render_template("faq.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/simple_ui")
def simple_ui():
    return render_template("simple_ui.html")

if __name__ == "__main__": 
    app.run() 