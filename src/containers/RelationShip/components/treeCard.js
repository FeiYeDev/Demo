import React, { useState, } from "react";
import { CloseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd'
import {UsersGroupRenderCarStyle} from "./UserGroupRenderCardStyle";
import {colors} from "./help";

const RenderCard = (props) => {
  const {data} = props;
  const handelDelete = () => {
    props.delete(data)
  }
 return (
  <UsersGroupRenderCarStyle>
    <li className="tree-card">
      <span key={data.id} className="tree-card-close hover:text-blue-500 top-icon-container h-8" style={{backgroundColor: colors[data.level]}}>
        <CloseOutlined onClick={handelDelete} key="setting" style={{cursor: data.parent_id && !data.children?.length ? 'pointer' : 'not-allowed', color:'white', marginLeft:'auto'}} className={['pr-2', 'pt-1']}/>
      </span>
      <div className="tree-card-content p-4 flex item-center" style={{fontFamily: 'Poppins, sans-serif'}}>
        <Tooltip title={data.label}>
            <span className='word-wrap pr-0 pl-1'> {data.label}</span>
        </Tooltip>
      </div>
      <div className="flex tree-card-actions border-t-2">
        <span className="handle border-r-2 rounded cursor-pointer hover:text-blue-500">
          <EditOutlined key="edit" className='tree-card-icon'/>
          <span className="tree-card-text"> Edit</span>
        </span>
        <span className="handle rounded cursor-pointer hover:text-blue-500">
          <PlusOutlined key="PlusOutlined" className='tree-card-icon'/>
          <span className="pt-1 tree-card-text"> Create</span>
        </span>
      </div>
    </li>
    {/* {
      data.children.length?
        <span onClick={handelExpand} className={`org-tree-node-btn ${data.expand?'expanded':null}`}></span>:
        null
    } */}
  </UsersGroupRenderCarStyle>
 )
}
export default RenderCard
