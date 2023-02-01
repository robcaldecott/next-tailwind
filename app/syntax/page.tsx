import Syntax from "react-syntax-highlighter/dist/esm/default-highlight";

export default function Page() {
  const codeString = "(num) => num + 1";
  return (
    <div className="border-2 border-slate-600">
      <Syntax language="javascript">{codeString}</Syntax>
    </div>
  );
}
