import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../componenets/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </div>
  );
};
export default ErrorPage;
