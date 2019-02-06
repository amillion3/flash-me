import React, { Fragment } from 'react';
import { MDBDataTable } from 'mdbreact';

const deckOutput = {
  columns: [
    {
      'label': 'Deck Id',
      'field': 'deckid',
      'sort': 'asc'
    },
    {
      'label': 'Deck Name',
      'field': 'name',
      'sort': 'asc'
    },
    {
      'label': 'Category',
      'field': 'category',
      'sort': 'asc'
    },
    {
      'label': 'Public Deck',
      'field': 'publicdeck',
      'sort': 'asc'
    },
    {
      'label': 'Deck Creator Id',
      'field': 'deckcreatorid',
      'sort': 'asc'
    },
    {
      'label': 'Date Created',
      'field': 'datecreated',
      'sort': 'asc'
    },
    {
      'label': 'Date Last Modified',
      'field': 'datelastmodified',
      'sort': 'asc'
    }
  ],
  rows: [{
    'deckid': 1,
    'name': 'nadf df me',
    'category': 'catd d egory',
    'publicdeck': 1,
    'deckcreatorid': 1,
    'datecreated': '2000-02-02',
    'datelastmodified': '2000-02-02',
  },
  {
    'deckid': 2,
    'name': 'hiyooo hio',
    'category': 'catd ddd ad egory',
    'publicdeck': 0,
    'deckcreatorid': 1,
    'datecreated': '2000-02-02',
    'datelastmodified': '2000-02-02',
  }]
}

const TestTable = () => {
  return (
    <Fragment>
      <MDBDataTable
        small
        responsive
        bordered
        theadColor="indigo"
        tbodyColor="deep-blue-gradient"
        data={deckOutput}
      />
    </Fragment>
  );
}

export default TestTable;