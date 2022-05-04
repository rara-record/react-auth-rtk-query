import { Form, Formik } from "formik";
import { Grid, Stack } from "@chakra-ui/layout";
import { InputControl } from "formik-chakra-ui";

const Signin = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(valuse) => {
        console.log(valuse);
      }}
    >
      <Form>
        <Grid h="100vh" placeItems="center">
          <Stack>
            <InputControl name="email" />
          </Stack>
        </Grid>
      </Form>
    </Formik>
  );
};

export default Signin;

/*
 * formik의 구조
    - <Formik> 컴포넌트 안에 initialValues와 onSubmit이 꼭 들어가야하는 props이다.
    - 각각 초기 값과 폼 제출시에 실행될 함수이다
 */

/**
 * placeItems: align-items와 justify-items의 단축 속성
 */
