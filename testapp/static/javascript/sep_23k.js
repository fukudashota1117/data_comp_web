
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
        +'<p class="context">'
        +'大学が多い文教地区と閑静な住宅街が多くを占めている区です。住宅街、公園、教育機関、医療機関が多く点在しており治安が良く、暮らしたい街ランキングでは常に上位に位置する区です。'
        +'</p>';
        return h4;
    }
    else if (ku == arr_23k[0]) {
        var h0 = 
        '千代田区</p>'
        +'<img src'
        +'="/static/images/23k_picture/千代田区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'国会議事堂、内閣総理大臣官邸、最高裁判所をはじめとする日本の首都機能が集中。区の中央には皇居がある。日本屈指のオフィス街である丸の内や大手町、3大メガバンクの本店や大企業が多数集積しており、日本の金融経済の中核を担っている。皇居西側は、都内屈指の高級住宅街。'
        +'</p>';
        return h0;
    }
    else if (ku == arr_23k[1]) {
        var h1 = 
        '中央区</p>'
        +'<img src'
        +'="/static/images/23k_picture/中央区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'オフィス街・商業街の日本橋、都内屈指の高級繁華街の銀座があります。都心回帰の影響で近年は人口が急激に増加しており、商業地として地価が最も高いです。月島などの昔ながらの街並みもあり、観光客が多いことも知られています。'
        +'</p>';
        return h1;
    }
    else if (ku == arr_23k[2]) {
        var h2 = 
        '港区</p>'
        +'<img src'
        +'="/static/images/23k_picture/港区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'日本経済の中心を担う。虎ノ門、新橋・汐留、六本木などの大規模なオフィス街、麻生、白金台、高輪などの高級住宅街、青山、表参道などの商業エリア。区の人口の一割が外国人であり、国際色豊かな街である。区一人当たりの年収No.1'
        +'</p>';
        return h2;
    }
    else if (ku == arr_23k[3]) {
        var h3 = 
        '新宿区</p>'
        +'<img src'
        +'="/static/images/23k_picture/新宿区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'東京都の都庁所在地。日本最大の繁華街。商業地と住宅地、歴史ある地名と再開発地域、多国籍（アジア系）。大学・学校も多い。新宿御苑などの自然豊かな側面も持つ。'
        +'</p>';
        return h3;
    }
    else if (ku == arr_23k[5]) {
        var h5 = 
        '台東区</p>'
        +'<img src'
        +'="/static/images/23k_picture/台東区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'面積は23区の中で最も小さい。東京で最も古い下町エリア。観光地・文化財の多い街として外国人から人気。区は全体的に商業地であり、純粋な住宅地は一部である。'
        +'</p>';
        return h5;
    }
    else if (ku == arr_23k[6]) {
        var h6 = 
        '墨田区</p>'
        +'<img src'
        +'="/static/images/23k_picture/墨田区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'地域のコミュニケーションが積極的に図られ、中小製造業などのモノづくりが盛ん。魅力ある行事や名所も豊富。'
        +'</p>';
        return h6;
    }
    else if (ku == arr_23k[7]) {
        var h7 = 
        '江東区</p>'
        +'<img src'
        +'="/static/images/23k_picture/江東区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'都心にありながら豊かな水と緑に囲まれた癒しの空間が広がる『水彩都市』。交通・娯楽・医療・商業施設なんでもある。総合的にかなり住みやすい街である。'
        +'</p>';
        return h7;
    }
    else if (ku == arr_23k[8]) {
        var h8 = 
        '品川区</p>'
        +'<img src'
        +'="/static/images/23k_picture/品川区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'先進性と歴史性の魅力を兼ね備える。新幹線含め優れた交通アクセス、色彩豊かな公園と憩いの水辺、充実した子育て支援など住みやすい街である。'
        +'</p>';
        return h8;
    }
    else if (ku == arr_23k[9]) {
        var h9 = 
        '目黒区</p>'
        +'<img src'
        +'="/static/images/23k_picture/目黒区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'治安が良く、公園や川、センスの良い飲食店なども多い街として有名。のどかな雰囲気も多く、安心・安全な高級感溢れる街。ファミリーでも住みやすい。'
        +'</p>';
        return h9;
    }
    else if (ku == arr_23k[10]) {
        var h10 = 
        '大田区</p>'
        +'<img src'
        +'="/static/images/23k_picture/大田区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'駅や空港が近く、交通の弁が良いことで知られる。閑静な住宅街、賑やかな商業エリアなどが点在する。川や海、緑など自然が豊かである。臨海部には工場や物流施設が集積している。'
        +'</p>';
        return h10;
    }


    else if (ku == arr_23k[11]) {
        var h11 = 
        '世田谷区</p>'
        +'<img src'
        +'="/static/images/23k_picture/世田谷区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'子育て支援やサポートも充実しており、育児しやすい街としても人気が高い区です。 自然も多く、公園も充実しており、ペットや小さな子どもがいるファミリーにもおすすめ交通の便がよい、緑の豊かな区でもあります。'
        +'</p>';
        return h11;
    }
    else if (ku == arr_23k[12]) {
        var h12 = 
        '渋谷区</p>'
        +'<img src'
        +'="/static/images/23k_picture/渋谷区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'ファッションの中心地としても若者に人気の街で、観光客が多く訪れるスポットが点在しています。 さらに商業施設、ファッション関連企業が集まる商業としての街。渋谷駅周辺さえ除けば治安が良く、買い物スポットが充実していて、交通アクセスが良い'
        +'</p>';
        return h12;
    }
    else if (ku == arr_23k[13]) {
        var h13 = 
        '中野区</p>'
        +'<img src'
        +'="/static/images/23k_picture/中野区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'商店街や住宅街の色合いが強く残されています。 比較的安価な賃貸住宅が多いことでも知られ、様々な世代の人々が入り乱れて暮らしているという特色もあります。新宿に近いわりに家賃相場が安く、買い物環境も充実しているので住みやすい区。'
        +'</p>';
        return h13;
    }
    else if (ku == arr_23k[14]) {
        var h14 = 
        '杉並区</p>'
        +'<img src'
        +'="/static/images/23k_picture/杉並区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'新宿や渋谷へアクセスしやすく、東京や大手町、銀座といった都心にも通勤しやすい街。落ち着いた住宅街が広がり、公園が多く緑豊かであるなど、郊外の良さも持つエリアです。娯楽施設は比較的少ない地域ではあるが、杉並区の治安は23区中2位で、文京区の次に犯罪件数の少ない地域です。'
        +'</p>';
        return h14;
    }
    else if (ku == arr_23k[15]) {
        var h15 = 
        '豊島区</p>'
        +'<img src'
        +'="/static/images/23k_picture/豊島区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'池袋のような繁華街、お年寄りの巣鴨など都会的でありながら落ち着いた雰囲気も感じることできる街。近年は子育て支援にも手厚く、育児にも安心して取り組める街です。'
        +'</p>';
        return h15;
    }
    else if (ku == arr_23k[16]) {
        var h16 = 
        '北区</p>'
        +'<img src'
        +'="/static/images/23k_picture/北区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'身近にある子どもたちの遊び場や大人の憩いの場は、魅力的な生活環境につながっています。 また、軽快な交通アクセスが特徴。家賃相場も安いエリアが多いので、一人暮らし初心者にもおすすめの街です。'
        return h16;
    }
    else if (ku == arr_23k[17]) {
        var h17 = 
        '荒川区</p>'
        +'<img src'
        +'="/static/images/23k_picture/荒川区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'再開発も進んでおらず、下町の落ち着いた雰囲気が残る街が多い、大きな繁華街も無く治安が良い区です。治安ナンバーワン都市を目指して防犯対策を強化しており、年々犯罪数が減っています。さまざまな子育て支援策もあり「子育てしやすい街」という評価も。'
        +'</p>';
        return h17;
    }
    else if (ku == arr_23k[18]) {
        var h18 = 
        '板橋区</p>'
        +'<img src'
        +'="/static/images/23k_picture/板橋区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'通勤・通学や普段の生活で利用できる鉄道・交通網が充実し、利便性が高いこと区独自の子育て支援への取組、保育料が安いなど共働き子育てしやすい街ランキングで全国7位です。医療・福祉・介護サービスも充実しており安心できる街です。'
        +'</p>';
        return h18;
    }
    else if (ku == arr_23k[19]) {
        var h19 = 
        '練馬区</p>'
        +'<img src'
        +'="/static/images/23k_picture/練馬区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'現在もところどころに農地が残り、大規模公園が多いことから、緑に恵まれていることが特徴。大規模ショッピング施設も多く、環境と利便性を併せ持つ住宅地として人気を集めています。都心部へアクセスしやすいベッドタウンでありながら、繁華街もあってバランスが良い。'
        +'</p>';
        return h19;
    }
    else if (ku == arr_23k[20]) {
        var h20 = 
        '足立区</p>'
        +'<img src'
        +'="/static/images/23k_picture/足立区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'荒川をはじめとした水辺や区内に点在する公園の緑などの自然環境が豊かな街です。交通の便の良さや買い物の便利さが特徴としてあげられます。'
        +'</p>';
        return h20;
    }else if (ku == arr_23k[21]) {
        var h21 = 
        '葛飾区</p>'
        +'<img src'
        +'="/static/images/23k_picture/葛飾区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'昔ながらの人情味溢れた地域性があり、いわゆる川 の手・人情という表現があてはまる人と人の結びつきが強い地域です。商店街なども多く、物価が安いことでも有名で、生活がしやすいエリア葛飾区は子育て支援策も充実しています。 独自の支援策も打ち出し、子育て世帯をサポートしています。'
        +'</p>';
        return h21;
    }
    else if (ku == arr_23k[22]) {
        var h22 = 
        '江戸川区</p>'
        +'<img src'
        +'="/static/images/23k_picture/江戸川区.jpg"'
        +'width="680px" height="450px">'
        +'<p class="context">'
        +'豊かな河川と東京湾に面した、みどり豊かな水辺の都市です。JR総武線、JR京葉線、東京メトロ東西線、都営新宿線、京成本線と、多くの路線が通っているため、非常に交通の便が良いです。'
        +'</p>';
        return h22;
    }

}//それぞれのhtml作成用関数

ht1 = '<p class="ranking_header">'+'<img src="/static/images/1st.png" '+'width="50" height="50" class="ranking_crown">'+create_html(first_k);
document.write(ht1);
ht2 = '<p class="ranking_header">'+'<img src="/static/images/2nd.png" '+'width="50"" height="50" class="ranking_crown">'+create_html(second_k);
document.write(ht2);
ht3 = '<p class="ranking_header">'+'<img src="/static/images/3rd.png" '+'width="50" height="50" class="ranking_crown">'+create_html(third_k);
document.write(ht3);

