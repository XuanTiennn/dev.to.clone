import { Header } from "../components/header/header";

export default function NoLayout({
  topContent = <Header />,
  centerContent,
  ...props
}: any) {
  return (
    <div>
      <div>{topContent}</div>
      <div className="bg-white my-10">{centerContent}</div>
    </div>
  );
}
