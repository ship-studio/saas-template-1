import { Container } from "./Container";

export function Divider() {
  return (
    <Container>
      <div className="h-px bg-[var(--border)]" />
    </Container>
  );
}
