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
                result: ["who - About YHG", <br/>, "ls - Show project lists"]
            })
        }
        else if(this.state.command === "who") {
            this.setState({
                result: ["Hyeonggeun Yun (윤형근)", <br/>, "yhg8423@gmail.com", <br/>, 
                    <a href='https://www.facebook.com/hyeonggeun.yun.3'>Facebook</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Twitter</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Git</a>, <br/>, <br/>,
                    "Hello, I am Hyeonggeun Yun who is an undergraduate student at DGIST. I am in the third year of transdisciplinary studies degree.", <br/>,
                    "I have interested in Human-Computer Interaction (HCI), Artificial Intelligent (AI), Interaction at Scale, and Interactive Web.", <br />,
                    "안녕하세요. 대구경북과학기술원(DGIST) 융복합대학 기초학부에 재학중인 윤형근입니다.", <br/>,
                    "저는 인간과 컴퓨터 상호작용 (HCI), 인공지능 (AI), 대규모 인터랙션 (Interaction at Scale), 인터랙티브 웹에 관심이 많습니다.", <br />, <br/>,
                    "If you want to know more, please input 'cat hyeonggeun'"
                ]
            })
        }
        else if(this.state.command === "cat hyeonggeun") {
            this.setState({
                result: ["Hyeonggeun Yun (윤형근)", <br/>, "yhg8423@gmail.com", <br/>, 
                    <a href='https://www.facebook.com/hyeonggeun.yun.3'>Facebook</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Twitter</a>, " ",
                    <a href='https://twitter.com/yhg8423'>Git</a>, <br/>, <br/>,
                    "Hello, I am Hyeonggeun Yun who is an undergraduate student at DGIST. I am in the third year of transdisciplinary studies degree.", <br/>,
                    "I have interested in Human-Computer Interaction (HCI), Artificial Intelligent (AI), Interaction at Scale, and Interactive Web.", <br />,
                    "안녕하세요. 대구경북과학기술원(DGIST) 융복합대학 기초학부에 재학중인 윤형근입니다.", <br/>,
                    "저는 인간과 컴퓨터 상호작용 (HCI), 인공지능 (AI), 대규모 인터랙션 (Interaction at Scale), 인터랙티브 웹에 관심이 많습니다.", <br />, <br/>, 
                    "Education", <br/>,
                    "Ewoo Middle & High School  (Mar.2011 - Feb.2017)", <br />, "UC Berkely Summer Session  (June.2018 - Aug.2018)", <br/>, "DGIST Transdisciplinary Studies  (Mar.2017 - Present)", <br/>, <br/>,
                    "Working Experience", <br/>,
                    "Harooo Communication (하루 커뮤니케이션) - Cofounder, Full Stack Developer (Jan.2013 - Present)", <br/>,
                    "NAVER (네이버) - Devloper Intern (July.2015 - Aug.2015)", <br/>,
                    "Blocko (블로코) - Developer Intern (July.2017 - Aug.2017)", <br/>,
                    "Companoid Labs, AICT (컴패노이드 랩스, 차세대융합기술연구원) - Research Intern (Jan.2018 - Feb.2018)", <br />,
                    "KIXLAB (KAIST Interaction Lab), KAIST (킥스랩, 카이스트) - Research Intern (Dec.2018 - Present)", <br />,<br/>,
                    "Language", <br/>,
                    "Korean, English", <br/>, <br/>,
                    "Awards", <br/>,
                    "Hanwah Science Challenge 2016 (한화 사이언스 챌린지 2016) - Bronze Award (동상), Bio (바이오 분야)", <br/>,
                    "5th Research Officers for National Defense (제 5기 과학기술전문사관) - Top 4, Computer Science (전산 분야)", <br/>,
                ]
            })
        }
        else {
            this.setState({
                result: "test"
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