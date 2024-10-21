import { Link } from "@tanstack/react-router";
import { Flex, Icon, Input, Text } from "../../";
import logo from "../../../assets/images/logo.png";
import { useWindowWidth } from "../../../hooks";
import { Container } from "../container";
import styles from "./Header.module.css";
import { useSearch } from "./useSearch";

export function Header() {
  const search = useSearch();
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 650;

  return (
    <header className={styles.header}>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {!isMobile && (
            <Input
              placeholder="Search for movies"
              icon="Search"
              width={280}
              isIconClickable
              value={search.value}
              onClickIcon={search.handleButtonClick}
              onChange={search.handleInputChange}
              onKeyDown={search.handleKeyDown}
            />
          )}
          <Flex alignItems="center" gap={10}>
            <Icon variant="User" size={25} color="primary" />
            <Text>Your Name</Text>
          </Flex>
        </Flex>
        {isMobile && (
          <Input
            placeholder="Search for movies"
            icon="Search"
            isIconClickable
            value={search.value}
            onClickIcon={search.handleButtonClick}
            onChange={search.handleInputChange}
            onKeyDown={search.handleKeyDown}
          />
        )}
      </Container>
    </header>
  );
}
