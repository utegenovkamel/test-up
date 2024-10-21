import { type InputHTMLAttributes, useId } from "react";
import { Icon } from "../icon";
import type { IconsNamesType } from "../icon/types";
import styles from "./Input.module.css";

interface InputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "width" | "onKeyDown" | "onChange" | "value" | "placeholder"
  > {
  label?: string;
  icon?: IconsNamesType;
  isIconClickable?: boolean;
  onClickIcon?: () => void;
}

export function Input({
  label,
  placeholder,
  width,
  icon,
  isIconClickable,
  value,
  onChange,
  onClickIcon,
  onKeyDown,
}: InputProps) {
  const inputId = useId();

  const inputSize = {
    width: width !== undefined ? `${width}px` : "100%",
  };

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={styles.input}
        style={inputSize}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
      {icon && (
        <Icon
          onClick={onClickIcon}
          className={styles.inputIcon}
          variant={icon}
          color="grey"
          style={{ cursor: isIconClickable ? "pointer" : "default" }}
        />
      )}
    </div>
  );
}
