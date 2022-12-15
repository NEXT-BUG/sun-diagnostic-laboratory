import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchCatalog from "../../components/tests/SearchCatalog";
import ProfileSearchCatalog from "../../components/profiles/SearchCatalog";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { data } from "../../mock/tests";
import { data as profileData } from "../../mock/profiles";
import dayjs, { Dayjs } from "dayjs";
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

const Booking = () => {
  const [date, setDate] = useState(dayjs());

  const router = useRouter();
  const { testId } = router.query;
  const [testObject, setTestObject] = useState({});
  const [profileObject, setProfileObject] = useState({});
  useEffect(() => {
    if (testId) {
      const test = data.find((item) => item.testId === testId);
      setTestObject(test);
    }
  }, [testId]);

  useEffect(() => {
    if (testId) {
      const test = profileData.find((item) => item.profileId === testId);
      setProfileObject(test);
    }
  }, [testId]);

  if (
    !data.find((item) => item.testId === testId) &&
    !profileData.find((item) => item.profileId === testId)
  )
    return <ErrorPage statusCode="404" />;

  return (
    <div className="w-screen min-h-screen">
      <div className="p-3 pt-10 md:p-10 flex flex-col-reverse md:flex-row justify-between items-start font-ubuntu md:space-x-10">
        {profileObject ? (
          <ProfileSearchCatalog border shadow className="md:w-1/3" />
        ) : (
          <SearchCatalog border shadow className="md:w-1/3" />
        )}
        <div className="text-left md:w-2/3">
          <p className="font-bold text-4xl">
            {testObject?.testName || profileObject?.profileName}
          </p>
          <div className="mt-20">
            <h1 className="font-bold text-2xl">Book Now</h1>
            <div className="bg-primary h-1 w-full my-5 rounded-full" />
            <div className="flex flex-col md:p-10 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold">Salutation</p>
                <RadioGroup row>
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
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Email</p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="Email Address"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Date of Birth</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    onChange={(date) => setDate(date)}
                    value={date}
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
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment>+91</InputAdornment>,
                    endAdornment: <IconButton></IconButton>,
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Preferred Date and Time</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    onChange={(date) => setDate(date)}
                    value={date}
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
                  value={testObject?.testName || profileObject?.profileName}
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
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="Full Name"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Street/Society</p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  label="Email Address"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Mobile Number</p>
                <Input
                  sx={{ width: "15rem" }}
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment>+91</InputAdornment>,
                    endAdornment: <IconButton></IconButton>,
                  }}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-bold">Attach a Prescription</p>
                <input className="w-[15rem]" type="file" />
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
            </div>
          </div>
          <div className="flex justify-between m-5">
            <button className="px-4 text-white font-bold py-2 md:hover:scale-110 md:active:scale-75 duration-150 ease-out bg-primary rounded-md ml-auto">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
