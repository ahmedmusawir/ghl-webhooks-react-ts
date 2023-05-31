import GhlGetWebHookTrump from "../components/ghl/GhlGetWebHookTrump";
import GhlPostWebHook from "../components/ghl/GhlPostWebHook";
import { Container, Row, Box } from "../components/layouts";

const HomePage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={""}>
          <h2>New Contacts</h2>
          <GhlPostWebHook />

          <hr />
        </Box>
        <Box className={""}>
          <h2>Edit Trump Info</h2>
          <GhlGetWebHookTrump />

          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default HomePage;
