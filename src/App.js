import React, { useRef } from "react";
import ComponentToPrintSVG from "./ComponentToPrintSVG";
import "./styles.css";

import { useReactToPrint } from "react-to-print";

const details = [
  {
    units: 1,
    newprice: 5000,
    reason: null,
    purchaseprice: 5000,
    prodchanges: null,
    name: "cert15000",
    code: "2000000009532",
    cnofeacode: null,
    taxid: "0",
    attributescaption: ""
  },
  {
    units: 1,
    newprice: 2000,
    reason: null,
    purchaseprice: 2000,
    prodchanges: null,
    name: "cert23000",
    code: "2000000009572",
    cnofeacode: null,
    taxid: "0",
    attributescaption: ""
  }
];

export default function InvoicePageInfo() {
  const componentRef1 = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef1.current
  });

  return (
    <div className="report-history-invoice">
      <ComponentToPrintSVG details={details} ref={componentRef1} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}
