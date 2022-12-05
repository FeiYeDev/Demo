import styled from "styled-components";

export const TreeListWrap = styled.div`
.org-tree-node-childrens {
    &:before {
      top: 50%;
      left: 0;
      width: 20px;
      height: 0;
      border-left: 0;
      border-top: 1px solid #ddd;
    }

    &:after {
      display: none;
    }

    & > .org-tree-node {
      display: block;
    }
  }
    .org-tree-container {
        // display: inline-block;
        padding: 15px;
        background-color: #fff;
        text-align: center;
      }
      
      .org-tree {
        // min-width: 100vw;
        display: inline-table;
        // text-align: center;
      }
      .org-tree:before, .org-tree:after {
        content: '';
        display: table;
      }
      
      .org-tree:after {
        clear: both;
      }
      
      .org-tree-node,
      .org-tree-node-children {
        position: relative;
        margin: 0;
        padding: 0;
        list-style-type: none;
        animation-name: show;
        animation-duration: .5s;  
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        &:before, &:after {
          transition: all .35s;
        }
      }
      @keyframes show {
        0% {
          transform: scale(0)
        }
        0% {
          transform: scale(0.5)
        }
        100% {
          transform: scale(1)
        }
      }
      .org-tree-node-label {
        position: relative;
        display: inline-block;
      
        .org-tree-node-label-inner {
          padding: 3px 3px;
          text-align: center;
          color: black;
          border-radius: 3px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
        }
        .org-tree-node-label-inner:hover {
          box-shadow: 0px 1px 8px rgba(24, 144, 255, .9);
        }
      }
      .org-tree-node-btn {
        position: absolute;
        top: 100%;
        left: 50%;
        width: 20px;
        height: 20px;
        z-index: 10;
        margin-left: -11px;
        margin-top: 9px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        box-shadow: 0 0 2px rgba(0, 0, 0, .15);
        cursor: pointer;
        transition: all .35s ease;
      
        &:hover {
          background-color: #e7e8e9;
          transform: scale(1.15);
        }
      
        &:before, &:after {
          content: '';
          position: absolute;
        }
      
        &:before {
          top: 50%;
          left: 4px;
          right: 4px;
          height: 0;
          border-top: 1px solid #ccc;
        }
      
        &:after {
          top: 4px;
          left: 50%;
          bottom: 4px;
          width: 0;
          border-left: 1px solid #ccc;
        }
      
        &.expanded:after {
          border: none;
        }
      }
      .org-tree-node {
        padding-top: 20px;
        display: table-cell;
        vertical-align: top;
        text-align: center;
        &.is-leaf, &.collapsed {
          padding-left: 10px;
          padding-right: 10px;
        }
      
        &:before, &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 19px;
        }
      
        &:after {
          left: 50%;
          border-left: 1px solid #ddd;
        }
      
        &:not(:first-child):before,
        &:not(:last-child):after {
          border-top: 1px solid #ddd;
        }
      
      }
      .collapsable .org-tree-node.collapsed {
        padding-bottom: 30px;
      
        .org-tree-node-label:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 50%;
          height: 20px;
          border-right: 1px solid #ddd;
        }
      }
      .org-tree > .org-tree-node {
        padding-top: 0;
      
        &:after {
          border-left: 0;
        }
      }
      .org-tree-node-children {
        padding-top: 20px;
        display: table;
      
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 20px;
          border-left: 1px solid #ddd;
        }
      
        &:after {
          content: '';
          display: table;
          clear: both;
        }
      }
      
      .horizontal {
        .org-tree-node {
          display: table-cell;
          float: none;
          padding-top: 0;
          padding-left: 20px;
      
          &.is-leaf, &.collapsed {
            padding-top: 10px;
            padding-bottom: 10px;
          }
      
          &:before, &:after {
            width: 19px;
            height: 50%;
          }
      
          &:after {
            top: 50%;
            left: 0;
            border-left: 0;
          }
      
          &:only-child:before {
            top: 1px;
            border-bottom: 1px solid #ddd;
          }
      
          &:not(:first-child):before,
          &:not(:last-child):after {
            border-top: 0;
            border-left: 1px solid #ddd;
          }
      
          &:not(:only-child):after {
            border-top: 1px solid #ddd;
          }
      
          .org-tree-node-inner {
            display: table;
          }
      
        }
      
        .org-tree-node-label {
          display: table-cell;
          vertical-align: middle;
        }
      
        &.collapsable .org-tree-node.collapsed {
          padding-right: 30px;
      
          .org-tree-node-label:after {
            top: 0;
            left: 100%;
            width: 20px;
            height: 50%;
            border-right: 0;
            border-bottom: 1px solid #ddd;
          }
        }
      
        .org-tree-node-btn {
          top: 50%;
          left: 100%;
          margin-top: -11px;
          margin-left: 9px;
        }
      
        & > .org-tree-node:only-child:before {
          border-bottom: 0;
        }
      
        .org-tree-node-children {
          display: table-cell;
          padding-top: 0;
          padding-left: 20px;
      
          &:before {
            top: 50%;
            left: 0;
            width: 20px;
            height: 0;
            border-left: 0;
            border-top: 1px solid #ddd;
          }
      
          &:after {
            display: none;
          }
      
          & > .org-tree-node {
            display: block;
          }
        }
      }
      
      // .text-center {
      //   text-align: center;
      // }
`;
