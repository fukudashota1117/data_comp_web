from testapp import app
from flask import render_template,request

@app.route('/')
def index():
    my_dict = {
        'insert_something1': 'views.pyのinsert_something1部分です。',
        'insert_something2': 'views.pyのinsert_something2部分です。',
        'test_titles': ['title1', 'title2', 'title3']
    }
    return render_template('testapp/index.html', my_dict=my_dict)
@app.route('/test')
def other1():
    return render_template('testapp/index2.html')
@app.route('/sampleform',methods=["GET","POST"])
def sample_form():
    if request.method == 'GET':
        return render_template('testapp/sampleform.html')
    if request.method == 'POST':
        print('POSTデータ受け取ったので処理します。')
        #req1 = request.form['data1']
        q1=request.form["q1"]
        q2=request.form["q2"]
        q3=request.form["q3"]
        q4=request.form["q4"]
        q5=request.form["q5"]
        q6=request.form["q6"]
        q7=request.form["q7"]
        question=[q1,q2,q3,q4,q5,q6,q7]
        #return f'POST受け取ったよ: {question}'
        return render_template("testapp/index2.html",question=question)
