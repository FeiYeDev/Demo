import styled from "styled-components";

export const MainStyle = styled.div`
  ${"" /* background-color: #F6F6F6; */}
   
  padding:1rem;
  .background-chart {
    position: absolute;
    z-index: 9;
    width: 100%;
  }
  .corner-flower-purple {
    color: #fff;
    overflow: hidden;
    position: relative;
    background-color: #5e35b1 !important;
  }

  .corner-flower-purple:before {
    top: -125px;
    right: -15px;
    width: 210px;
    height: 210px;
    content: "";
    opacity: 0.5;
    position: absolute;
    background: #4527a0;
    border-radius: 50%;
  }

  .corner-flower-purple:after {
    top: -85px;
    right: -95px;
    width: 210px;
    height: 210px;
    content: "";
    position: absolute;
    background: #4527a0;
    border-radius: 50%;
  }

  /**/

  .corner-flower-orange {
    color: #fff;
    overflow: hidden;
    position: relative;
    background-color: #dbb47b !important;
  }

  .corner-flower-orange:before {
    top: -125px;
    right: -15px;
    width: 210px;
    height: 210px;
    content: "";
    opacity: 0.5;
    position: absolute;
    background: #da932c;
    border-radius: 50%;
  }

  .corner-flower-orange:after {
    top: -85px;
    right: -95px;
    width: 210px;
    height: 210px;
    content: "";
    position: absolute;
    background: #da932c;
    border-radius: 50%;
  }

  /**/

  .corner-flower-green {
    color: #fff;
    overflow: hidden;
    position: relative;
    background-color: #a4d582 !important;
  }

  .corner-flower-green:before {
    top: -125px;
    right: -15px;
    width: 210px;
    height: 210px;
    content: "";
    opacity: 0.5;
    position: absolute;
    background: #66b92e;
    border-radius: 50%;
  }

  .corner-flower-green:after {
    top: -85px;
    right: -95px;
    width: 210px;
    height: 210px;
    content: "";
    position: absolute;
    background: #66b92e;
    border-radius: 50%;
  }

  /**/

  .corner-flower-red {
    color: #fff;
    overflow: hidden;
    position: relative;
    background-color: #d38d85 !important;
  }

  .corner-flower-red:before {
    top: -125px;
    right: -15px;
    width: 210px;
    height: 210px;
    content: "";
    opacity: 0.5;
    position: absolute;
    background: #d65b4a;
    border-radius: 50%;
  }

  .corner-flower-red:after {
    top: -85px;
    right: -95px;
    width: 210px;
    height: 210px;
    content: "";
    position: absolute;
    background: #d65b4a;
    border-radius: 50%;
  }

  .compact-table td:nth-child(2),
  .compact-table td:nth-child(5) {
    padding-left: 1rem;
  }

  .icon {
    margin-right: 0.6rem;
  }

  .slds-button_neutral {
    border-radius: 0;
  }

  .slds-modal {
    padding-left: 0.2rem;
  }

  .level3-sec {
    margin-top: 0.15rem;
  }

  tr.Profile4Row td {
    padding: 0.2rem 0;
    font-size: 11px;
  }

  .benchmark {
    text-align: left;
    width: 0.5rem;
    overflow: hidden;
  }

  .limit {
    width: 0.5rem;
    padding-left: 0.2rem;
  }

  .slds-card {
    overflow: scroll;
  }

  .editor-input {
    font-weight: 600;
    display: block;
    height: 30px;
    padding: 0 0 0 8px;
    overflow: hidden;
    border: 1px solid #dddbda;
    white-space: nowrap;
    line-height: 26px;
    color: #444;
    text-decoration: none;
    border-radius: 4px;
    background-clip: padding-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, #eee),
      color-stop(0.5, #fff)
    );
    background-image: -webkit-linear-gradient(center bottom, #eee 0%, #fff 50%);
    background-image: -moz-linear-gradient(center bottom, #eee 0%, #fff 50%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#ffffff', endColorstr = '#eeeeee', GradientType = 0);
    background-image: linear-gradient(top, #fff 0%, #eee 50%);
  }

  .innerbox-inner-table {
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    margin-top: 10px;
    padding: 2rem 1rem;
    background: white;
  }

  .slds-card {
    margin-top: 0.5rem;
  }

  .innerbox-inner-table td {
    padding: 0.4rem !important;
  }

  .dynamic-container {
    height: 85%;
    overflow: scroll;
  }

  .process-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 0.5rem;
  }

  .slds-path__item {
    min-width: 9rem;
  }

  .function-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.5rem;
    margin-top: 1rem;
    font-size: 12px;
  }

  .around-buttongroup {
    border-radius: 10rem;
    overflow: hidden;
    border: solid 1px rgb(171, 173, 176);
  }

  .asset-allocation-footer {
    font-size: 8px;
  }

  .vertical-center {
    align-items: center;
    display: flex;
  }

  .exception {
    background-color: #eab8b8;
  }

  .model-container {
    height: 100%;
    width: 50rem;
  }

  .model-header {
    text-align: left;
    color: rgb(22, 50, 92);
    font-weight: 700;
    font-size: 12px;
  }

  .section-title {
    display: flex;
    justify-content: center;
    color: rgb(22, 50, 92);
    font-size: 16px;
  }

  table.NewModelTb td {
    padding-right: 5px;
    white-space: nowrap;
  }

  table.NewModelTb {
    table-layout: auto;
  }

  .input-margin {
    margin-top: -10px;
  }

  .checkbox-active {
    text-align: center;
  }

  .rule-header {
    text-align: center;
  }

  .rule-button-header {
    text-align: right;
    margin: 0rem 0rem 1rem 0rem;
    padding-right: 2rem;
  }

  .rule-active input {
    border: 1px solid green;
  }

  .floatCustModelGreen {
    position: static;
    width: 30px;
    height: 30px;
    bottom: 100px;
    background-color: #0c9;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
  }

  .floatCustModelRed {
    position: static;
    width: 30px;
    height: 30px;
    bottom: 100px;
    background-color: #ff8d00;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
  }

  .IPSRule-button:hover,
  .IPSRule-button:active {
    background-color: #90281b;
    border-color: #90281b;
  }

  .IPSRule-button {
    margin-left: 0.5rem;
    margin-right: 1rem;
    border-radius: 15px !important;
    text-align: center;
    color: white;
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
    width: 100px;
    background-color: #dd4b39;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.2s;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
    font-size: 12px;
  }

  .ips-filter-inner-left {
    float: left;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 3rem;
  }

  .ips-filter-inner-right {
    float: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .ips-filter-outer {
    position: relative;
  }

  .mHeaderb {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    padding: 0.7rem 0rem 0.7rem 0rem;
    background-color: rgba(128, 128, 128, 0.21176470588235294);
  }

  table.ProfileTable.table-highspacing {
    table-layout: fixed !important;
    white-space: normal !important;
  }

  tr.Profile2Row {
    background-color: rgb(236, 235, 234);
  }

  tr.Profile3Row td:first-child {
    padding-left: 5rem;
  }

  tr.Profile4Row td:first-child {
    padding-left: 8rem;
  }

  tr.Profile5Row td:first-child {
    padding-left: 10rem;
  }

  tr.Profile4Row {
    background-color: #fafafa;
    border-top: solid 1px rgba(128, 128, 128, 0.21176470588235294);
  }

  .Profile2Row td {
    text-decoration: underline;
    font-style: italic;
  }

  .Profile2Row td:not(:first-child),
  .Profile3Row td:not(:first-child),
  .Profile4Row td:not(:first-child),
  .Profile5Row td:not(:first-child) {
    text-align: left;
  }

  .compact-table td:first-child,
  .compact-table td:nth-child(5) {
    border-right: solid 1px rgba(128, 128, 128, 0.21176470588235294);
  }

  .table-header-grey {
    background-color: rgba(128, 128, 128, 0.21176470588235294);
  }

  .compact-table input.slds-input {
    font-size: 11px;
  }

  table.compact-table td {
    vertical-align: top;
  }

  .modal-container {
    margin-top: 2%;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  .slds-modal__header {
    border: none;
  }

  .compact-table {
    font-size: 11px;
    margin: auto;
    border-top: solid 1px rgba(128, 128, 128, 0.21176470588235294);
  }

  .compact-table .first-column {
    width: 20rem;
  }

  .sub-tab {
    table-layout: fixed;
  }

  .sub-tab td {
    border-bottom: none !important;
    padding-left: 10px !important;
  }

  .sub-tab tr:not(:last-child) {
    border-bottom: rgb(243, 242, 242) solid 0.5px;
  }

  .propinv-1 {
    width: 30%;
    padding-left: 10px;
  }

  .propinv-2 {
    width: 12%;
    padding-left: 10px;
  }

  .propinv-3 {
    width: 15%;
  }

  .propinv-4 {
    width: 30%;
    white-space: pre-wrap;
  }

  .propinv-5 {
    width: 10%;
  }

  .propinv-6 {
    width: 40%;
  }

  .error-symbol {
    text-align: center;
    width: 10rem;
  }

  button.slds-button_brand {
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.2s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    font-size: 12px;
    border-radius: 2px;
  }

  .expand {
    transform: rotate(90deg);
    transition: all 0.4s;
  }

  .close {
    transform: rotate(0deg);
    transition: all 0.4s;
  }

  .arrow-open {
    transform: rotate(180deg);
    transition: all 0.4s;
  }

  .arrow-close {
    transform: rotate(90deg);
    transition: all 0.4s;
  }

  .slds-button:focus {
    /* outline: 0; */
    box-shadow: none;
  }

  .box {
    position: relative;
    border-radius: 3px;
    //background: #f1f4f5;
    //border-top: 3px solid #002d51;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .slds-has-flexi-truncate {
    flex: none !important;
    min-width: none !important;
    min-width: 50% !important;
  }

  .innerbox {
    border-radius: 2px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    padding: 1rem;
    background: white;
    z-index: 999;
  }

  article {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .box-header {
    color: #444;
    display: block;
    padding: 10px;
    position: relative;
  }

  .box-body {
    color: #444;
    display: block;
    padding: 10px;
    position: relative;
  }

  .trbottomline {
    border-bottom: 3px solid;
    border-radius: 10px;
  }

  .info-cell {
    width: 2rem;
  }

  .bluebk {
    background-color: #002d51;
  }

  .switch {
    width: 2rem;
  }

  td,
  th {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .innerbox-table td {
    white-space: normal !important;
    word-break: break-word;
    font-size: 10px;
  }

  .above {
    background-color: #a8c397;
  }

  .below {
    background-color: #ffbaba;
  }

  .yellowbk {
    background-color: #f2cf5b;
  }

  .orange {
    color: orange;
  }

  .green {
    color: green;
  }

  .greenbk {
    background-color: #00a65a;
  }

  .redbk {
    background-color: #dd4b39;
  }

  .orangebk {
    background-color: orange;
  }

  .greenbk {
    background-color: #00a65a;
  }

  .blue {
    border-color: #002d51;
  }

  .red {
    border-color: #dd4b39;
  }

  .redTxt {
    color: #cf6e6a;
  }

  .deepredTxt {
    color: red;
  }

  .green {
    border-color: #00a65a;
  }

  .yellow {
    border-color: #f2cf5b;
  }

  .trBottomgrey {
    border-bottom: 1px solid rgb(221, 219, 218);
  }

  .number {
    padding: 5.5px;
    text-align: center;
    color: white;
    border-radius: 50%;
    height: 32px;
    width: 35px;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.2s;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
    font-size: 12px;
  }

  .title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  td {
    padding-top: 5px;
    padding-bottom: 5px;
    overflow: hidden;
  }

  .slds-file--card {
    width: 40rem !important;
  }

  .tbl {
    margin-top: 20px;
    table-layout: fixed;
    overflow-wrap: break-word;
  }

  .input-20 {
    max-width: 20px;
  }

  #IPS2excel td:last-child {
    padding-right: 1rem;
    padding-left: 0.2rem;
  }

  .card a,
  .card a:before {
    transition: all 0.2s;
  }

  .card td:hover a {
    opacity: 0.4;
  }

  .card a {
    display: block;
    position: relative;
    width: 100%;
    padding: 10px 10px 10px 25px;
    box-sizing: border-box;
    color: #777;
    background: #fafafa;
    text-decoration: none;
    font-size: 11px;
  }

  .card-content {
  }

  .card-description-item {
    padding: 2px 10px 2px 10px;
    border-radius: 15px;
    text-align: center;
    color: white;
    margin: 3px;
  }

  .card a:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 10px;
    background: #7f8c9a;
  }

  .card a:nth-child(even):before {
    background: #34495e;
  }

  .card a + a {
    border-top: 2px solid #ededed;
  }

  .card td a:hover,
  .card td a:focus {
    opacity: 1;
    margin-left: 10px;
  }

  /*.card td a:hover:before,*/
  /*.card td a:focus:before {*/
  /*    width: 30px;*/
  /*}*/

  .switchTransition {
    -webkit-animation: fadin 0.5s;
    -moz-animation: fadein 0.5s;
    -ms-animation: fadein 0.5s;
    -o-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  //tr:hover, tr:focus {
  //  background-color: #f5f5f5 !important;
  //}

  .page-nav {
    position: relative;
    display: inline-block;
    width: 100px;
  }

  .alert-table td {
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    transition: all 300ms;
    text-align: left;
  }

  .alert-table th,
  .alert-table td {
    padding: 4px 3px;
  }

  .alert-table th {
    font-size: 12px;
    text-transform: uppercase;
    background: #f2f0e6;
    font-weight: bold;
  }

  .alert2-table td {
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    transition: all 300ms;
    text-align: left;
  }

  .alert2-table th,
  .alert2-table td {
    padding: 4px 3px;
  }

  .alert2-table tr:nth-child(2) {
    text-transform: uppercase;
    background: #f2f0e6;
  }

  .slds-input,
  .slds-checkbox_faux,
  .button-border {
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0.2s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: 12px;
    border-radius: 2px;
  }

  .outstand-refresh {
    height: 2rem;
    margin-top: 1rem;
  }

  .Profile3Row td {
    border-top: 1px solid #bfb9b9;
  }

  tr.Profile3Row {
    font-weight: 600;
  }

  tr {
    -webkit-animation: fadin 0.5s;
    -moz-animation: fadein 0.5s;
    -ms-animation: fadein 0.5s;
    -o-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  tr.Profile5Row td {
    font-size: 8pt !important;
    /* color: red; */
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  .no_top_bottom_margin {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 56px;
  }

  .switchTransition {
    -webkit-animation: fadin 0.8s;
    -moz-animation: fadein 0.8s;
    -ms-animation: fadein 0.8s;
    -o-animation: fadein 0.8s;
    animation: fadein 0.8s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .rebalancer-editor .ant-page-header-heading-left {
    width: 100%;
  }
  .rebalancer-editor .ant-page-header-heading-title {
    text-align: center;
    width: 100%;
  }

  .ant-picker-dropdown,
  .ant-table table,
  .ant-form,
  .ant-tab,
  .ant-input,
  .ant-select,
  .ant-picker,
  .ant-picker-input input,
  .ant-page-header,
  .ant-form-item-label > label,
  .ant-card,
  .ant-radio-button-wrapper,
  .ant-select-item,
  .ant-btn,
  .ant-pagination {
    font-size: 12px !important;
  }

  .container {
    max-width: 100% !important;
  }
  .ant-table table {
    table-layout: fixed !important;
  }
  button {
    outline: none;
  }
`;
