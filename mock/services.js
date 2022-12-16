import { SlChemistry } from "react-icons/sl";
import { FaMicroscope, FaViruses, FaShieldVirus } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { GiDna2, GiStethoscope } from "react-icons/gi";
import { TbTestPipe } from "react-icons/tb";
export const services = [
  {
    title: "Clinical Biochemistry",
    desc: "Clinical biochemistry services provides complete information about the normal and abnormal biochemical reactions...",
    image: <SlChemistry className="text-black w-10 h-10" />,
  },
  {
    title: "Clinical Pathology",
    desc: "The Clinical Pathology at Sun Diagnostics supports the diagnosis of disease using laboratory testing...",
    image: <FaMicroscope className="text-black w-10 h-10" />,
  },
  {
    title: "Hematology",
    desc: "The Hematology Section consists of a highly trained and experienced hematology technologists with well....",
    image: <BiTestTube className="text-black w-10 h-10" />,
  },
  {
    title: "Molecular Diagnostics",
    desc: "Molecular Diagnostics is the method of profiling a patient’s biological composition at a genetic level...",
    image: <GiDna2 className="text-black w-10 h-10" />,
  },
  {
    title: "Immunology",
    desc: "Immunology services refers to the diagnostic tests and investigations undertaken for the identificatio....",
    image: <GiStethoscope className="text-black w-10 h-10" />,
  },
  {
    title: "Serology",
    desc: "Serology is focused on tests that conclusively prove that there is a fungal, viral or protozoal...",
    image: <TbTestPipe className="text-black w-10 h-10" />,
  },
  {
    title: "Histo & cytopathology",
    desc: "The department of surgical pathology includes the sections of Histopathology, Cytopathology...",
    image: <FaViruses className="text-black w-10 h-10" />,
  },
  {
    title: "Microbiology",
    desc: "The department of Microbiology has the latest and standardized equipments including BacT-ALERT-3D...",
    image: <FaShieldVirus className="text-black w-10 h-10" />,
  },
];
