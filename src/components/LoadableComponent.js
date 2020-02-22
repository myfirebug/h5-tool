/*
 * @Author: hejp
 * @Date:   14:20
 * @Last Modified by:   hejp
 * @Last Modified time: 14:20
 */
import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => {
    return (
        <div style={{
            textAlign: 'center',
            color:'#999',
            lineHeight: '100px'
        }}>loading...</div>
    )
}

export default (loader, loading = Loading) => {
    return Loadable({
        loader,
        loading
    })
};
