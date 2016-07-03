import React from 'react';
import '../../stylus/404.styl'

export default () => {
  return (
    <div className="error404">
      <h3>页面找不到了</h3>
      <p>抱歉，您访问的页面无法找到。有可能它被移动了位置、删除了，或者只是暂时无法访问。</p>
    </div>
  );
};