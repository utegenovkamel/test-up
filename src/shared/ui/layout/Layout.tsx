import { Outlet } from "@tanstack/react-router";
import { Container } from "./container";
import { Header } from "./header";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
