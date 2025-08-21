export type MessageType = {
  type: "in" | "out";
  text: string;
  variant?: "talk" | "action";
};

export function Message({ type, text, variant = "talk" }: MessageType) {
  const isIn = type === "in";

  // Estilo para mensagens normais (talk)
  const talkClasses = isIn
    ? "bg-green-500 text-white rounded-br-none"
    : "bg-gray-100 text-black rounded-bl-none";

  // Estilo para ações (action)
  const actionClasses = "bg-blue-100 text-blue-800 italic";

  return (
    <div className={`flex ${isIn ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-lg text-sm shadow ${
          variant === "action" ? actionClasses : talkClasses
        }`}
      >
        {text}
      </div>
    </div>
  );
}
