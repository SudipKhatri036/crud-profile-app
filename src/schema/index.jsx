import * as Yup from "yup";

export const addProfileSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
      "Name should contain only alphabets and minumum 4 characters long"
    )
    .required("Please enter you name"),

  phoneNum: Yup.number()
    .test(
      "len",
      "Number must be at least 7 digits",
      (value) => value && value.toString().length >= 7
    )
    .test(
      "startWith9",
      "Number must start with 9",
      (value) => value && value.toString().startsWith("9")
    )
    .required("Please enter you number"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter you email"),

  profile: Yup.mixed()
    .nullable()
    .test("FILE_FORMAT", "Only PNG images are allowed", (value) =>
      value ? value.type === "image/png" : true
    ),
});
