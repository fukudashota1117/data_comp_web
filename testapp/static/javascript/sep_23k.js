
var arr_23k = ['千代田区', '中央区', '港区', '新宿区', '文京区', '台東区', '墨田区', '江東区',
    '品川区', '目黒区', '大田区', '世田谷区', '渋谷区', '中野区', '杉並区', '豊島区',
    '北区', '荒川区', '板橋区', '練馬区', '足立区', '葛飾区', '江戸川区'];

function create_html(ku) {
    if (ku == arr_23k[4]) {
        var h4 = '<p>文京区</p>';
        return h4;
    }
    else if (ku = arr_23k[11]) {
        var h11 = '<p>世田谷区</p>';
        return h11;
    }
    else if (ku = arr_23k[16]) {
        var h16 = '<p>荒川区</p>';
        return h16;
    }
}//それぞれのhtml作成用関数

ht1 = create_html({{ first_k }});
alert(ht1.innerHTML);
ht2 = create_html({{ second_k }});
document.write(ht2);
ht3 = create_html({{ third_k }});
document.write(ht3);

