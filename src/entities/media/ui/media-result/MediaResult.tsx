import { useEffect, useState } from "react";
import { Pagination, Result, Text } from "../../../../shared/ui";
import { useGetMedia } from "../../hooks";
import { MediaList } from "../media-list";
import { SearchedResult } from "../searched-result";

export function MediaResult() {
  const media = useGetMedia();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", String(page));
    window.history.pushState({}, "", url);
    setCurrentPage(page);
  };

  const slotFulfilled = (
    <div>
      <SearchedResult
        // @ts-ignore
        searchParam={media.searchParams.s}
        totalResults={media.data?.totalResults}
      />
      {media.data?.Search && <MediaList medias={media.data?.Search} />}
      <Pagination
        currentPage={currentPage}
        totalPages={
          media.data?.totalResults
            ? Math.round(+media.data?.totalResults / 10)
            : 1
        }
        onPageChange={handlePageChange}
      />
    </div>
  );

  const setInitialPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  };

  useEffect(() => {
    setInitialPage();
  }, [media.searchParams]);

  return (
    <>
      {/* @ts-ignore */}
      {media.searchParams.s ? (
        <Result
          isLoading={media.loading}
          error={media.error}
          slotFulfilled={slotFulfilled}
        />
      ) : (
        <Text size="lg">To display movies, do a search</Text>
      )}
    </>
  );
}
