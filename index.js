// Manipulation Key and Value array of Object
const example = data.map((item) => ({
  name: `Your project: ${item.name}, was ${item.status}`,
  description: `Updated By: ${item.updatedBy.email}`,
  statusMessage: "UNREAD",
}));

// Input Key and Value in Select Options
// link here : https://codesandbox.io/s/angry-gould-kjdt9x?file=/src/App.js:0-770
export default function App() {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData({
      [e.target.value.split(",")[0]]: e.target.value.split(",")[1],
    });
  };

  console.log(data);

  return (
    <div className="App">
      <select onChange={handleChange}>
        <option hidden>Pilih Kota</option>
        {dataKota.map((item, index) => (
          <option key={index} value={[item.name, item.id]}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Sum from value array of Object
data
  .map((item) => item.memory)
  .map(Number)
  .reduce((a, b) => a + b, 0);

//  make random string and number
let rand_number = Math.floor(Math.random() * 1000);
let rand_time = new Date().getTime();
let rand_string = `vm-${rand_number}-${rand_time}`;

// delay function like setTimeout, but this function u can put everywhere like component
function sleep(num) {
  let now = new Date();
  let stop = now.getTime() + num;
  while (true) {
    now = new Date();
    if (now.getTime() > stop) return;
  }
}

// manipulation Array of Object where already map into table
getZonesDatas[index].idImage = e.target.value.split(",")[0];
getZonesDatas[index].os = e.target.value.split(",")[1];
setGetZonesDatas([...getZonesDatas]);

// Example Recursif function
var updateIp = 0;
const updatedIp = async () => {
  try {
    const data = await axios.get(
      `${process.env.VERIFICATION}/vmware-updated-ip?query=${vmId}?query=${value?.project?.hypervisor?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.data.statusCode == 200 || updateIp > 30) {
      console.log("true");
      await axios.get(
        `${process.env.VERIFICATION}/vmware-updated-ip?query=${vmId}?query=${value?.project?.hypervisor?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        setLoadingPower({
          data: "",
        })
      );
      refetchVm();
    } else {
      console.log("false " + updateIp);
      updateIp++,
        setTimeout(() => {
          updatedIp();
        }, 5000);
    }
  } catch (error) {
    console.log(error);
    dispatch(
      setLoadingPower({
        data: "",
      })
    );
  }
};

// formik image validation
const valdationForm = Yup.object().shape({
  image: Yup.mixed()
    .required("Logo is Required!")
    .test(
      "fileSize",
      "Your file is too big :(",
      (value) => value && value.size <= 1024 * 1024 * 2
      //1kb
    ),
});

<Formik
  initialValues={{
    image: nul,
  }}
  onSubmit={(values, { resetForm }) => {
    //reset for rest value
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    resetForm({ values: "" });
  }}
>
  <Field
    className="border p-1.5 placeholder:text-xs"
    name="image"
    component={LogoInput}
    setFieldValue={setFieldValue}
    onBlur={handleBlur}
  />
</Formik>;

// in input components
import React, { useState } from "react";

export const LogoInput = (props) => {
  const [fileName, setFileName] = useState("");

  const handleVideoChange = (e) => {
    console.log(e.target.files[0]);
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => setFileName(file.name);
      reader.readAsDataURL(file);
      props.setFieldValue(props.field.name, file);
    }
  };

  return (
    <form>
      <input
        name={props.field.name}
        type="file"
        accept="image/jpg, image/jpeg"
        onChange={handleVideoChange}
      />
    </form>
  );
};

// formik OTP VALIDATION
const MoadlVerify = ({ emailUser, token, data, register, login, name }) => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const dispatch = useDispatch();

  const codeVerify = Yup.object().shape({
    code1: Yup.string().required("Code can't be Empty !"),
    code2: Yup.string().required("Code can't be Empty !"),
    code3: Yup.string().required("Code can't be Empty !"),
    code4: Yup.string().required("Code can't be Empty !"),
  });

  const inputfocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 4) {
        e.target.form.elements[next].focus();
      }
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please Verify Your email first!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm ">
                      <span className="text-gray-700">
                        Code Already send to
                      </span>
                      <span className="text-black font-semibold">
                        {" " + emailUser}
                      </span>
                    </p>
                  </div>
                  <div>
                    <Formik
                      initialValues={{
                        code1: "",
                        code2: "",
                        code3: "",
                        code4: "",
                      }}
                      validationSchema={codeVerify}
                      onSubmit={async (values) => {
                        console.log(values);
                        try {
                          const resp = await axios.post(
                            `${process.env.VERIFICATION}/user-verify`,
                            {
                              code:
                                values.code1 +
                                values.code2 +
                                values.code3 +
                                values.code4,
                            },
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          );

                          if (resp.status == 200) {
                            setTimeout(() => {
                              dispatch(
                                setGetSuccess({
                                  data: `Success Verify, Welcome ${name}`,
                                })
                              );
                              setTimeout(() => {
                                dispatch(
                                  setGetSuccess({
                                    data: ``,
                                  })
                                );
                              }, 8000);
                            }, 0);
                            login
                              ? dispatch(
                                  setUser({
                                    login: data.login,
                                    password: values.password,
                                  })
                                )
                              : dispatch(
                                  setNewUser({
                                    register: data.register,
                                    password: values.password,
                                  })
                                );
                          } else {
                            false;
                          }
                        } catch (error) {
                          console.log(error);
                          setTimeout(() => {
                            dispatch(
                              setGetError({
                                data: error?.response?.data?.body,
                              })
                            );
                            setTimeout(() => {
                              dispatch(
                                setGetError({
                                  data: ``,
                                })
                              );
                            }, 8000);
                          }, 0);
                        }

                        return true;
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form className=" w-full max-w-lg">
                          <div className=" w-full">
                            <div className=" flex flex-wrap mx-8 my-4 justify-evenly">
                              <Field
                                name="code1"
                                // placeholder="1"
                                type="text"
                                className=" outline  rounded-md text-black placeholder:text-center text-center h-[60px] w-[20%]"
                                maxlength="1"
                                tabIndex="1"
                                onKeyUp={(e) => inputfocus(e)}
                              />
                              <Field
                                name="code2"
                                // placeholder="2"
                                type="text"
                                className=" outline  rounded-md text-black placeholder:text-center text-center h-[60px] w-[20%]"
                                maxlength="1"
                                tabIndex="2"
                                onKeyUp={(e) => inputfocus(e)}
                              />
                              <Field
                                name="code3"
                                // placeholder="3"
                                type="text"
                                className=" outline  rounded-md text-black placeholder:text-center text-center h-[60px] w-[20%]"
                                maxlength="1"
                                tabIndex="3"
                                onKeyUp={(e) => inputfocus(e)}
                              />
                              <Field
                                name="code4"
                                // placeholder="4"
                                type="text"
                                className=" outline  rounded-md text-black placeholder:text-center text-center h-[60px] w-[20%]"
                                maxlength="1"
                                tabIndex="4"
                                onKeyUp={(e) => inputfocus(e)}
                              />
                              {(errors.code1 && touched.code1) ||
                              (errors.code2 && touched.code2) ||
                              (errors.code3 && touched.code3) ||
                              (errors.code4 && touched.code4) ? (
                                <div className=" text-red-500 text-center">
                                  {errors.code1 ||
                                    errors.code2 ||
                                    errors.code3 ||
                                    errors.code4}
                                </div>
                              ) : null}
                            </div>

                            <div className="flex justify-center items-center gap-2">
                              <Button
                                variant="dark"
                                className="rounded-md w-1/2"
                              >
                                Verify
                              </Button>
                              <p
                                className="outline hover:opacity-50 w-1/2 rounded py-1.5 text-center font-semibold cursor-pointer"
                                onClick={() => {
                                  closeModal();
                                }}
                              >
                                Cancel
                              </p>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
