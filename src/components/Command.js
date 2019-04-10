import React from 'react';

class Command extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            command: '',
            result: ''
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //this.props.onSubmit(this.state.term);
        if(this.state.command === "help") {
            this.setState({
                result: ["who - About YHG", <br/>, "ls - Show project / work / activitie lists"]
            })
        }
        else if(this.state.command === "who") {
            this.setState({
                result: ["Hyeonggeun Yun (윤형근)", <br/>, "yhg8423@gmail.com", <br/>, 
                    <a href='https://www.facebook.com/hyeonggeun.yun.3'>Facebook</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Twitter</a>, " ",
                    <a href='https://github.com/yhg8423'>Git</a>, " ",
                    <a href='https://www.linkedin.com/in/hyeonggeun-yun-b38594160/'>Linkedin</a>, " ",
                    <a href='https://www.linkedin.com/in/hyeonggeun-yun-b38594160/'>CV(Curriculum Vitae)</a>, " ",
                    <br/>, <br/>,
                    "Hello, I am Hyeonggeun Yun who is an undergraduate student at DGIST. I am in the third year of transdisciplinary studies degree.", <br/>,
                    "I have interested in Human-Computer Interaction (HCI), Artificial Intelligent (AI), Interaction at Scale, and Interactive Web.", <br />,
                    "Especially, I want to think about how to increase the interaction of people on the web.", <br/>,
                    "Also, I want to design a society where humans and artificial intelligence live together.", <br/>, <br/>,
                    "안녕하세요. 대구경북과학기술원(DGIST) 융복합대학 기초학부에 재학중인 윤형근입니다.", <br/>,
                    "저는 인간과 컴퓨터 상호작용 (HCI), 인공지능 (AI), 대규모 인터랙션 (Interaction at Scale), 인터랙티브 웹에 관심이 많습니다.", <br/>,
                    "특히 웹에서 사람들의 인터랙션을 높이는 방법에 관해 고민하고, 인간과 인공지능이 같이 살아가는 사회를 디자인하고 싶습니다.", <br/>, <br/>,
                    "If you want to know more, please input 'cat hyeonggeun'"
                ]
            })
        }
        else if(this.state.command === "cat hyeonggeun") {
            this.setState({
                result: [
                    "Hyeonggeun Yun (윤형근)", <br/>, "yhg8423@gmail.com", <br/>, 
                    <a href='https://www.facebook.com/hyeonggeun.yun.3'>Facebook</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Twitter</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Git</a>, " ", 
                    <a href='https://www.linkedin.com/in/hyeonggeun-yun-b38594160/'>Linkedin</a>, " ",
                    <a href='https://www.linkedin.com/in/hyeonggeun-yun-b38594160/'>CV(Curriculum Vitae)</a>, " ",
                    <br/>, <br/>,
                    "Hello, I am Hyeonggeun Yun who is an undergraduate student at DGIST. I am in the third year of transdisciplinary studies degree.", <br/>,
                    "I have interested in Human-Computer Interaction (HCI), Artificial Intelligent (AI), Interaction at Scale, and Interactive Web.", <br />,
                    "안녕하세요. 대구경북과학기술원(DGIST) 융복합대학 기초학부에 재학중인 윤형근입니다.", <br/>,
                    "저는 인간과 컴퓨터 상호작용 (HCI), 인공지능 (AI), 대규모 인터랙션 (Interaction at Scale), 인터랙티브 웹에 관심이 많습니다.", <br />, <br/>, 
                    <b>Education</b>, <br/>,
                    "Ewoo Middle & High School  (Mar.2011 - Feb.2017)", <br />, "UC Berkely Summer Session  (June.2018 - Aug.2018)", <br/>, "DGIST Transdisciplinary Studies  (Mar.2017 - Present)", <br/>, <br/>,
                    <b>Working Experience</b>, <br/>,
                    "NAVER (네이버) - Devloper Intern (July.2015 - Aug.2015)", <br/>,
                    "Blocko (블로코) - Developer Intern (July.2017 - Aug.2017)", <br/>,
                    "Companoid Labs, AICT (컴패노이드 랩스, 차세대융합기술연구원) - Research Intern (Jan.2018 - Feb.2018)", <br />,
                    "KIXLAB (KAIST Interaction Lab), KAIST (킥스랩, 카이스트) - Research Intern (Dec.2018 - Present)", <br />,<br/>,
                    <b>Projects</b>, <br />,
                    "Harooo Communication (하루 커뮤니케이션) - Cofounder, Full Stack Developer (Jan.2013 - Present)", <br/>, 
                    "DGIST UGRP (DGIST 학부생공동연구프로그램) - Researcher (Oct.2018 - Present)", <br/>, <br/>,
                    <b>Language</b>, <br/>,
                    "Korean, English", <br/>, <br/>,
                    <b>Awards</b>, <br/>,
                    "Hanwah Science Challenge 2016 (한화 사이언스 챌린지 2016) - Bronze Award (동상), Bio (바이오 분야)", <br/>,
                    "5th Research Officers for National Defense (제 5기 과학기술전문사관) - Top 4, Computer Science (전산 분야)", <br/>,<br/>,
                    <b>Extra Curricular Activities</b>, <br />,
                    "Student Council of DGIST (DGIST 총학생회)", <br />,
                    "DGROID (디지로이드, 디지스트 IT 동아리)", <br/>,
                    "HPJS (현풍전산, 디지스트 전산, 슈퍼컴퓨팅 동아리)", <br/>,
                    "DGIST Tutoring (디지스트 튜터링) - Tutor", <br/>, <br/>,
                    <b>Software Programming Skills</b>, <br/>,
                    "HTML 5, CSS 3, JavaScript, PHP, Python, C++, C, R, Matlab", <br/>,
                    "jQuery, Django, ReactJs, Node.js, MySQL, MongoDB, Sqlite"
                ]
            })
        }
        else if(this.state.command === "ls") {
            this.setState({
                result: [
                    "Harooo Communication (하루 커뮤니케이션) || Whyπ (Whypi) || EWOO Wiki (이우위키) || Bobmap (밥지도)", <br/>, 
                    "DGIST UGRP || KIXLAB (KAIST Interaction Lab) || Companoid Labs || Blocko || NAVER", <br/>,
                    "DGIST Student Council (DGIST 총학생회) || DGROID || DGIST Tutoring", <br/>,
                    "ROND (과학기술전문사관) || HSC (Hanwha Science Challenge, 한화사이언스챌린지)", <br/>, <br/>,
                    "If you want to know more, please input 'ls -l [English Name of Projects / Work Experiences / Activities]'"
                ]
            })
        }
        else if(this.state.command === "ls -l Harooo Communication") {
            this.setState({
                result: [
                    "Harooo Communication (하루 커뮤니케이션) - Project Leader & Full Stack Developer (Jan.2013 - Present)", <br/>, <br/>,
                    "프로젝트 그룹 하루 커뮤니케이션의 2인의 Project Leader 중 한 명으로 활동하고 있습니다. ", <br/>,
                    "대표적인 서비스는 글이 24시간동안 지속되는 SNS '하루'입니다.", <br/>,
                    "'하루'를 개발한 후 여러 언론을 통해 알려졌으며, NAVER로 부터 인턴십 기회, NHN NEXT 입학 기회, 서버 호스팅 지원, 대학 등록금 지원 등을 받게 되었습니다.", <br/>,
                    "현재 SNS '하루' 이외에도 다양한 프로젝트를 업로드하고 있습니다.", <br/>, <br/>,
                    "I am one of the project leader of Harooo Communication.", <br/>,
                    "A representative service is SNS 'Harooo' where writings last 24 hours.", <br/>,
                    "Harooo Communication was annouced by media, and members of Harooo Communication are supported by NAVER.", <br/>, 
                    "There are many projects in Harooo Communication", <br/>, <br/>,
                    "-Website: ", <a href='www.harooo.com'>www.harooo.com</a>, <br/>,
                    "-Skills: HTML 5, CSS 3, JavaScript(jQuery), PHP, MySQL"
                ]
            })
        }
        else if(this.state.command === "ls -l KIXLAB") {
            this.setState({
                result: [
                    "KIXLAB (KAIST Interaction Lab), KAIST (킥스랩, 카이스트) - Research Intern (Dec.2018 - Present)", <br/>, <br/>,
                    "카이스트 전산학부 인터랙션 연구실인 KIXLAB (KAIST Interaction LAB)에서 학부 인턴 연구원으로 연구에 참여하고 있습니다.", <br/>,
                    "'Exploring the Design Space of Language Learning System Using Videos at Scale'이라는 연구를 진행하고 있으며, 대규모 비디오 데이터에서 적절한 표현, 단어 등을 검색하여 이에 걸맞는 비디오 셋을 제공하고, 더 나아가 하나의 커리큘럼으로 비디오 셋을 이용할 수 있도록 제공하는 웹사이트를 개발하고 있습니다.", <br/>,
                    "이를 통해서 Learning at Scale, NLP, Visualization에 관심을 갖고 있습니다.", <br/>, <br/>,
                    "I am working as an undergraduate research intern at KIXLAB (KAIST Interaction LAB), KAIST (Korea Advanced Institute of Science and Technology) SoC (School of Computing).", <br/>,
                    "I am studying a research project, 'Exploring the Design Space of Language Learning System Using Videos at Scale'.", <br/>,
                    "I am developing an interactive system which can provide video set included proper expressions and words from large-scale video data.", <br/>, 
                    "Furthermore, I am going to continue developing the system to be able to design a language learning curriculum with video set.", <br/>,
                    "Through the project, I am interested in Learning at Scale, NLP, and Visualization.", <br/>, <br/>,
                    "-Director: Prof. Juho Kim (김주호 교수님)", <br/>,
                    "-Skills: HTML 5, CSS 3, JavaScript(jQuery), Semantic UI, Django, SQLite 3, Visualization Library"
                ]
            })
        }
        else if(this.state.command === "ls -l DGIST UGRP") {
            this.setState({
                result: [
                    "DGIST UGRP (DGIST 학부생공동연구프로그램) - Researcher (Oct.2018 - Present)", <br/>, <br/>,
                    "DGIST 학부생 공동 연구 프로그램 (UGRP)에서 '전상담 데이터 기반의 대화형 챗봇 인터랙션 방식 연구를 통한 챗봇 설계 및 개발, 이를 바탕으로 사용자의 페르소나 분석 기술 연구'라는 주제로 연구를 진행하고 있습니다.", <br/>,
                    "(주) 스피링크와 함께 전상담을 전담할 수 있는 챗봇을 BDI 아키텍쳐를 기반으로 개발하고 있으며, 어떤 챗봇이 내담자에게 신뢰를 줄 수 있을지, 기존의 데이터를 통해서 어떤 식으로 챗봇을 구현할지에 대해 고민하고 있습니다.", <br/>,
                    "챗봇을 개발한 후에는 사용자의 페르소나를 자동적으로 분석하는 시스템을 연구하고 개발할 예정입니다.", <br/>, <br/>,
                    "I am studying 'Development and Design of Chatbot through Study on the Interaction of Chatbot based on pre-counseling data and Research the Analysis of Persona using Chatbot' in DGIST UGRP (Undergraduate Group Research Program).", <br/>,
                    "I am developing a chatbot which can conduct pre-counseling automatically based on BDI Architecture with Sprink.", <br/>,
                    "Especially, I am studying trust between the chatbot and users and considering a way to materialize pre-counseling chatbot.", <br/>, 
                    "After the development of the chatbot, I will study and develop a system which can analyze a persona of users.", <br/>, <br/>,
                    "-Director: Prof. Jongrae Park (박종래 교수님), Dr. Alan Jinkyu Jang (장진규 박사님)"
                ]
            })
        }
        else if(this.state.command === "ls -l Companoid Labs") {
            this.setState({
                result: [
                    "Companoid Labs, AICT (컴패노이드 랩스, 차세대융합기술연구원) - Research Intern (Jan.2018 - Feb.2018)", <br/>, <br/>,
                    "서울대학교 차세대융합기술연구원 Companoid Labs에서 학부 인턴 연구원으로 연구에 참여했습니다.", <br/>,
                    "'Effects of Human-like Appearance and Non-Speech Sound on Psychological Resistance to AI speaker'라는 연구 주제에 연구에 참여했으며, 이를 통해 인간을 닮은 생김새와 인간의 특성을 가진 소리가 인공지능 스피커와 사람 사이의 심리적 거리감을 줄이는 데에 어떤 영향을 미치는 지 연구했습니다.", <br/>,
                    "또한, 연구자를 위한 survey platform 'Ask-more'의 기획과 개발에 참여했습니다.", <br/>, 
                    "연구자는 누구나 쉽게 자신의 survey를 업로드하고, 결과를 분석할 수 있으며, 연구 참여자는 자신이 관심있는 연구에 참여할 수 있도록 추천하는 플랫폼을 개발하고자 했습니다.", <br/>, <br/>,
                    "I worked as an undergraduate research student at Companoid Labs, AICT (Advanced Institutes of Convergence Technology). ", <br/>,
                    "I studied a research project, 'Effects of Human- like Appearance and Non-Speech Sound on Psychological Resistance to AI speaker'.", <br/>,
                    "I studied how human-like appearance and non-speech sounds affect the psychological resistance between AI speaker and people.", <br/>, 
                    "Furthermore, I participated in the development and design of survey platform 'Ask-more' for researchers.", <br/>, 
                    "In 'Ask-more', researchers can upload surveys and analyze results easily. Also, participants can participate in surveys which is related to their interests.", <br/>, <br/>,
                    "-Director: Dr. Alan Jinkyu Jang (장진규 박사님)", <br/>,
                    "-Skills: HTML 5, CSS 3, JavaScript(jQuery), Semantic UI, Django, SQLite 3"
                ]
            })
        }
        else if(this.state.command === "ls -l Blocko") {
            this.setState({
                result: [
                    "Blocko (블로코) - Developer Intern (July.2017 - Aug.2017)", <br/>, <br/>,
                    "블록체인 기반 플랫폼 '코인 스택'을 개발하는 스타트업 'Blocko'에서 인턴 개발자로 근무했습니다.", <br/>,
                    "블록체인과 관련된 기본적인 지식을 얻는 계기가 되었으며, meteor.js 기반의 web component를 개발하는 일을 맡았습니다.", <br/>, <br/>,
                    "I worked as a developer intern in 'Blocko', which develops and provides a platform 'Coinstack' based on Blockchain.", <br/>,
                    "I could acquire a basic knowledge of Blockchain and I developed web components based on meteor.js.", <br/>, <br/>,
                    "-Skills: HTML 5, CSS 3, JavaScript(jQuery, meteor.js)"
                ]
            })
        }
        else if(this.state.command === "ls -l NAVER") {
            this.setState({
                result: [
                    "NAVER (네이버) - Devloper Intern (July.2015 - Aug.2015)", <br/>, <br/>,
                    "NAVER 산하 Xpress Engine (XE) 개발팀에서 고등학생 인턴 개발자로 근무했습니다.", <br/>,
                    "XE 개발팀에서 일하면서, PHP 기반의 Framework인 Laravel에 관해 알아보고 이를 통해 기본적인 사이트를 개발하는 시간을 가졌습니다.", <br/>, 
                    "뿐만 아니라, jQuery와 PHP Testing에 관해서도 탐구했습니다. 실무 프로젝트를 개발하는 모습을 직접 보는 기회가 되었으며, 개발자 문화를 알아가는 시간이 되었습니다.", <br/>, <br/>,
                    "I worked as a developer intern of 'Xpress Engine Developer Team' at NAVER.", <br/>,
                    "While I was working in XE Team, I studied about Laravel which is a framework of PHP Language.", <br/>, 
                    "Also, I studied about jQuery and PHP Testing. It is a good opportunity to observe the development of practical projects, and It was a good experience to learn about the culture of developers.", <br/>, <br/>,
                    "-Skills: HTML 5, CSS 3, JavaScript(jQuery), BootStrap, PHP, Laravel"
                ]
            })
        }
        else if(this.state.command === "ls -l DGIST Tutoring") {
            this.setState({
                result: [
                    "DGIST Tutoring (디지스트 튜터링) - Tutor (Mar.2018 - Present)", <br/>, <br/>,
                    "DGIST의 교수학습센터에서 진행하는 2018, 2019학년도 학부 튜터링 프로그램에서 2018 학년도 1학기 물질의 이해 Tutor와 2018학년도 2학기 다변수 미적분학 Tutor로 활동했고, 현재는 2019학년도 1학기 선형대수학 Tutor로 활동하고 있습니다.", <br/>,
                    "Tutor로 활동하며, 제가 예전에 배웠을 때 이해가 안가고, 부족했던 부분을 채워주고자 노력했습니다.", <br/>, 
                    "이러한 노력 덕분에, 2018학년도 1학기 우수 Tutor로 선정되었습니다.", <br/>, <br/>,
                    "In 2018, I worked as a tutor of General Chemistry I in the first semester and Multivariable Calculus in the second semester. In 2019, I am working as a tutor of Linear Algebra in the first semester.", <br/>,
                    "While I have been working as a tutor, I try to fill the gaps which I didn't understand when I was a fresher student.", <br/>, 
                    "Thanks to the efforts, I was selected as a superb tutor in the first semester of 2018."
                ]
            })
        }
        else if(this.state.command === "ls -l DGIST Student Council") {
            this.setState({
                result: [
                    "Student Council of DGIST (DGIST 총학생회) - Homepage Management Team Leader (April.2017 - Present)", <br/>, <br/>,
                    "DGIST 총학생회 홈페이지 관리팀 팀장으로 활동하고 있습니다. 팀명은 홈페이지 관리팀이지만, 실질적으로 홈페이지 개발을 맡고 있습니다.", <br/>, 
                    "DGIST 총학생회 홈페이지를 개발하여 단순한 총학생회 홈페이지가 아니라, DGIST 학부생들이 이용할 수 있는 커뮤니티로 확장하기 위해 노력하고 있습니다.", <br/>, <br/>,
                    "I am working as a leader of Homepage Management Team.", <br/>,
                    "Although the name is 'Homepage Management Team', I concentrate on the development of webpage of Student Council.", <br/>, 
                    "I want to develop the DGIST Community site which undergraduate students can use.", <br/>, <br/>,
                    "-skills: HTML 5, CSS 3, JavaScript(jQuery), Python, Django, SQLite 3"
                ]
            })
        }
        else if(this.state.command === "ls -l DGROID") {
            this.setState({
                result: [
                    "DGROID (디지로이드, 디지스트 IT 동아리) (March.2017 - Present)", <br/>, <br/>,
                    "DGIST의 IT 동아리 디지로이드(DGROID)에서 서버 개발팀 백엔드 부분 팀장으로 활동했습니다.", <br/>, 
                    "서버 개발팀은 node.js 기반의 동아리 웹사이트를 만드는 것을 목표로 나아갔습니다. 저는 백엔드 부분의 전체적인 개발과 javascript 교육을 담당했습니다.", <br/>, 
                    "또한 스타크래프트 AI 개발팀에 소속되어 JAVA 기반의 BWAPI로 스타크래프트 1 AI를 개발하는 데에 참여했습니다.", <br/>, <br/>,
                    "I worked as a leader of Backend Team in DGROID Server Development Team.", <br/>,
                    "Server Development Team aimed to create a club website based on node.js. I was responsible for the overall development of the backend and javascript study.", <br/>, 
                    "Also, I participated in developing Starcraft I Artificil Intelligence base on BWAPI & JAVA.", <br/>, <br/>,
                    "-skills: HTML 5, CSS 3, JavaScript(jQuery), Node.js, MongoDB",
                ]
            })
        }
        else if(this.state.command === "ls -l ROND") {
            this.setState({
                result: [
                    "ROND (Research Officers for National Defense) - 5th ROND candidate (Jan.2019 - Present)", <br/>, <br/>,
                    "제5기 과학기술전문사관 전산 분야 후보생 최종 4인에 선정되었습니다.", <br/>, 
                    "과학기술전문사관 제도는 이스라엘의 탈피오트 제도를 벤치마킹하였으며, 이공계 관련 학과 재학 학생의 경우 졸업 후에 장 교로서 국방과학연구소(ADD)에서 3년간 연구를 수행하는 것으로 군복무를 대체할 수 있습니다.", <br/>, 
                    "저는 졸업 후에 국방과학연구소(ADD)에서 컴퓨터, 전산 분야 연구를 3년간 수행할 예정이며, 현재 HCI 관련 분야로 연구를 수행할 계획입니다.", <br/>, <br/>,
                    "I was selected as a candidate for the 5th ROND (Research Officers for National Defense).", <br/>,
                    "ROND system benchmarks Israel's Talpiot system, and students majoring in science and technology can replace their military service by studying research at the Agency for Defense Development (ADD) for three years.", <br/>, 
                    "I am planning to carry out computer science research related to HCI",
                ]
            })
        }
        else if(this.state.command === "ls -l HSC") {
            this.setState({
                result: [
                    "Hanwah Science Challenge 2016 (한화 사이언스 챌린지 2016) - Bronze Award (동상), Bio (바이오 분야)", <br/>, <br/>,
                    "한화사이언스챌린지 2016 대회에 참가했습니다.", <br/>, 
                    "'커피찌꺼기를 활용한 단열페인트 제작'이라는 주제로 참가했으며, 연구의 참신함을 인정받아 동상을 수상하게 되었습니다.", <br/>, <br/>,
                    "I participated in Hanwha Science Challenge 2016", <br/>,
                    "I participated in HSC 2016 with research topic, 'Fabrication of Insulation Paint Using Coffee Dish.'. I won a bronze prize for research in Biotech",
                ]
            })
        }
        else {
            this.setState({
                result: this.state.command + ": command not found"
            })
        }
        this.props.onChange();

        console.log(this.state);
    };

    render() {
        return(
            <div className="command">
                <form onSubmit={this.onFormSubmit}>
                    <span id="dollar">$> </span>
                    <input 
                        id={this.props.id}
                        autoFocus
                        type="text" 
                        value={this.state.command} 
                        onChange={e => this.setState({ command:e.target.value })} 
                    />
                </form>
                <span>{this.state.result}</span>
            </div>
        );
    };
}

export default Command;