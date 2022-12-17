import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchCatalog from "../../components/tests/SearchCatalog";
import ProfileSearchCatalog from "../../components/profiles/SearchCatalog";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { data } from "../../mock/tests";
import { data as profileData } from "../../mock/profiles";
import { data as packagesData } from "../../mock/packages";
import dayjs from "dayjs";
import Loading from "../../components/Loading";
import client from "../../studio/sanity-client";
import ErrorPage from "next/error";
import {
  FormControlLabel,
  IconButton,
  InputAdornment,
  RadioGroup,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Input, RadioStyle } from "../../components/styledMUI";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { toast } from "react-hot-toast";

const Booking = () => {
  const [dateOfBirth, setDateOfBirth] = useState(dayjs());
  const [dateTime, setDateTime] = useState(dayjs());

  const router = useRouter();
  const { testId } = router.query;
  const [loading, setLoading] = useState(true);
  const [testObject, setTestObject] = useState({});
  const [profileObject, setProfileObject] = useState({});
  const [packageObject, setPackageObject] = useState({});

  const [formData, setFormData] = useState({
    salutation: "Mr.",
    name: "",
    email: "",
    mobile: "",
    houseNumber: "",
    streetSociety: "",
    city: "Chennai",
    houseCollectionMobileNumber: "",
  });

  useEffect(() => {
    if (testId) {
      const test = data.find((item) => item.testId === testId);
      setTestObject(test);
    }
    setLoading(false);
  }, [testId]);

  useEffect(() => {
    if (testId) {
      const test = profileData.find((item) => item.profileId === testId);
      setProfileObject(test);
    }
    setLoading(false);
  }, [testId]);
  useEffect(() => {
    if (testId) {
      const test = packagesData.find((item) => item.packageId === testId);
      setPackageObject(test);
    }
    setLoading(false);
  }, [testId]);

  if (loading) return <Loading />;

  if (
    !loading &&
    !data.find((item) => item.testId === testId) &&
    !profileData.find((item) => item.profileId === testId) &&
    !packagesData.find((item) => item.packageId === testId)
  )
    return <ErrorPage statusCode="404" />;

  const addToSanity = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.mobile === "" ||
      formData.houseNumber === "" ||
      formData.streetSociety === "" ||
      formData.houseCollectionMobileNumber === ""
    ) {
      toast.error(<b>Please fill all the fields</b>);
      return;
    }

    const doc = {
      _type: "bookings",
      name: `${formData.salutation} ${formData.name}`,
      email: formData.email,
      dob: dateOfBirth.toLocaleString().split(" ").slice(0, 4).join(" "),
      mobile_number: formData.mobile,
      prefered_date_time: dateTime,
      selected_test:
        testObject?.testName ||
        profileObject?.profileName ||
        packageObject?.packageName,
      home_collection_mobile_number: formData.houseCollectionMobileNumber,
      address: `${formData.houseNumber}, ${formData.streetSociety}, ${formData.city}`,
      client_status: false,
    };

    client
      .create(doc)
      .then((res) => {
        toast.success(<b>Booking is Successfully Scheduled</b>);
        console.log(`Document was created, document ID is ${res._id}`);
      })
      .catch((err) => {
        toast.error(<b>Booking is not Scheduled - Error Occurred</b>);
        console.error(err);
      });
  };

  return (
    <div className="w-screen min-h-screen">
      <div className="p-3 pt-10 md:p-10 flex flex-col-reverse md:flex-row justify-between items-start font-ubuntu md:space-x-10">
        {packageObject ? null : profileObject ? (
          <ProfileSearchCatalog border shadow className="md:w-1/3" />
        ) : (
          <SearchCatalog border shadow className="md:w-1/3" />
        )}
        <div className="text-left md:w-2/3">
          <p className="font-bold text-4xl">
            {testObject?.testName ||
              profileObject?.profileName ||
              packageObject?.packageName}
          </p>
          <div className="mt-20">
            <h1 className="font-bold text-2xl">Book Now</h1>
            <div className="bg-primary h-1 w-full my-5 rounded-full" />
            <div className="flex flex-col md:p-10 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold">Salutation</p>
                <RadioGroup
                  row
                  value={formData.salutation}
                  onChange={(e) =>
                    setFormData({ ...formData, salutation: e.target.value })
                  }
                >
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Mr."
                    value="Mr."
                  />
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Mrs."
                    value="Mrs."
                  />
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Master"
                    value="Master"
                  />
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Dr."
                    value="Dr."
                  />
                </RadioGroup>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Patient Name</p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Email</p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Date of Birth</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    onChange={(date) => setDateOfBirth(date)}
                    value={dateOfBirth}
                    renderInput={(params) => (
                      <Input
                        variant="standard"
                        sx={{ width: "15rem", margin: "1rem 0" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Mobile Number</p>
                <Input
                  sx={{ width: "15rem" }}
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Preferred Date and Time</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    onChange={(date) => setDateTime(date)}
                    value={dateTime}
                    renderInput={(params) => (
                      <Input
                        variant="standard"
                        sx={{ width: "15rem", margin: "1rem 0" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">
                  Selected {testObject ? "Test" : "Profile"}
                </p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  value={
                    testObject?.testName ||
                    profileObject?.profileName ||
                    packageObject?.packageName ||
                    "Loading"
                  }
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-2xl">Home Collection</h1>
            <div className="bg-primary h-1 w-full my-5 rounded-full" />
            <div className="flex flex-col md:p-10 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold">House Number</p>
                <Input
                  value={formData?.houseNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, houseNumber: e.target.value })
                  }
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="House Number"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Street/Society</p>
                <Input
                  value={formData?.streetSociety}
                  onChange={(e) =>
                    setFormData({ ...formData, streetSociety: e.target.value })
                  }
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="Street/Society"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">City Name</p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  value="Chennai"
                  disabled
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Mobile Number</p>
                <Input
                  value={formData?.houseCollectionMobileNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      houseCollectionMobileNumber: e.target.value,
                    })
                  }
                  sx={{ width: "15rem" }}
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between m-5">
            <button
              onClick={addToSanity}
              className="px-4 text-white font-bold py-2 md:hover:scale-110 md:active:scale-75 duration-150 ease-out bg-primary rounded-md ml-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
