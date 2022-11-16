import pandas as pd
import numpy as np

norm_data=pd.read_csv("testapp/data/norm_data.csv")
norm_data=norm_data.set_index("地域")

rent_score={"400~600":{"江戸川区":1,"板橋区":1,"練馬区":1,"葛飾区":1,"足立区":1,"杉並区":1,"北区":1,"豊島区":1},
                "600~800":{"荒川区":1,"中野区":1,"世田谷区":1,"大田区":1,"文京区":1,"墨田区":1,"江東区":1},
                "800~1000":{"目黒区":1,"台東区":1,"品川区":1,"新宿区":1},
                "1000~":{"渋谷区":1,"中央区":1,"千代田区":1,"港区":1}}

def score(towntype,question,priority,income):


    #@title 点数計算
    dict_a={1:[5,5,1,1,5,5,5],2:[3,3,3,3,3,3,3],3:[1,1,5,5,1,1,1]}
    a=np.array(dict_a[int(towntype)])
    b=np.array(question)
    w=0.25
    whi_pri=priority

    pri=np.array([1,1,1,1,1,1,1])
    pri[whi_pri[0]-1]=1.5
    pri[whi_pri[1]-1]=1.3
    pri[whi_pri[2]-1]=1.1
    eff=1+(a-b)*w*pri#計算式
    abs=np.abs(a-b).mean()

    score={}
    for i in norm_data.index:
        score[i]=eff[0]*norm_data.loc[i,"子供"]#教育子育て
        score[i]+=eff[1]*norm_data.loc[i,"病院数"]#病院
        score[i]+=eff[2]*norm_data.loc[i,"犯罪件数"] #犯罪
        score[i]+=eff[3]*norm_data.loc[i,"公害合計"]#公害
        score[i]+=eff[4]*norm_data.loc[i,"買い物"]#買い物
        score[i]+=eff[5]*norm_data.loc[i,"飲食"]#飲食
        score[i]+=eff[6]*norm_data.loc[i,"アクセス"]#アクセス

    dict_income={1:"400~600",2:"600~800",3:"800~1000",4:"1000~"}
    for i in rent_score[dict_income[int(income)]].keys():
        score[i]+=rent_score[dict_income[int(income)]][i]#+abs

    score_sorted = sorted(score.items(), key=lambda x:x[1],reverse=True)
    return score_sorted