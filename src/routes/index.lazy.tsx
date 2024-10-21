import { createLazyFileRoute } from "@tanstack/react-router";
import { MediaResult } from "../entities/media";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <MediaResult />;
}
