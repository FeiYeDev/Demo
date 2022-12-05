import React, { useState } from "react";
import TreeCard from '../components/treeCard';
import {mockData} from '../mockData';
import { TreeListWrap } from './treeStyle'

const App = () => {
    const [msg,setMsg] = useState(mockData);
    const deepDelete = (value,allValue,ind,allValues) => {
        if(allValue.id === value.id) {
            delete allValues.children[ind]
        }else {
            allValue.children.forEach((item,ind) => {
                deepDelete(value,item,ind,allValue)
            })
        }
        return allValue
        // setMsg({...allValue})
    }
    const deepFind = (objs,allObjs) => {
        if(allObjs.id === objs.id) {
            objs.expand = !objs.expand
        }else {
            allObjs.children.forEach(item => {
                deepFind(objs,item)
            })
        }
        return allObjs
        // setMsg({...allObjs})
    }
    const generateMenu = (menuObj) => {
        const deleteCard = (data) => {
            if(!data.children.length) {
                setMsg({...deepDelete(data,msg)})
            }else {
                return
            }
        }
        const handelExpand = (obj) => {
            setMsg({...deepFind(obj,msg)})
        }
        let vdom = [];
        if (menuObj instanceof Array) {
            let list = [];
            for (var item of menuObj) {
                list.push(generateMenu(item));
            }
            vdom.push(
                <div key={menuObj[0].id} className='org-tree-node-children'>
                    {list}
                </div>
            );
        } else if (menuObj instanceof Object) {
            vdom.push(
                <div key={menuObj.id} className={`org-tree-node ${menuObj.children?.length!==0?'collapsed':'is-leaf'}`}>
                    <div className='org-tree-node-label'>
                        <TreeCard delete={deleteCard} data={menuObj} />
                        {
                            menuObj.children.length?
                            <span key={menuObj.id} onClick={() => {handelExpand(menuObj)}} className={`org-tree-node-btn ${menuObj.expand?'expanded':null}`}></span>:
                            null
                        }
                    </div>
                    <div style={menuObj.expand?{display:'block'}:{display:'none'}}>
                        {
                            menuObj.children?.length!==0?
                                generateMenu(menuObj.children)
                                :null
                        }
                    </div>
                </div>

            );
        }
        return vdom;
    }
    return (
        <TreeListWrap>
            <div className='org-tree-container'>
                <div className='text-center'>
                    <div className={'org-tree'} style={{
                            transform: `0.6`,
                            transformOrigin: 'top left'
                        }}
                    >
                        {
                            generateMenu(msg)
                        }
                    </div>
                </div>
            </div>
        </TreeListWrap>
    )};


export default App;
