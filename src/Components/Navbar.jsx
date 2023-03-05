import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 1000px) {
    width: 100vw;
    /* background-color: yellow; */
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1000px) {
    margin: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  width: 70px;
  height: 40px;
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    transform: translateY(5px);
  }

  @media only screen and (max-width: 1000px) {
    width: 50px;
    height: 30px;
    margin: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

const Listitem = styled.li`
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    transform: translateY(2px);
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    scale: 1.2;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ed50f1;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    transform: translateY(5px);
  }
`;

const Navbar = () => {
  const reachHome = () => {
    const element = document.getElementById("hero");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reachContact = () => {
    const element = document.getElementById("contact");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reachAbout = () => {
    const element = document.getElementById("who");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reachWork = () => {
    const element = document.getElementById("works");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reachTop = () => {
    window.scrollTo(top);
  }

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/image/logo2.png" onClick={reachTop} />
          <List>
            <Listitem onClick={reachHome}>Home</Listitem>
            <Listitem onClick={reachAbout}>About</Listitem>
            <Listitem onClick={reachWork}>Work</Listitem>
            <Listitem onClick={reachContact}>Contact</Listitem>
          </List>
        </Links>
        <Icons>
          <Icon src="/image/searchwhite.png" />
          <Button onClick={reachContact}> Hire now ! </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
