import { Header } from "../components/header/header";
import Posts from "../page/post/posts";

export default function AccountLayout({
  topContent = <Header />,
  leftContent = null,
  rightContent = null,
  centerContent = <Posts />,
  ...props
}: any) {
  return (
    <div>
      <div>{topContent}</div>
      <div className="grid lg:grid-cols-custom-grid gap-3">
        <div>{leftContent}</div>
        <div>{centerContent}</div>
        <div>{rightContent}</div>
      </div>
    </div>
  );
}
