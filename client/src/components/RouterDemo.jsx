import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";

export default function RouterDemo() {
  const items = [
    // { label: "Components" },
    // { label: "Form" },
    {
      label: "InputText",
      template: () => (
        <a href="/inputtext">
          <a className="text-[#FF9100] font-semibold">Frontend Developer</a>
        </a>
      ),
    },
  ];
  const home = { icon: "pi pi-home", url: "/" };

  return <BreadCrumb model={items} home={home} />;
}
