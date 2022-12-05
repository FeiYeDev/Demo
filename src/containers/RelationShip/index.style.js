import styled from "styled-components";

export const UsersGroupWrap = styled.div`
transform: scale(0.6);
transform-origin: left top;
li {
  list-style:none;
}
.tree-wrap {
  text-align: center;
}
  .tree-card-wrap {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .tree-card:hover {
    box-shadow: 0px 1px 8px rgb(24 144 255 / 90%);
  }
 .tree-card {
   width:16rem;
  //  border: 1px solid rgba(144, 202, 249, 0.15);
   position: relative;
   background-color: #f3f2f2;
   box-shadow: 0 1px 5px rgb(0 0 0 / 30%);
   padding:3px 3px;
  }
 .tree-card-close {
   //position: absolute;
   //top: 0rem;
   //right: 0rem;
 }
 .tree-card-content {
   text-align: center;
   font-size: 16px;
 }
 .tree-card-icon {
   position:relative;
   top: -3px;
   opacity: .6;
 }
 .tree-card-text {
  opacity: .6;
 }
 .tree-card-showChildren {
   
 }
 .handle {
   flex: 1;
   text-align: center;
 }
 .ant-modal-footer {
   display: flex;
   justify-content: center;
 }
`;
