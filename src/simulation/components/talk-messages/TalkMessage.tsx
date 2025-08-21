import { useEffect, useState } from "react";
import { Message, type MessageType } from "./Message";
import { useTalkStore } from "@/store/talk-store";
import { talkService } from "@/services/talk-service";
import { useSimulationStore } from "@/store/simulation-store";

export function TalkMessage() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { lastTalk } = useTalkStore();
  const { lastEvent } = useSimulationStore();

  const setToBottom = () => {
    var messagesWrapper = document.getElementById("messages_wrapper");

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  };

  useEffect(() => {
    if (lastTalk) {
      console.log("last talk: ", lastTalk);
      setMessages((store) => [
        ...store,
        { type: "in", text: lastTalk.title, variant: "talk" },
      ]);
      talkService.getTalkResponse(lastTalk.id).then((talkResponse) => {
        if (talkResponse) {
          setTimeout(() => {
            setMessages((store) => [
              ...store,
              { type: "out", text: talkResponse, variant: "talk" },
            ]);
          }, 1000);
        }
      });
    }
  }, [lastTalk]);

  useEffect(() => {
    if (lastEvent && lastEvent?.type !== "talk") {
      setMessages((store) => [
        ...store,
        { type: "in", text: `"${lastEvent.description}"`, variant: "action" },
      ]);
    }
  }, [lastEvent]);

  useEffect(() => {
    if (messages) {
      setToBottom();
    }
  }, [messages]);

  if (!messages.length) return null;

  return (
    <div
      id="messages_wrapper"
      className="w-[400px] h-[300px] overflow-y-scroll overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent px-4 py-2"
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          type={message.type}
          text={message.text}
          variant={message.variant}
        />
      ))}
    </div>
  );
}
