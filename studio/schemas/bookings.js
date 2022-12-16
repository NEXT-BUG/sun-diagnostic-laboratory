import { defineField, defineType } from "sanity";

export default defineType({
  name: "tests",
  title: "Test Bookings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Patient Name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "dob",
      title: "Date of Birth",
      type: "date",
      readOnly: true,
    }),
    defineField({
      name: "mobile_number",
      title: "Mobile Number",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "prefered_date_time",
      title: "Prefered Date and Time",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "selected_test",
      title: "Selected Test/Profile/Package",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "prescription",
      title: "Prescription",
      type: "file",
      readOnly: true,
    }),
    defineField({
      name: "home_collection_mobile_number",
      title: "Home Collection Mobile Number",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "client_status",
      title: "Booking Closed",
      description: "Check this box if the Booking is Completed",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
