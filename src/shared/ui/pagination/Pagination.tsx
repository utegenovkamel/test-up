import { Icon } from "../icon";
// Pagination.tsx
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages = 1,
  onPageChange,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showEllipsis = totalPages > 7;

    if (showEllipsis) {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
            <button
              type="button"
              key={i}
              onClick={() => onPageChange(i)}
              className={`${styles.pageButton} ${currentPage === i ? styles.active : ""}`}
            >
              {i}
            </button>,
          );
        }
        pageNumbers.push(
          <span key="ellipsis1" className={styles.ellipsis}>
            ...
          </span>,
        );
        pageNumbers.push(
          <button
            type="button"
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={styles.pageButton}
          >
            {totalPages}
          </button>,
        );
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(
          <button
            type="button"
            key={1}
            onClick={() => onPageChange(1)}
            className={styles.pageButton}
          >
            1
          </button>,
        );
        pageNumbers.push(
          <span key="ellipsis2" className={styles.ellipsis}>
            ...
          </span>,
        );
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              type="button"
              key={i}
              onClick={() => onPageChange(i)}
              className={`${styles.pageButton} ${currentPage === i ? styles.active : ""}`}
            >
              {i}
            </button>,
          );
        }
      } else {
        pageNumbers.push(
          <button
            type="button"
            key={1}
            onClick={() => onPageChange(1)}
            className={styles.pageButton}
          >
            1
          </button>,
        );
        pageNumbers.push(
          <span key="ellipsis3" className={styles.ellipsis}>
            ...
          </span>,
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              type="button"
              key={i}
              onClick={() => onPageChange(i)}
              className={`${styles.pageButton} ${currentPage === i ? styles.active : ""}`}
            >
              {i}
            </button>,
          );
        }
        pageNumbers.push(
          <span key="ellipsis4" className={styles.ellipsis}>
            ...
          </span>,
        );
        pageNumbers.push(
          <button
            type="button"
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={styles.pageButton}
          >
            {totalPages}
          </button>,
        );
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            type="button"
            key={i}
            onClick={() => onPageChange(i)}
            className={`${styles.pageButton} ${currentPage === i ? styles.active : ""}`}
          >
            {i}
          </button>,
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.navButton}
      >
        <Icon size={10} variant="ArrowLeft" />
      </button>
      {renderPageNumbers()}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.navButton}
      >
        <Icon size={10} variant="ArrowRight" />
      </button>
    </div>
  );
}
