import { SlChemistry } from "react-icons/sl";
import { FaMicroscope, FaViruses, FaShieldVirus } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { GiDna2, GiStethoscope } from "react-icons/gi";
import { TbTestPipe } from "react-icons/tb";
export const services = [
  {
    title: "Clinical Biochemistry",
    desc: "Clinical biochemistry services provides complete information about the normal and abnormal biochemical reactions...",
    image: ({ className }) => <SlChemistry className={className} />,
  },
  {
    title: "Clinical Pathology",
    desc: "The Clinical Pathology at Sun Diagnostics supports the diagnosis of disease using laboratory testing...",
    image: ({ className }) => <FaMicroscope className={className} />,
  },
  {
    title: "Hematology",
    desc: "The Hematology Section consists of a highly trained and experienced hematology technologists with well....",
    image: ({ className }) => <BiTestTube className={className} />,
  },
  {
    title: "Molecular Diagnostics",
    desc: "Molecular Diagnostics is the method of profiling a patient’s biological composition at a genetic level...",
    image: ({ className }) => <GiDna2 className={className} />,
  },
  {
    title: "Immunology",
    desc: "Immunology services refers to the diagnostic tests and investigations undertaken for the identificatio....",
    image: ({ className }) => <GiStethoscope className={className} />,
  },
  {
    title: "Serology",
    desc: "Serology is focused on tests that conclusively prove that there is a fungal, viral or protozoal...",
    image: ({ className }) => <TbTestPipe className={className} />,
  },
  {
    title: "Histo & cytopathology",
    desc: "The department of surgical pathology includes the sections of Histopathology, Cytopathology...",
    image: ({ className }) => <FaViruses className={className} />,
  },
  {
    title: "Microbiology",
    desc: "The department of Microbiology has the latest and standardized equipments including BacT-ALERT-3D...",
    image: ({ className }) => <FaShieldVirus className={className} />,
  },
];
