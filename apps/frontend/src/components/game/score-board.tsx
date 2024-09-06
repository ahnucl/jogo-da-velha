"use client";

import { GameContext } from "@/contexts/game-context";
import { useContext } from "react";
import { Score } from "./score";

export function Scoreboard() {
  const { player1, player2, ties } = useContext(GameContext);

  return (
    <div className="flex gap-7">
      <Score
        label={`${player1.type} (${player1.name})`}
        value={player1.score}
        color="primary"
      />
      <Score label="Empates" value={ties} color="light" />
      <Score
        label={`${player2.type} (${player2.name})`}
        value={player2.score}
        color="secondary"
      />
    </div>
  );
}
