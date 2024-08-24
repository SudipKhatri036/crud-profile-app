import * as Yup from "yup";

export const addProfileSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name should contain only alphabets")
    .required("Please enter you name"),

  phoneNum: Yup.number()
    .test(
      "len",
      "Number must be at least 7 digits",
      (value) => value && value.toString().length >= 7
    )
    .required("Please enter you number"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter you email"),

  profile: Yup.mixed()
    .nullable()
    .notRequired()
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format.",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
