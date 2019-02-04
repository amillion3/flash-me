import React, { Fragment } from 'react';
import { MDBDataTable } from 'mdbreact';

import './TableCards.scss'

const TableCards = () => {
  const data = {
    columns: [
      {
        'label': 'Card Id',
        'field': 'cardid',
        'sort': 'asc'
      },
      {
        'label': 'Deck Id',
        'field': 'deckid',
        'sort': 'asc'
      },
      {
        'label': 'Question',
        'field': 'question',
        'sort': 'asc'
      },
      {
        'label': 'Answer',
        'field': 'answer',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'cardid': 1,
        'deckid': 1,
        'question': "What is blah bblasd hasdl",
        'answer': "True that is the truest wansre"
      },
      {
        'cardid': 2,
        'deckid': 1,
        'question': "Where is the honey tree",
        'answer': "Over yonder"
      },
      {
        'cardid': 3,
        'deckid': 1,
        'question': "What is feng shui",
        'answer': "a way to do things"
      },
      {
        'cardid': 4,
        'deckid': 1,
        'question': "What is a horse",
        'answer': "ugly"
      },
    ]
  };

  return (
    <Fragment>
      <h2 className="text-center card-mgmt-title">Cards</h2>
      <MDBDataTable
        small
        responsive
        bordered
        theadColor="indigo"
        tbodyColor="deep-blue-gradient"
        data={data}
      />

    </Fragment>

  );
}

export default TableCards;