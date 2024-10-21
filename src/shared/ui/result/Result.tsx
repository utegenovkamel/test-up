import { Text } from "../text";

interface ResultProps {
  isLoading: boolean;
  error: string | null;
  slotLoading?: React.ReactNode;
  slotFulfilled: React.ReactNode;
}

export function Result({
  isLoading,
  error,
  slotLoading,
  slotFulfilled,
}: ResultProps) {
  if (isLoading) {
    return slotLoading || <div>loading...</div>;
  }
  if (error) {
    return <Text size="lg">{error}</Text>;
  }

  if (slotFulfilled) {
    return slotFulfilled;
  }

  return null;
}
