import React, { useEffect, useState } from "react";
import Checkbox from "./CheckBox";
import AgoraAppBuilder from "@appbuilder/react";
import useFPE from "./useFPE";

function App() {
  const [topbar, setTopbar] = useState(false);
  const [chatTextInput, setChatTextInput] = useState(false);
  const [chatSendButton, setChatSendButton] = useState(false);
  const [chatBubble, setChatBubble] = useState(false);
  const [participantsPanel, setParticipantsPanel] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);
  const [customContent, setCustomContent] = useState(false);
  const [customLayout, setCustomLayout] = useState(false);
  const [i8n, setI8n] = useState(false);
  const [sdkToken, setSdkToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoZW50aWNhdGlvbl90eXBlIjoxLCJhcHBfaWQiOiJmMDJjN2Q4OTczZjk0NDVhOWJhYTVjOTFhODdmNmRkMSIsInVzZXJfaWQiOiJjLTBmMmY2YzI3LTZmNmQtNGE2Yy1iOGUxLWNmNGQ1MWMzMjY3NCIsInByb2plY3RfaWQiOiJmNzk3YmE3ZDQ2YzFlMzFmNzJiZCIsImNvbXBhbnlfaWQiOjM5NDk2MSwiZXhwIjoxNjcwNTgyNDM3fQ.E2lHWV4N6Ff7JaUFp3kNgI1F3A2V8DYX8NQ8k237H_g"
  );

  useFPE({
    topbar,
    chatTextInput,
    chatSendButton,
    chatBubble,
    participantsPanel,
    bottomBar,
    customContent,
    customLayout,
    i8n,
  });

  useEffect(() => {
    try {
      console.log("supriya useeffect APP js");
      AgoraAppBuilder.initialize({
        token: sdkToken,
      })
        .then((data) => {
          console.log("supriya data: ", data);
        })
        .catch((error) => {
          console.log("supriya ******** error", error);
        });
    } catch (error) {
      console.log("Supriya Initializing sample app error: ", error);
    }
    // const unsubs = [
    //   AgoraAppBuilder.on(
    //     "create",
    //     (hostMeetingId, attendeeMeetingId, pstnNumber) => {
    //       console.log("React Host App: Meeting created with", {
    //         hostMeetingId,
    //         attendeeMeetingId,
    //         pstnNumber,
    //       });
    //     }
    //   ),
    //   AgoraAppBuilder.on("create", () => {
    //     console.log("React Host App: Meeting created queued event");
    //   }),
    //   AgoraAppBuilder.on("ready-to-join", (meetingTitle, deviceList) => {
    //     console.log("React Host App: precall with", {
    //       meetingTitle,
    //       deviceList,
    //     });
    //   }),
    //   AgoraAppBuilder.on("join", (meetingTitle, deviceList, isHost) => {
    //     console.log("React Host App: joined with", {
    //       meetingTitle,
    //       deviceList,
    //       isHost,
    //     });
    //   }),
    //   AgoraAppBuilder.on("leave", () => {
    //     console.log("React Host App: left");
    //   }),
    // ];
    // return () => {
    //   unsubs.forEach((v) => {
    //     if (typeof v === "function") v();
    //   });
    // };
  }, []);

  const joinMeeting = () => {
    AgoraAppBuilder.join(document.getElementById("meetingId").value);
  };

  return (
    <div>
      <div
        style={{ display: "flex", overflowX: "scroll", alignItems: "center" }}
      >
        <div style={{ display: "flex", height: "3rem" }}>
          <input id="meetingId" placeholder="meetingId" />
          <button onClick={joinMeeting}>Join</button>
        </div>
        <div>Overrides:</div>
        <Checkbox state={{ topbar }} setter={setTopbar} />
        <Checkbox state={{ chatTextInput }} setter={setChatTextInput} />
        <Checkbox state={{ chatSendButton }} setter={setChatSendButton} />
        <Checkbox state={{ chatBubble }} setter={setChatBubble} />
        <Checkbox state={{ participantsPanel }} setter={setParticipantsPanel} />
        <Checkbox state={{ bottomBar }} setter={setBottomBar} />
        <Checkbox state={{ customContent }} setter={setCustomContent} />
        <Checkbox state={{ customLayout }} setter={setCustomLayout} />
        <Checkbox state={{ i8n }} setter={setI8n} />
      </div>
      <div
        style={{
          display: "flex",
          height: "calc( 100vh - 3rem )",
          width: "100vw",
        }}
      >
        <AgoraAppBuilder.View />
      </div>
    </div>
  );
}

export default App;
