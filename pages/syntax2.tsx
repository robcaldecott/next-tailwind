import Syntax from "react-syntax-highlighter";

export default function Page() {
  const codeString = "function add(x: number, y: number) {\n  return x + y;\n}";
  return (
    <div className="border-2 border-slate-600">
      <Syntax language="javascript">{codeString}</Syntax>
    </div>
  );
}
