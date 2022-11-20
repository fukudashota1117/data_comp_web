from testapp import app
from flask import render_template,request
from testapp import score_23k

#mac Test success!
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
        #third commit!
        towntype=request.form["towntype"]
        q1=request.form["q1"]
        q2=request.form["q2"]
        q3=request.form["q3"]
        q4=request.form["q4"]
        q5=request.form["q5"]
        q6=request.form["q6"]
        q7=request.form["q7"]
        prio_1=request.form["prio_1"]
        prio_2=request.form["prio_2"]
        prio_3=request.form["prio_3"]
        prio_1=int(prio_1)
        prio_2=int(prio_2)
        prio_3=int(prio_3)
        priority=[prio_1,prio_2,prio_3]
        income=request.form["income"]
        question=[q1,q2,q3,q4,q5,q6,q7]
        question=[int(s) for s in question]
        #return f'POST受け取ったよ: {question}'
        rank_23k=score_23k.score(towntype,question,priority,income)
        rank_23k=rank_23k[:3]
        rank_23k=[rank_23k[0][0],rank_23k[1][0],rank_23k[2][0]]
        first_k=rank_23k[0]
        second_k=rank_23k[1]
        third_k=rank_23k[2]
        return render_template("testapp/index2.html",first_k=first_k,second_k=second_k,third_k=third_k,priority=priority)
