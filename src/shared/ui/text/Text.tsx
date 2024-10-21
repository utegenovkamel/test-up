import styles from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  underline?: boolean;
  inline?: boolean;
}

export function Text({ children, size = "sm", underline, inline }: TextProps) {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${underline ? styles.underline : ""} ${inline ? styles.inline : ""}`}
    >
      {children}
    </p>
  );
}
