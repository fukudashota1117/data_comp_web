
var arr_23k = ['千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区',
    '品川区', '目黒区', '大田区', '世田谷区', '渋谷区', '中野区', '杉並区', '豊島区',
    '北区', '荒川区', '板橋区', '練馬区', '足立区', '葛飾区', '江戸川区'];
var first_k = document.getElementById('first_k');
var second_k = document.getElementById('second_k');
var third_k = document.getElementById('third_k');
first_k=first_k.innerHTML
second_k=second_k.innerHTML
third_k=third_k.innerHTML

function create_html(ku) {
    if (ku == arr_23k[4]) {
        var h4 = 
        '文京区</p>'
        +'<img src'
        +'="/static/images/23k_picture/文京区.jpg"'
        +'width="680px" height="450px">'
        +'<p>'
        +'大学が多い文教地区と閑静な住宅街が多くを占めている区です。住宅街、公園、教育機関、医療機関が多く点在しており治安が良く、暮らしたい街ランキングでは常に上位に位置する区です。'
        +'</p>';
        return h4;
    }
    else if (ku == arr_23k[11]) {
        var h11 = 
        '世田谷区</p>'
        +'<img src'
        +'="/static/images/23k_picture/世田谷区.jpg"'
        +'width="680px" height="450px">'
        +'<p>'
        +'子育て支援やサポートも充実しており、育児しやすい街としても人気が高い区です。 自然も多く、公園も充実しており、ペットや小さな子どもがいるファミリーにもおすすめ交通の便がよい、緑の豊かな区でもあります。'
        +'</p>';
        return h11;
    }
    else if (ku == arr_23k[17]) {
        var h17 = 
        '荒川区</p>'
        +'<img src'
        +'="/static/images/23k_picture/荒川区.jpg"'
        +'width="680px" height="450px">'
        +'<p>'
        +'再開発も進んでおらず、下町の落ち着いた雰囲気が残る街が多い、大きな繁華街も無く治安が良い区です。治安ナンバーワン都市を目指して防犯対策を強化しており、年々犯罪数が減っています。さまざまな子育て支援策もあり「子育てしやすい街」という評価も。'
        +'</p>';
        return h17;
    }
}//それぞれのhtml作成用関数

ht1 = '<p>'+'<img src="/static/images/1st.png" '+'width="50" height="50">'+create_html(first_k);
document.write(ht1);
ht2 = '<p>'+'<img src="/static/images/2nd.png" '+'width="50"" height="50">'+create_html(second_k);
document.write(ht2);
ht3 = '<p>'+'<img src="/static/images/3rd.png" '+'width="50" height="50">'+create_html(third_k);
document.write(ht3);

