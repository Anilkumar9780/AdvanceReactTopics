import React, { memo } from 'react';

const ChildComponent = ({ handleChild, count }) => {
    console.log('>>>>>>>>>>childComponent')
    return (
        <div>
            <span>{count}</span>
        </div>
    );
}

export default memo(ChildComponent);
