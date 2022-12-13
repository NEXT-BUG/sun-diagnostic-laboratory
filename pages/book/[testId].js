import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchCatalog from "../../components/tests/SearchCatalog";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { data } from "../../mock/tests";
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
  useEffect(() => {
    if (testId) {
      const test = data.find((item) => item.testId === testId);
      setTestObject(test);
    }
  }, [testId]);
  if (!data.find((item) => item.testId === testId))
    return <ErrorPage statusCode="404" />;

  return (
    <div className="w-screen min-h-screen">
      <div className="p-10 flex justify-between items-start font-ubuntu space-x-10">
        <SearchCatalog border shadow className="md:w-1/3" />
        <div className="text-left w-2/3">
          <p className="font-bold text-4xl">{testObject?.testName}</p>
          <div className="mt-20">
            <h1 className="font-bold text-2xl">Book Now</h1>
            <div className="bg-primary h-1 w-full my-5 rounded-full" />
            <div className="flex flex-col p-10 space-y-2">
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
                  sx={{ width: "20rem" }}
                  variant="standard"
                  label="Full Name"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Email</p>
                <Input
                  sx={{ width: "20rem" }}
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
                        sx={{ width: "20rem", margin: "1rem 0" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Mobile Number</p>
                <Input
                  sx={{ width: "20rem" }}
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
                        sx={{ width: "20rem", margin: "1rem 0" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Selected Test</p>
                <Input
                  sx={{ width: "20rem" }}
                  variant="standard"
                  value={testObject?.testName}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-2xl">Home Collection</h1>
            <div className="bg-primary h-1 w-full my-5 rounded-full" />
            <div className="flex flex-col p-10 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-bold">House Number</p>
                <Input
                  sx={{ width: "20rem" }}
                  variant="standard"
                  label="Full Name"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Street/Society</p>
                <Input
                  sx={{ width: "20rem" }}
                  variant="standard"
                  label="Email Address"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Mobile Number</p>
                <Input
                  sx={{ width: "20rem" }}
                  variant="standard"
                  InputProps={{
                    startAdornment: <InputAdornment>+91</InputAdornment>,
                    endAdornment: <IconButton></IconButton>,
                  }}
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-bold">Attach a Prescription</p>
                <input type="file" />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">City Name</p>
                <Input
                  sx={{ width: "20rem" }}
                  variant="standard"
                  value="Chennai"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
