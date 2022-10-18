import React from "react";
import Barcode from "react-barcode";
import styled from "styled-components";

const PageBreakWrapper = styled.div`
  && {
    page-break-after: always;
  }
`;

const PrintTemplate = ({ detail }) => {
  return (
    <div>
      <div>
        <Barcode value={detail.code} /*format="EAN13"*/ />
        <br />
        {detail.name && detail.name.substr(0, 42)}
      </div>
      <PageBreakWrapper>&nbsp;</PageBreakWrapper>
    </div>
  );
};
export default class ComponentToPrintSVG extends React.Component {
  render() {
    let printingPages = [];
    const { details } = this.props;
    for (const detail of details) {
      console.log(detail);
      const tempTemplate = <PrintTemplate detail={detail} />;
      printingPages.push(tempTemplate);
    }

    return (
      <div>
        {/* map and create single component for each page */}
        {printingPages}
      </div>
    );
  }
}
