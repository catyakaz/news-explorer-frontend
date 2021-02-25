import React from 'react';

import './Error.css';

function Error({ emptyString }) {
  return (
    <div className="network-error">
      <div className="side-padding">
        <div className="network-error__inner">
          <h3 className="network-error__message">
            {
              emptyString ? 'Нужно ввести ключевое слово' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            }
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Error;
