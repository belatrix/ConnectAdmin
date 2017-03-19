import React from 'react';
import { Image, List } from 'semantic-ui-react';

const ColumnList = (props) => {
  if (props.data instanceof Array) {
    const ListItems = props.data.map(item => (
      <List.Item key={item.pk}>
        <Image avatar src={item.avatar} />
        <List.Content>
          <List.Header>{`${item.first_name} ${item.last_name}`}</List.Header>
        </List.Content>
      </List.Item>
      ));

    return (
      <List animated verticalAlign="middle">
        {ListItems}
      </List>
    );
  }
  return (
    <List animated verticalAlign="middle">
        No hay elementos
      </List>
  );
};

export default ColumnList;
