import { Form, Formik } from "formik";

const Signin = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(valuse) => {
        console.log(valuse);
      }}
    >
      <Form></Form>
    </Formik>
  );
};

export default Signin;

/*
 * formik의 구조
    - <Formik> 컴포넌트 안에 initialValues와 onSubmit이 꼭 들어가야하는 props이다.
    - 각각 초기 값과 폼 제출시에 실행될 함수이다

 */
