import React from "react";
import ReactDOM from "react-dom";
import { Chat } from "@progress/kendo-react-conversational-ui";
import botlogo from '../images/download.png'
let axios = require("axios");
var username = "Ayush";
// let safeeval = require('safe-eval');

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.user = {
      id: 1,
      avatarUrl:
        "https://ai.campk12.com/static/media/empty-profile.f3d4a8fe.png",
    };
    this.bot = {
      id: 0,
      avatarUrl:
        botlogo,
    };
    this.state = {
      messages: [
        {
          author: this.bot,
          text:
            "hey, this is a CampK12. Type code on the panel to alter the response.",
        },
      ],
    };
  }

  addNewMessage = async (event) => {
    let botResponce = Object.assign({}, event.message);

    var code = localStorage.getItem("code");
    let evaluated = eval(code);
    let res;
    if (code) {
      try {
        res = await evaluated(event.message.text);
        botResponce.text = res;
      } catch (error) {
        botResponce.text = "Your function is incorrect, please correct.";
      }
    }
    botResponce.author = this.bot;
    this.setState((prevState) => ({
      messages: [...prevState.messages, event.message],
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, botResponce],
      }));
    });
  };

  render() {
    return (
      <div className="background">
        <Chat
          user={this.user}
          messages={this.state.messages}
          onMessageSend={this.addNewMessage}
          placeholder={"Type a message..."}
          width={400}
        ></Chat>
      </div>
    );
  }
}

export default Chatbox;
