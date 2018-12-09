import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
  //46px - высота header, 86px - footer
  <div className="d-flex flex-row align-items-center" style={{minHeight: 'calc(100vh - 46px - 86px)'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <span className="display-1 d-block">404</span>
          <div className="mb-4 lead">Страница не найдена</div>
          <Link to="/" className="btn btn-link">Вернуться на главную</Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
