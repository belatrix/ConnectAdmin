import React from 'react';
import { Card, Icon, Item } from 'semantic-ui-react';

const CardList = (props) => {
  const ListItems = props.data.map(item => (
    <Item key={item.pk}>
      <Item.Image size="mini" src={item.avatar} avatar />
      <Item.Content>
        <Item.Header as="a">{`${item.first_name} ${item.last_name}`}</Item.Header>
        <Item.Extra>
          <Icon color="green" name="check" /> {item.current_month_score} Points
          </Item.Extra>
      </Item.Content>
    </Item>
    ));

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          {props.header}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Item.Group>
          {ListItems}
        </Item.Group>
      </Card.Content>
    </Card>
  );
};

export default CardList;
