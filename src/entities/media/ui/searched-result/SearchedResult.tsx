import { Badge, Flex, Text } from "../../../../shared/ui";

type SearchedResultProps = {
  totalResults?: string;
  searchParam: string;
};

export function SearchedResult({
  totalResults,
  searchParam,
}: SearchedResultProps) {
  return (
    <Flex gap={20} alignItems="center" mb={55}>
      <Text size="lg">
        You searched for:{" "}
        <Text size="lg" underline inline>
          {searchParam}
        </Text>
      </Text>
      <Badge>{totalResults}</Badge>
    </Flex>
  );
}
