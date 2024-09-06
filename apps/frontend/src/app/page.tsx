import BoardArea from "@/components/game/board-area";
import { Scoreboard } from "@/components/game/score-board";
import Menu from "@/components/menu";
import Result from "@/components/result";

export default function Home() {
  return (
    <div className="flex flex-col gap-7">
      <Result />
      <Menu />
      <BoardArea />
      <Scoreboard />
    </div>
  );
}
