import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const PopupBtn = props => (
  <Popup
    inverted
    trigger={
      <a href={props.href}>
        <Button
          basic
          circular
          size="big"
          icon={props.icon}
        />
      </a>
       }
    content={props.content}
  />
);

export default PopupBtn;
