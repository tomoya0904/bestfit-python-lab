window.BF_DATA = {
  "categories": [
    {
      "id": "basic",
      "num": "01",
      "name": "変数・計算",
      "subtitle": "代入・表示・商と余り",
      "goal": "106への準備",
      "file": "basic.html"
    },
    {
      "id": "branch",
      "num": "02",
      "name": "条件分岐",
      "subtitle": "if / elif / else / %",
      "goal": "105⑴への準備",
      "file": "branch.html"
    },
    {
      "id": "loop",
      "num": "03",
      "name": "繰り返し",
      "subtitle": "for / range / 合計 / 複利",
      "goal": "101・105⑶⑷",
      "file": "loop.html"
    },
    {
      "id": "array",
      "num": "04",
      "name": "一次元配列",
      "subtitle": "リスト・最小値・最大値",
      "goal": "102",
      "file": "array.html"
    },
    {
      "id": "matrix",
      "num": "05",
      "name": "二次元配列",
      "subtitle": "行と列・二重ループ・九九",
      "goal": "103",
      "file": "matrix.html"
    },
    {
      "id": "function",
      "num": "06",
      "name": "関数",
      "subtitle": "引数・戻り値・再利用",
      "goal": "104",
      "file": "function.html"
    },
    {
      "id": "integrated",
      "num": "07",
      "name": "総合演習",
      "subtitle": "位の取り出し・硬貨",
      "goal": "105⑵・106",
      "file": "integrated.html"
    }
  ],
  "lessons": [
    {
      "cat": "basic",
      "id": "b01",
      "title": "まずは実行してみよう",
      "level": "見る→実行",
      "source": "p.70 順次構造",
      "goal": "プログラムは上から順番に動く。",
      "do": "まず「実行」してみよう。そのあと、好きな文字に書き換えてもう一度実行。",
      "code": "print('こんにちは')\nprint('情報Ⅰ')",
      "expected": "こんにちは\n情報Ⅰ",
      "stdin": "",
      "hint": "print() は文字や数字を表示する関数。文字は引用符で囲もう。",
      "why": "順次構造：1行目が終わってから2行目が実行される。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "basic",
      "id": "b02",
      "title": "変数は値を入れる箱",
      "level": "数字を変更",
      "source": "p.70 変数",
      "goal": "変数と代入の意味を知る。",
      "do": "まず実行し、次に x を 12 に変えて「12」が表示されるようにしよう。",
      "code": "x = 5\nprint(x)",
      "expected": "12",
      "stdin": "",
      "hint": "1行目の 5 を 12 に変更。",
      "why": "「x = 12」は、数学の等号ではなく「変数 x に12を代入する」という意味。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "basic",
      "id": "b03",
      "title": "変数の値を更新する",
      "level": "1行を書き換え",
      "source": "p.70 変数",
      "goal": "自分自身に足す処理を理解する。",
      "do": "「x = x + 3」の3を変更し、結果を 15 にしよう。",
      "code": "x = 8\nx = x + 3\nprint(x)",
      "expected": "15",
      "stdin": "",
      "hint": "8 に 7 を足すと15。",
      "why": "右辺を先に計算し、結果を左辺の変数に入れる。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "basic",
      "id": "b04",
      "title": "商と余りを使う",
      "level": "実行→考える",
      "source": "p.75 / 問106への準備",
      "goal": "//（商）と %（余り）の違い。",
      "do": "まず実行。次に 23円を10円硬貨と1円硬貨に分けるように、xを23に変更しよう。",
      "code": "x = 17\nprint(x // 10)\nprint(x % 10)",
      "expected": "2\n3",
      "stdin": "",
      "hint": "23 // 10 は 2、23 % 10 は 3。",
      "why": "// は割り算の商の整数部分（正の整数で考える）。% は割った余り。",
      "quiz": [],
      "trace": [
        "23 ÷ 10 → 商2、余り3",
        "10円硬貨2枚、残り3円 → 1円硬貨3枚"
      ],
      "conceal": false
    },
    {
      "cat": "basic",
      "id": "b05",
      "title": "小さな計算を組み立てる",
      "level": "チャレンジ",
      "source": "p.75 / 問106への準備",
      "goal": "商を使って50円硬貨の枚数を求める。",
      "do": "x = 347円 のとき、50円硬貨が6枚と表示されるように「// 10」を修正しよう。",
      "code": "x = 347\nnum50 = x // 10\nprint(num50)",
      "expected": "6",
      "stdin": "",
      "hint": "50円硬貨の枚数 → 347 // 50。",
      "why": "50円硬貨は 347 ÷ 50 の商の整数部分で6枚。余りは47円。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "branch",
      "id": "c01",
      "title": "条件が成り立つときだけ",
      "level": "数字を変更",
      "source": "p.71 選択構造",
      "goal": "if と else の分岐。",
      "do": "xを20に変更し、「成人」が表示されるようにしよう。",
      "code": "x = 15\nif x >= 18:\n    print(\"成人\")\nelse:\n    print(\"18歳未満\")",
      "expected": "成人",
      "stdin": "",
      "hint": "最初の x = 15 を x = 20 に。",
      "why": "条件式がTrueならifの下、そうでなければelseの下を実行する。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "branch",
      "id": "c02",
      "title": "余りで偶数かを判断",
      "level": "条件式を変更",
      "source": "p.71 例題55 / p.75 問105⑴",
      "goal": "% と == を組み合わせる。",
      "do": "偶数のときだけ「Yes」が出るよう、ifの条件を直そう。",
      "code": "x = int(input('整数を入力: '))\nif x % 3 == 0:\n    print('Yes')\nelse:\n    print('No')",
      "expected": "整数を入力: Yes",
      "stdin": "10",
      "hint": "偶数は2で割った余りが0。% 3 を % 2 に変えよう。",
      "why": "== は比較（等しいか）、= は代入。12 % 2 == 0 はTrue。",
      "quiz": [
        {
          "kind": "choice",
          "question": "ベストフィット105⑴：このプログラムは何を判断する？",
          "options": [
            "正か負か",
            "偶数か奇数か",
            "3桁かどうか"
          ],
          "answer": "偶数か奇数か",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "branch",
      "id": "c03",
      "title": "FIZZとBUZZ（入れ子）",
      "level": "実行→予想",
      "source": "p.71 例題55",
      "goal": "字下げされた処理の範囲。",
      "do": "最初は x=30 で実行。次に x=9 にして、FIZZだけが表示されることを確認。",
      "code": "x = 30\nif x % 3 == 0:\n    print('FIZZ')\n    if x % 5 == 0:\n        print('BUZZ')",
      "expected": "FIZZ\nBUZZ",
      "stdin": "",
      "hint": "x が3の倍数か確認してから、さらに5の倍数か確認する。",
      "why": "内側の if は、外側の if が成立した場合だけ実行される。x=9ではFIZZだけ。",
      "quiz": [
        {
          "kind": "choice",
          "question": "x=10 に変えると何が表示される？",
          "options": [
            "FIZZ",
            "BUZZ",
            "何も表示されない"
          ],
          "answer": "何も表示されない",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "branch",
      "id": "c04",
      "title": "絶対値を求めよう",
      "level": "条件を書き換え",
      "source": "p.72 / 問100",
      "goal": "負数の符号を反転する。",
      "do": "-8 を 8 と表示するように「if x > 0:」を修正しよう。",
      "code": "x = -8\nif x > 0:\n    x = -x\nprint(x)",
      "expected": "8",
      "stdin": "",
      "hint": "x が0より小さいとき符号を反転：x < 0",
      "why": "-(-8) = 8。0以上の値は変更する必要がない。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "branch",
      "id": "c05",
      "title": "映画館の料金を決める",
      "level": "コードを読む",
      "source": "p.72 / 問99",
      "goal": "複数分岐 elif の使い方。",
      "do": "25歳の料金を確認してみよう。次に x=16、x=65でも試してみよう。",
      "code": "x = 25\nif x <= 18:\n    print(1000)\nelif x >= 60:\n    print(1200)\nelse:\n    print(1800)",
      "expected": "1800",
      "stdin": "",
      "hint": "25歳は「18歳以下」でも「60歳以上」でもない。",
      "why": "p.72のフローチャートと同じで、19〜59歳は1800円。",
      "quiz": [
        {
          "kind": "choice",
          "question": "x=65なら料金は？",
          "options": [
            "1000円",
            "1200円",
            "1800円"
          ],
          "answer": "1200円",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "loop",
      "id": "l01",
      "title": "同じ処理を何回も",
      "level": "数字を変更",
      "source": "p.71 反復構造",
      "goal": "range(n) が0からn-1まで回す。",
      "do": "3回の表示を5回にするよう、range(3)を書き換えよう。",
      "code": "for i in range(3):\n    print('こんにちは')",
      "expected": "こんにちは\nこんにちは\nこんにちは\nこんにちは\nこんにちは",
      "stdin": "",
      "hint": "range(5) は i=0,1,2,3,4 の5回。",
      "why": "for行の下で字下げされたprintが5回実行される。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "loop",
      "id": "l02",
      "title": "インデントで表示回数が変わる",
      "level": "実行→選ぶ",
      "source": "p.72 例題56",
      "goal": "printの字下げと繰り返し。",
      "do": "まず1回だけ5と表示されることを確認。その後print(x)を4つ空白で字下げするとどうなる？",
      "code": "x = 0\nfor i in range(5):\n    x = x + 1\nprint(x)",
      "expected": "5",
      "stdin": "",
      "hint": "printがforと同じ位置ならループの外。",
      "why": "x=x+1だけが5回。print(x)は最後に1回だけ。",
      "quiz": [
        {
          "kind": "choice",
          "question": "print(x)を4文字下げると表示は何回？",
          "options": [
            "1回",
            "5回",
            "6回"
          ],
          "answer": "5回",
          "why": ""
        }
      ],
      "trace": [
        "繰り返し後のx：0→1→2→3→4→5",
        "ループの外にある print(x) は1度だけ"
      ],
      "conceal": false
    },
    {
      "cat": "loop",
      "id": "l03",
      "title": "0から順に足してみよう",
      "level": "数字を修正",
      "source": "p.72 例題56",
      "goal": "iが0〜4に変わることを知る。",
      "do": "0、1、3、6、10の順に表示するため、x = x + 1 を修正しよう。",
      "code": "x = 0\nfor i in range(5):\n    x = x + 1\n    print(x)",
      "expected": "0\n1\n3\n6\n10",
      "stdin": "",
      "hint": "毎回1を足すのではなく、変数 i を足す。",
      "why": "iは0→1→2→3→4。累積和は0→1→3→6→10。",
      "quiz": [],
      "trace": [
        "i=0 → x=0",
        "i=1 → x=1",
        "i=2 → x=3",
        "i=3 → x=6",
        "i=4 → x=10"
      ],
      "conceal": false
    },
    {
      "cat": "loop",
      "id": "l04",
      "title": "1から入力値までの和",
      "level": "数値を変更",
      "source": "p.75 / 問105⑶",
      "goal": "range(1, x+1) で1〜x。",
      "do": "1〜10の和55を表示しよう。入力欄の「5」を「10」に変えて実行。",
      "code": "x = int(input('正の整数: '))\nkekka = 0\nfor i in range(1, x + 1):\n    kekka = kekka + i\nprint(kekka)",
      "expected": "正の整数: 55",
      "stdin": "5",
      "hint": "コードではなく下の「入力値」欄を10に変更する。",
      "why": "rangeの終点は含まれないため、x+1にするとxまで足せる。",
      "quiz": [
        {
          "kind": "choice",
          "question": "問105⑶：何をするプログラム？",
          "options": [
            "入力値までの合計を求める",
            "入力値の約数を出す",
            "入力値を2乗する"
          ],
          "answer": "入力値までの合計を求める",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false,
      "gradeInput": "10"
    },
    {
      "cat": "loop",
      "id": "l05",
      "title": "約数を全部表示する",
      "level": "実行→選ぶ",
      "source": "p.75 / 問105⑷",
      "goal": "繰り返しと条件分岐の組合せ。",
      "do": "入力12で実行し、約数を確かめよう。続いて入力6などでも試してみよう。",
      "code": "x = int(input('正の整数: '))\nretsu = []\nfor i in range(1, x + 1):\n    if x % i == 0:\n        retsu.append(i)\nprint(retsu)",
      "expected": "正の整数: [1, 2, 3, 4, 6, 12]",
      "stdin": "12",
      "hint": "x % i == 0 なら割り切れる → iをリストへ追加する。",
      "why": "retsu.append(i)はリストの最後にiを追加する。",
      "quiz": [
        {
          "kind": "choice",
          "question": "問105⑷：どんな数がリストに入る？",
          "options": [
            "xより大きい数",
            "xの約数",
            "偶数だけ"
          ],
          "answer": "xの約数",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "loop",
      "id": "l06",
      "title": "複利を1年ずつ計算",
      "level": "コードを読む",
      "source": "p.73 / 問101への準備",
      "goal": "預金額に1.01を繰り返しかける。",
      "do": "10000円を年1%で3年間増やした推移を確認しよう。",
      "code": "yokin = 10000\nrisoku = 1.0\nfor i in range(3):\n    yokin = yokin * (1 + risoku / 100)\n    print(int(yokin))",
      "expected": "10100\n10201\n10303",
      "stdin": "",
      "hint": "1年目10100、2年目10201、3年目10303（小数点以下切捨て）。",
      "why": "利率は一定1%。増えるのは預金額。int()は小数部分を切り捨てる。",
      "quiz": [],
      "trace": [
        "1年目：10000×1.01＝10100",
        "2年目：10100×1.01＝10201",
        "3年目：10201×1.01＝10303.01 → 表示は10303"
      ],
      "conceal": false
    },
    {
      "cat": "loop",
      "id": "l07",
      "title": "★ ベストフィット 101",
      "level": "教科書に挑戦",
      "source": "p.73 問101",
      "goal": "複利の10年分の表示について正しく説明する。",
      "do": "最初に正しい説明を選び、その後「実行」して本当に10行表示されるか確かめよう。",
      "code": "yokin = 10000\nrisoku = 1.0\nfor i in range(10):\n    yokin = yokin * (1 + risoku / 100)\n    print(int(yokin))",
      "expected": "10100\n10201\n10303\n10406\n10510\n10615\n10721\n10828\n10936\n11046",
      "stdin": "",
      "hint": "print() の位置は、for文の下で字下げされている。",
      "why": "正答は(エ)。表示処理も10回繰り返され、利率は1%のまま。",
      "quiz": [
        {
          "kind": "choice",
          "question": "問101：最も適当な記述はどれ？",
          "options": [
            "(ア) 利息は毎年100分の1ずつ増加",
            "(イ) 預金額に年数は関係ない",
            "(ウ) 計算後に一度だけ表示",
            "(エ) 年数分繰り返し表示"
          ],
          "answer": "(エ) 年数分繰り返し表示",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": true
    },
    {
      "cat": "array",
      "id": "a01",
      "title": "配列に並んだデータ",
      "level": "数字を変更",
      "source": "p.71 配列",
      "goal": "添字が0から始まる。",
      "do": "2番目の得点「40」を表示するよう [0] を変えよう。",
      "code": "Tokuten = [50, 40, 90]\nprint(Tokuten[0])",
      "expected": "40",
      "stdin": "",
      "hint": "Pythonは0番目から数えるので、2番目は添字[1]。",
      "why": "配列の位置を表す数字が「添字」。Pythonの先頭は添字0。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "array",
      "id": "a02",
      "title": "配列を順に取り出す",
      "level": "実行→選ぶ",
      "source": "p.72 例題57",
      "goal": "for x in 配列 を理解する。",
      "do": "まず実行して、配列の要素が順番に表示されることを確かめよう。",
      "code": "kakaku = [580, 970, 430]\nfor x in kakaku:\n    print(x)",
      "expected": "580\n970\n430",
      "stdin": "",
      "hint": "xに580→970→430と順番に入る。",
      "why": "for x in kakaku は配列のすべての要素を一つずつ取り出す。",
      "quiz": [
        {
          "kind": "choice",
          "question": "このfor文は何回繰り返される？",
          "options": [
            "2回",
            "3回",
            "4回"
          ],
          "answer": "3回",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "array",
      "id": "a03",
      "title": "いちばん安い値を探す",
      "level": "条件を変更",
      "source": "p.72 例題57",
      "goal": "小さい数が見つかれば最小値を更新。",
      "do": "最安値430と表示されるよう if の比較演算子を修正しよう。",
      "code": "kakaku = [580, 970, 430, 820, 760]\nsaisyo = kakaku[0]\nfor x in kakaku:\n    if x > saisyo:\n        saisyo = x\nprint('最安値:', saisyo)",
      "expected": "最安値: 430",
      "stdin": "",
      "hint": "最小値を探すので x < saisyo とする。",
      "why": "現在の最小値と順番に比較し、より小さいときだけ更新する。",
      "quiz": [],
      "trace": [
        "初期値 saisyo=580",
        "970：更新しない",
        "430：430に更新",
        "820,760：更新しない →430"
      ],
      "conceal": false
    },
    {
      "cat": "array",
      "id": "a04",
      "title": "最高点と出席番号",
      "level": "実行→理解",
      "source": "p.74 / 問102への準備",
      "goal": "最高点と位置を一緒に記録する。",
      "do": "4人分の最高点と出席番号を表示してみよう。",
      "code": "Tokuten = [50, 40, 90, 70]\nsaidai = 0\nbango = 0\nfor i in range(len(Tokuten)):\n    if Tokuten[i] > saidai:\n        saidai = Tokuten[i]\n        bango = i\nprint('最高点：', saidai, '出席番号：', bango + 1)",
      "expected": "最高点： 90 出席番号： 3",
      "stdin": "",
      "hint": "最大値saidaiを変えるとき、添字bangoも一緒に更新。",
      "why": "Pythonの添字は0開始。出席番号は1開始なので表示時にbango+1とする。",
      "quiz": [],
      "trace": [
        "i=0：50 → saidai=50、bango=0",
        "i=1：40 → 更新なし",
        "i=2：90 → saidai=90、bango=2",
        "i=3：70 → 更新なし、出席番号3"
      ],
      "conceal": false
    },
    {
      "cat": "array",
      "id": "a05",
      "title": "★ ベストフィット 102",
      "level": "教科書に挑戦",
      "source": "p.74 問102",
      "goal": "教科書（添字1開始）の穴埋めを解ける。",
      "do": "教科書の空欄①②③を答えよう。その後、Pythonで同じ処理を実行して違いを確かめる。",
      "code": "# Python版：添字は0から始まる\nTokuten = [50, 40, 95, 30, 70]\nsaidai = 0\nbango = 0\nfor i in range(len(Tokuten)):\n    if Tokuten[i] > saidai:\n        saidai = Tokuten[i]\n        bango = i\nprint('最高点：', saidai, '出席番号：', bango + 1)",
      "expected": "最高点： 95 出席番号： 3",
      "stdin": "",
      "hint": "教科書は添字1開始。①は要素数、②は大きければ更新、③は出席番号を記録した変数。",
      "why": "解答：①(ア)要素数(Tokuten)、②(オ)>、③(ク)bango。Pythonは添字0開始なので range(len(...))、表示はbango+1。",
      "quiz": [
        {
          "kind": "choice",
          "question": "① 繰り返しの最後の添字（教科書：1開始）",
          "options": [
            "(ア) 要素数(Tokuten)",
            "(イ) 要素数(Tokuten)-1",
            "(ウ) 要素数(Tokuten)+1"
          ],
          "answer": "(ア) 要素数(Tokuten)",
          "why": ""
        },
        {
          "kind": "choice",
          "question": "② 最高点を更新する比較演算子",
          "options": [
            "(エ) <",
            "(オ) >",
            "(カ) =="
          ],
          "answer": "(オ) >",
          "why": ""
        },
        {
          "kind": "choice",
          "question": "③ 出席番号として表示するもの（教科書）",
          "options": [
            "(キ) i",
            "(ク) bango",
            "(ケ) bango + 1"
          ],
          "answer": "(ク) bango",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": true
    },
    {
      "cat": "matrix",
      "id": "m01",
      "title": "縦横に並ぶ二次元配列",
      "level": "数字を変更",
      "source": "p.72 例題58",
      "goal": "二つの添字を読める。",
      "do": "「33」を表示できるように最後の [0][1] を直そう。",
      "code": "a = [[1, 2, 3], [11, 22, 33]]\nprint(a[0][1])",
      "expected": "33",
      "stdin": "",
      "hint": "2行目の3番目。添字は[1][2]。",
      "why": "a[行][列]の順で指定する。0始まりなので2行目は[1]、3列目は[2]。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "matrix",
      "id": "m02",
      "title": "配列の月と日を読み取る",
      "level": "実行→選ぶ",
      "source": "p.72 例題58",
      "goal": "kousui[2][8]の場所を理解する。",
      "do": "まず実行してから、何月何日を表すか考えよう。",
      "code": "kousui = [[0] * 31 for _ in range(12)]\nkousui[2][8] = 12\nprint(kousui[2][8])",
      "expected": "12",
      "stdin": "",
      "hint": "月も日も0から数えている。2は3番目の月、8は9番目の日。",
      "why": "例題58の答えは3月9日。値12はこの教材で置いた仮の降水量。",
      "quiz": [
        {
          "kind": "choice",
          "question": "kousui[2][8]は何月何日？",
          "options": [
            "2月8日",
            "3月8日",
            "3月9日"
          ],
          "answer": "3月9日",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "matrix",
      "id": "m03",
      "title": "二重の繰り返しで九九",
      "level": "数字を変更",
      "source": "p.74 / 問103への準備",
      "goal": "外側のdanと内側のkazu。",
      "do": "2の段を1行出したら、外側のrange(2,3)をrange(2,4)に変えて、3の段まで表示しよう。",
      "code": "for dan in range(2, 3):\n    for kazu in range(1, 4):\n        print(dan * kazu, end=\" \")\n    print()",
      "expected": "2 4 6 \n3 6 9 ",
      "stdin": "",
      "hint": "外側ループは段。range(2,4)ならdan=2,3。",
      "why": "内側のループが終わるたびに print() で改行して、段を分ける。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "matrix",
      "id": "m04",
      "title": "★ ベストフィット 103",
      "level": "教科書に挑戦",
      "source": "p.74 問103",
      "goal": "1段分を9回表示できる。",
      "do": "教科書の空欄①と、配列表示()に渡す引数を答えよう。次にPythonの9×9の表を実行。",
      "code": "Kuku = [[0] * 9 for _ in range(9)]\nfor dan in range(1, 10):\n    for kazu in range(1, 10):\n        Kuku[dan - 1][kazu - 1] = dan * kazu\n    print(Kuku[dan - 1])",
      "expected": "[1, 2, 3, 4, 5, 6, 7, 8, 9]\n[2, 4, 6, 8, 10, 12, 14, 16, 18]\n[3, 6, 9, 12, 15, 18, 21, 24, 27]\n[4, 8, 12, 16, 20, 24, 28, 32, 36]\n[5, 10, 15, 20, 25, 30, 35, 40, 45]\n[6, 12, 18, 24, 30, 36, 42, 48, 54]\n[7, 14, 21, 28, 35, 42, 49, 56, 63]\n[8, 16, 24, 32, 40, 48, 56, 64, 72]\n[9, 18, 27, 36, 45, 54, 63, 72, 81]",
      "stdin": "",
      "hint": "(04)で九九の数を代入後、(05)は「内側forの外、外側forの中」に置く。",
      "why": "⑴03行目と揃えると、kazuのループ終了後に段ごと表示（答え03）。⑵(イ)Kuku[dan]。Pythonの二次元配列は0開始なので[dan-1]。",
      "quiz": [
        {
          "kind": "text",
          "question": "⑴ 空欄①に入る行番号（半角数字2桁）",
          "answer": "03",
          "why": ""
        },
        {
          "kind": "choice",
          "question": "⑵ 配列表示() に渡すもの（教科書）",
          "options": [
            "(ア) Kuku",
            "(イ) Kuku[dan]",
            "(ウ) Kuku[kazu]",
            "(エ) Kuku[dan][kazu]"
          ],
          "answer": "(イ) Kuku[dan]",
          "why": ""
        }
      ],
      "trace": [
        "dan=1: 1の段を9個代入→1行表示",
        "dan=2: 2の段を9個代入→1行表示",
        "…",
        "dan=9: 9の段を9個代入→1行表示（計9行）"
      ],
      "conceal": true
    },
    {
      "cat": "function",
      "id": "f01",
      "title": "関数は処理のひとまとめ",
      "level": "実行→変える",
      "source": "p.71 関数",
      "goal": "defと関数の呼び出し。",
      "do": "printの文字を「おはよう」に変更し、関数から表示させよう。",
      "code": "def aisatsu():\n    print('こんにちは')\naisatsu()",
      "expected": "おはよう",
      "stdin": "",
      "hint": "defの下の文字列を変更。",
      "why": "defで関数を定義するだけでは動かない。aisatsu()と呼び出して初めて実行する。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "function",
      "id": "f02",
      "title": "関数に値を渡す",
      "level": "数値を変更",
      "source": "p.71 三角形の面積",
      "goal": "引数の働き。",
      "do": "底辺8、高さ4の面積16になるよう、関数を呼び出すときの数字を修正しよう。",
      "code": "def sankaku(teihen, takasa):\n    return teihen * takasa / 2\nprint(sankaku(8, 2))",
      "expected": "16.0",
      "stdin": "",
      "hint": "sankaku(8,4)にすると8×4÷2=16。",
      "why": "teihen、takasaは引数。returnで呼び出し元へ計算結果を返す。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "function",
      "id": "f03",
      "title": "税込価格を関数で求める",
      "level": "数字を変更",
      "source": "p.72 例題59",
      "goal": "同じ関数を別の引数で使える。",
      "do": "1980円の10%・8%税込価格が表示されるように、2回目の税率を修正しよう。",
      "code": "def zeikomi(kingaku, tax):\n    return kingaku + kingaku * tax // 100\nkakaku = 1980\nprint(zeikomi(kakaku, 10))\nprint(zeikomi(kakaku, 10))",
      "expected": "2178\n2138",
      "stdin": "",
      "hint": "2回目の関数呼び出しの 10 を 8 にする。",
      "why": "関数は何度でも呼び出せる。引数を変えれば結果も変わる。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "function",
      "id": "f04",
      "title": "return と print は違う",
      "level": "コードを読む",
      "source": "p.74 / 問104への準備",
      "goal": "戻り値と表示の区別。",
      "do": "半径2の円の面積を表示しよう。returnの結果がprintに渡る。",
      "code": "def func(kazu):\n    pai = 3.14\n    return pai * kazu * kazu\nprint(func(2))",
      "expected": "12.56",
      "stdin": "",
      "hint": "3.14 × 2 × 2 = 12.56。",
      "why": "returnは「値を返す」処理。画面に表示しているのは関数の外のprint。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "function",
      "id": "f05",
      "title": "★ ベストフィット 104",
      "level": "教科書に挑戦",
      "source": "p.74 問104",
      "goal": "関数の戻り値を予想できる。",
      "do": "x=5を入力すると「答えは」の後に何が表示される？ 予想を回答してから実行しよう。",
      "code": "def func(kazu):\n    pai = 3.14\n    return pai * kazu * kazu\nx = float(input('正の数を入力: '))\nprint('答えは', func(x))",
      "expected": "正の数を入力: 答えは 78.5",
      "stdin": "5",
      "hint": "3.14 × 5 × 5 = 78.5。",
      "why": "引数kazuに5.0が渡され、returnで78.5が返される。",
      "quiz": [
        {
          "kind": "text",
          "question": "「答えは」の直後に表示される数値",
          "answer": "78.5",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": true
    },
    {
      "cat": "integrated",
      "id": "i01",
      "title": "3桁の数字を逆さに",
      "level": "コードを読む",
      "source": "p.75 / 問105⑵",
      "goal": "// と % を組み合わせる。",
      "do": "入力123を321にして表示する処理を確認。次に456も試してみよう。",
      "code": "x = int(input('3桁の整数: '))\nn100 = x // 100\nn10 = (x % 100) // 10\nn1 = x % 10\nprint(n1 * 100 + n10 * 10 + n100)",
      "expected": "3桁の整数: 321",
      "stdin": "123",
      "hint": "123の百の位は1、十の位は2、一の位は3。3×100+2×10+1。",
      "why": "問105⑵：入力された3桁の数字の並びを逆順にして表示。",
      "quiz": [
        {
          "kind": "choice",
          "question": "問105⑵：このプログラムは何をする？",
          "options": [
            "3桁を逆に並べる",
            "3桁の合計を求める",
            "3桁かどうか判定する"
          ],
          "answer": "3桁を逆に並べる",
          "why": ""
        }
      ],
      "trace": [
        "123 // 100 → 1",
        "(123 % 100) // 10 → 2",
        "123 % 10 → 3",
        "3×100+2×10+1 → 321"
      ],
      "conceal": false
    },
    {
      "cat": "integrated",
      "id": "i02",
      "title": "50円で何枚払える？",
      "level": "数値を書き換え",
      "source": "p.75 / 問106への準備",
      "goal": "大きい硬貨から先に考える。",
      "do": "347円に対し50円硬貨が6枚、残りが47円になるよう修正しよう。",
      "code": "x = 347\nnum50 = x // 10\nnokori = x - num50 * 50\nprint(num50)\nprint(nokori)",
      "expected": "6\n47",
      "stdin": "",
      "hint": "50円硬貨の枚数は347 // 50。",
      "why": "大きい硬貨から決める。347−6×50＝47。",
      "quiz": [],
      "trace": [],
      "conceal": false
    },
    {
      "cat": "integrated",
      "id": "i03",
      "title": "10円・1円も計算",
      "level": "1行を書き換え",
      "source": "p.75 / 問106への準備",
      "goal": "残金を使った硬貨の枚数。",
      "do": "50円6枚、10円4枚、1円7枚、合計17枚を表示するように10円硬貨の式を直そう。",
      "code": "x = 347\nnum50 = x // 50\nnum10 = (x - num50 * 50) // 50\nnum1 = x - num50 * 50 - num10 * 10\nprint(num50, num10, num1)\nprint(num50 + num10 + num1)",
      "expected": "6 4 7\n17",
      "stdin": "",
      "hint": "num10の計算では、残った金額を10で割る。",
      "why": "347円＝50円×6＋10円×4＋1円×7。6+4+7=17枚。",
      "quiz": [],
      "trace": [
        "347//50 → 6枚、残り47円",
        "47//10 → 4枚、残り7円",
        "1円7枚、合計6+4+7=17枚"
      ],
      "conceal": false
    },
    {
      "cat": "integrated",
      "id": "i04",
      "title": "★ ベストフィット 106",
      "level": "教科書に挑戦",
      "source": "p.75 問106",
      "goal": "硬貨の最小枚数を求める5つの空欄。",
      "do": "教科書の空欄①〜⑤（いずれも数字）を答えて、347円の例で実行しよう。",
      "code": "x = int(input('代金を入力: '))\nnum50 = x // 50\nnum10 = (x - num50 * 50) // 10\nnum1 = x - num50 * 50 - num10 * 10\nprint('最小限の枚数は', num50 + num10 + num1, '枚')",
      "expected": "代金を入力: 最小限の枚数は 17 枚",
      "stdin": "347",
      "hint": "まず50円の枚数→残金の10円の枚数→残りの1円の枚数。",
      "why": "解答：①50、②50、③10、④50、⑤10。347円なら6+4+7=17枚。",
      "quiz": [
        {
          "kind": "text",
          "question": "① 50円硬貨の枚数を求める除数",
          "answer": "50",
          "why": ""
        },
        {
          "kind": "text",
          "question": "② 50円硬貨の金額として掛ける数",
          "answer": "50",
          "why": ""
        },
        {
          "kind": "text",
          "question": "③ 10円硬貨の枚数を求める除数",
          "answer": "10",
          "why": ""
        },
        {
          "kind": "text",
          "question": "④ 50円硬貨の合計金額の単価",
          "answer": "50",
          "why": ""
        },
        {
          "kind": "text",
          "question": "⑤ 10円硬貨の合計金額の単価",
          "answer": "10",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": true
    },
    {
      "cat": "integrated",
      "id": "i05",
      "title": "★ ベストフィット 105 総まとめ",
      "level": "教科書に挑戦",
      "source": "p.75 問105⑴〜⑷",
      "goal": "4つのプログラムを説明できる。",
      "do": "101〜106の総仕上げ。4つの処理の役割を選び、それぞれの実行結果と一致するか確認しよう。",
      "code": "# 問105⑴〜⑷は他のページで実際に実行できます\n# ここでは4つの動きをまとめて確認します\nprint('⑴', 12 % 2 == 0)\nprint('⑵', 3 * 100 + 2 * 10 + 1)\nprint('⑶', sum(range(1, 6)))\nprint('⑷', [i for i in range(1, 13) if 12 % i == 0])",
      "expected": "⑴ True\n⑵ 321\n⑶ 15\n⑷ [1, 2, 3, 4, 6, 12]",
      "stdin": "",
      "hint": "⑴偶数、⑵3桁逆順、⑶1〜xの和、⑷約数。",
      "why": "問105の各サンプルの詳細は「条件分岐」「繰り返し」「総合演習」で学べる。",
      "quiz": [
        {
          "kind": "choice",
          "question": "⑴ x%2==0 の役割",
          "options": [
            "偶数か判断",
            "約数を表示",
            "絶対値を表示"
          ],
          "answer": "偶数か判断",
          "why": ""
        },
        {
          "kind": "choice",
          "question": "⑵ 位を取り出す処理",
          "options": [
            "値を3倍する",
            "3桁を逆順にする",
            "百の位だけ表示"
          ],
          "answer": "3桁を逆順にする",
          "why": ""
        },
        {
          "kind": "choice",
          "question": "⑶ 1からxまで繰り返す処理",
          "options": [
            "合計を求める",
            "最大値を求める",
            "倍数だけ求める"
          ],
          "answer": "合計を求める",
          "why": ""
        },
        {
          "kind": "choice",
          "question": "⑷ x%i==0 でリストに追加",
          "options": [
            "平方根",
            "約数",
            "素数だけ"
          ],
          "answer": "約数",
          "why": ""
        }
      ],
      "trace": [],
      "conceal": true
    }
  ]
};
