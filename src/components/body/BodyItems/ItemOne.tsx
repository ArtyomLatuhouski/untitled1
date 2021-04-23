import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const ItemOne: FunctionComponent<Props> = (props) => {

  return (
      <h2> item one</h2>
  );
};

export default ItemOne;
