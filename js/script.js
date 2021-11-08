

var num = 1;

var q = {
    //외향, 내향
    1: {
        "question": "친구와 둘이 만나기로 했는데<br />모르는 사람이 같이 온다고 한다.",
        "question2": "일단 알겠다고 하고 자리에 나간다<br />자리에 나간 나의 행동은?",
        "type": "EI",
        "A": "조금 불편하지만 최대한 티를 덜내며<br />얘기를 나누려고 노력한다.",
        "B": "만나자마자 30분만에 친해져서<br />번호 교환을 한다."
    },
    //사회적 인정욕구
    2: {
        "question": "동아리 활동을 열심히 하던 중<br />회장 자리를 제안받았다.",
        "question2": "그래! 내가 할게~~!<br />흔쾌히 수락했다면 그 이유는?",
        "type": "EI",
        "A": "명함을 내밀며 회장이라고 소개하는<br />내 모습을 상상하니 멋있어서",
        "B": "어디가서 해보기 힘든 경험일 듯<br />나의 성장을 위해 수락한다."
    },
    //상황에 타협 or 설득
    3: {
        "question": "친구와 베라를 갔는데<br />민트초코 봉봉을 담자고한다...",
        "question2": "민트초코 치약맛 나서 별로인데...<br />어떻게 얘기할까?",
        "type": "EI",
        "A": "민트초코를 못먹는 이유를 말하며<br />다른 맛으로 담자고 한다.",
        "B": "취향존중 해주자...<br />하며 같이 먹어준다."
    },
    //새로운 분야:일단도전 or 체계적으로 준비
    4: {
        "question": "벼락부자가 꿈인 당신<br />주위에서 주식을 해보라고 제안한다.",
        "question2": "일단 주식계좌는 만들었는데<br />하나도 모르겠다...어떻게 할까?",
        "type": "EI",
        "A": "인생은 실전이다...!!<br />일단 5주 정도 사보고 지켜본다.",
        "B": "관련 서적이나 유튜브를 보며<br />공부를 하고 주식을 산다."
    },
    //적성에 맞는지 아닌지
    5: {
        "question": "고3 동생이 진로 상담을 한다.<br />\"어느 과를 가야하나요??\"",
        "question2": "고민을 해결해주고 싶은데<br />어떻게 말해줘야 할까?",
        "type": "EI",
        "A": "\"니가 하고싶은게 뭔지가 더 중요해!\"<br />라며 흥미에 맞는 과를 가라고 한다.",
        "B": "\"맞지 않는 적성은 없어 하다 보면 다 된다\"<br />라며 성적 맞춰서 가라고 한다."
    },
    //다양한 기술 추구, 유행
    6: {
        "question": "학교에 입학하고 보니 동아리가 참 많다<br />다 재밌어 보이긴 하는데...",
        "question2": "어느 동아리에 들어갈까<br />당신의 선택은??",
        "type": "SN",
        "A": "\"스우파가 유행이니 춤에 도전하자\"<br />하며 댄스동아리에 가입한다.",
        "B": "\"춤? 봉사? 농구동아리? 다 재밌겠다\"<br />싹다 가입해버린다."
    },
    //기본기 중시 or 실전을 중시
    7: {
        "question": "토익 900 이상이 목표인 당신<br />영어공부를 안 한 지 너무 오래됐다",
        "question2": "뭐부터 시작할까?<br />어떻게 시작하면 좋을까?",
        "type": "SN",
        "A": "뭐든 기본부터 해야지!<br />기본 문법부터 다진다.",
        "B": "문제 풀다보면 다 들어와~<br />냅다 기출을 풀어보며 공부한다."
    },
    //상상력, 호기심 or 현실적
    8: {
        "question": "MBTI 게시물을 보던 중<br />친구가 이상한 질문을 한다",
        "question2": "포대자루 타고 엉덩이로 대관령 내려오기<br />vs 트월킹 추면서 한라산 오르기",
        "type": "SN",
        "A": "\"포대자루 두께가 어느정도인데?\"<br/>라며 진지하게 물어본다.",
        "B": "\"아 그런 걸 왜 고민해...?\"<br/>라며 짜증을 낸다."
    },
    //끊임없는 질문 or 인내심을 가지고 공부하다 정말 모르겠는것만 질문
    9: {
        "question": "컴활 자격증을 따기 위해 학원을 갔다<br />생각보다 어려워서 난감하다",
        "question2": "질문할 게 너무 많은데<br />이걸 어떻게 하면 좋을까?",
        "type": "SN",
        "A": "난이도 상관없이 모르는게 생길 때마다<br />끊임없이 질문하며 익힌다.",
        "B": "일단 다시 복습해보고<br />정말 모르겠는 내용 위주로 질문한다."
    },
    //문제 원인 찾아가는 능력 or 처음부터 끝까지 완성해낼 수 있는 능력
    10: {
        "question": "C언어 과제를 하던 당신<br />컴파일 오류가 떴다...",
        "question2": "코드가 길어서 어디서 틀렸는지 잘 모르겠다<br />이때 당신의 해결 방식은?",
        "type": "SN",
        "A": "다시 짜기는 힘드니 한줄한줄<br />분석하며 원인을 찾아낸다",
        "B": "일단 코드를 다른 곳에 복사해놓고<br />처음부터 작성 해본다."
    }
}

var result = {
    "EN": {
        "toptitle": "정보통신공학과의 올라운더?",
        "trackname": "프로젝트 및 실무능력 트랙",
        "img": "./img/web.png",
        "personality": "매사에 도전적이기 때문에<br/>이것저것 해보는 것을 좋아합니다.",
        "personality2": "내가 좋아하고 적성에 맞는 일을 하는것을<br/> 더 중요시 하는 편이에요.",
        "personality3": "무언가를 해낼 때 다양한 방식으로<br/>해결하는 것을 좋아합니다.",
        "personality4": "끈기가 있어서 모르는 문제를<br/>해결할 때 까지 포기하지 않아요",
        "personality5": "실전에 강한 타입이기 때문에<br/>책을 통해서 해결 방법을 찾기보다는<br/>직접 무언가를 해보면서 문제를 해결합니다.",
        "personality6": "성취감을 얻는 것도 좋아하지만 다른 사람에게<br/> 인정을 받는 것도 좋아하는 편입니다.",
        "comment": "정보통신공학과가 딱 맞는 당신<br/>다양한 프로젝트를 통해 실력을 키워봐요!",
        "subject": "정보통신응용프로그래밍<br/>IT신기술 세미나1<br/>인터넷 프로그래밍<br/>IT신기술 세미나2<br/>정보통신공학 특강<br/>캡스톤디자인2<br/>ICT창업<br/>..."


    },
    "ES": {
        "toptitle": "내 손으로 기가지니를?!",
        "trackname": "IoT통신네트워크 트랙",
        "img": "./img/IoT.png",
        "personality": "유행을 중요시해서 신조어나 새로나온<br/>영화, 드라마 내용은 꼭 숙지하는 편이에요",
        "personality2": "문제가 생겼을 때 무작정 해결하기 보다는<br/>원인을 찾아내어 해결하는 편입니다.",
        "personality3": "상상력이 풍부해서 엉뚱하다는 소리를 듣지만<br/>특유의 호기심과 상상력으로<br/> 무엇이든 도전해 나갑니다.",
        "personality4": "모르는 것이 생겼을 때는<br/>망설임 없이 질문을 하는 편입니다.",
        "personality5": "뭐든지 기본이 중요!<br/>기본기를 다지기 위해 열심히 노력하는 편이에요",
        "personality6": "무언가를 시작했을 때 <br/>끝까지 해내려고 하는 편입니다.",
        "comment": "변화에 민감한 트랜드세터 당신에게<br/>어울리는 트랙 과목",
        "subject": "사물인터넷 기초<br/>회로이론<br/>디지털논리회로<br/>컴퓨터 네트워크<br/>전자회로<br/>마이크로 프로세서<br/>전자기학<br/>IoT보안<br/>모바일 프로그래밍<br/>임베디드 시스템<br/>무선 네트워크<br/>..."
    },
    "IN": {
        "toptitle": "정보통신공학과의 올라운더?",
        "trackname": "프로젝트 및 실무능력 트랙",
        "img": "./img/web.png",
        "personality": "매사에 도전적이기 때문에<br/>이것저것 해보는 것을 좋아합니다.",
        "personality2": "내가 좋아하고 적성에 맞는 일을 하는것을<br/> 더 중요시 하는 편이에요.",
        "personality3": "무언가를 해낼 때 다양한 방식으로<br/>해결하는 것을 좋아합니다.",
        "personality4": "끈기가 있어서 모르는 문제를<br/>해결할 때 까지 포기하지 않아요",
        "personality5": "실전에 강한 타입이기 때문에<br/>책을 통해서 해결 방법을 찾기보다는<br/>직접 무언가를 해보면서 문제를 해결합니다.",
        "personality6": "성취감을 얻는 것도 좋아하지만 다른 사람에게<br/> 인정을 받는 것도 좋아하는 편입니다.",
        "comment": "정보통신공학과가 딱 맞는 당신<br/>다양한 프로젝트를 통해 실력을 키워봐요!",
        "subject": "정보통신응용프로그래밍<br/>IT신기술 세미나1<br/>인터넷 프로그래밍<br/>IT신기술 세미나2<br/>정보통신공학 특강<br/>캡스톤디자인2<br/>ICT창업<br/>..."
    },
    "IS": {
        "toptitle": "어떤 데이터든지 분석해낸다!",
        "trackname": "인공지능트랙",
        "img": "./img/data.png",
        "personality": "대화를 할 때, 최대한 쉽게 설명하고 다른 사람의<br/>말에 잘 공감해주는 성향을 가지고 있어요.",
        "personality2": "친구마다 맞춤대화가 가능할 정도로<br/>커뮤니케이션 능력이 뛰어납니다.",
        "personality3": "최대한 다른 사람의 의견을 수용하고 협력하지만<br/>가끔 스트레스를 받고는 합니다.",
        "personality4": "항상 새로운 것을 배우고 싶을 때는<br/>시간을 아끼지 않는 편입니다.",
        "personality5": "다른 사람들의 의견과 여러가지 상황에<br/>타협을 잘 하는 편입니다.",
        "personality6": "분석을 잘하여 상황판단을 빠르게 하는 편입니다.",
        "comment": "분석력이 뛰어난 당신에게<br/>어울리는 트랙 과목",
        "subject": "파이썬프로그래밍<br/>데이터 구조<br/>자바 프로그래밍<br/>기계학습개론<br/>데이터마이닝 및 시각화<br/>기계학습응용<br/>데이터베이스<br/>캡스톤디자인1<br/>빅데이터분석"
    },

}

function start() {
    $(".start").hide();
    $(".question").show();
    next();
  
}



function next() {

    if (num == 11) {
        $(".question").hide();
        $(".result").show();
        var track = "";
        ($("#EI").val() < 2) ? track += "I": track += "E";
        ($("#SN").val() < 2) ? track += "N": track += "S";


        $("#re_img").attr("src", result[track]["img"]);
        $("#tp_txt").html(result[track]["toptitle"]);
        $("#tr_txt").html(result[track]["trackname"]);
        $("#per_ex").html(result[track]["personality"]);
        $("#per_ex2").html(result[track]["personality2"]);
        $("#per_ex3").html(result[track]["personality3"]);
        $("#per_ex4").html(result[track]["personality4"]);
        $("#per_ex5").html(result[track]["personality5"]);
        $("#per_ex6").html(result[track]["personality6"]);
        $("#comment").html(result[track]["comment"]);
        $("#subjectlist").html(result[track]["subject"]);


    } else {

        $(".progress > .progress_bar").attr('style', 'width: calc(100/10*' + num + '%)');
        $("#pro_1").html(q[num]["question"]);
        $("#pro_2").html(q[num]["question2"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        $("#plus").html(num);
        num++;
    }
}

function prev() {

    if (num <= 2) {
        num = 2;
        $(".progress > .progress_bar").attr('style', 'width: calc(100/10*' + [num - 1] + '%)');
        $("#pro_1").html(q[num - 1]["question"]);
        $("#pro_2").html(q[num - 1]["question2"]);
        $("#type").val(q[num - 1]["type"]);
        $("#A").html(q[num - 1]["A"]);
        $("#B").html(q[num - 1]["B"]);
        $("#plus").html(num - 1);
    } else {

        num--;
        $(".progress > .progress_bar").attr('style', 'width: calc(100/10*' + [num - 1] + '%)');
        $("#pro_1").html(q[num - 1]["question"]);
        $("#pro_2").html(q[num - 1]["question2"]);
        $("#type").val(q[num - 1]["type"]);
        $("#A").html(q[num - 1]["A"]);
        $("#B").html(q[num - 1]["B"]);
        $("#plus").html(num - 1);

    }

}


  

$(document).ready(function () {
    $("#A").click(function () {
        var type = $("#type").val();
        var preValue = $("#" + type).val();
        $("#" + type).val(parseInt(preValue) + 1);
        next();
     
        //console.log(preValue);
        // console.log($("#" + type).val(parseInt(preValue) + 1));


    });

    $("#B").click(function () {
        next();
      
    });

    $("#prev_Btn").click(function () {
       
        if($("#" + type2).val(postValue - 1) == 1){
            postValue == 2;
        }else{
            prev();
            var type2 = $("#type").val();
            var postValue = $("#" + type2).val();
            $("#" + type2).val(postValue - 1);
        }

        console.log(postValue);


        // var type2 = $("#type").val();
        //var postValue = $("#" + type2).val();
        // $("#" + type2).val(parseInt(postValue) - 1);

    });

    var typed = new Typed('.typed', {
        strings: ["내 성향에 맞는 트랙은??"],
        loop: false,
        typeSpeed: 100,
        showCursor: false,
        cursorChar: "|",
      
    });

  

});