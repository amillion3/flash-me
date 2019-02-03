import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

import './TableDecks.scss';

const TablePage = (props) => {
  const data_panel = {
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
    rows: [
      {
        'deckid': 1,
        'name': "C#",
        'category': "Technology",
        'publicdeck': "True",
        'deckcreatorid': "1",
        'datecreated': "01/01/2009",
        'datelastmodified': "01/01/2011",
      },
      {
        'deckid': 2,
        'name': "HTML",
        'category': "Technology",
        'publicdeck': "False",
        'deckcreatorid': "1",
        'datecreated': "01/01/2019",
        'datelastmodified': "01/01/2019",
      },
      {
        'deckid': 3,
        'name': "Interview Questions",
        'category': "Technology",
        'publicdeck': "True",
        'deckcreatorid': "1",
        'datecreated': "01/01/2014",
        'datelastmodified': "01/01/2015",
      },
      {
        'deckid': 4,
        'name': "JavaScript",
        'category': "Technology",
        'publicdeck': "False",
        'deckcreatorid': "2",
        'datecreated': "01/01/2015",
        'datelastmodified': "01/01/2016",
      },
      {
        'deckid': 5,
        'name': "React",
        'category': "Technology",
        'publicdeck': "True",
        'deckcreatorid': "3",
        'datecreated': "01/01/2017",
        'datelastmodified': "01/01/2019",
      }
    ]
  };

  return(
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <h2 className="white-text mx-3 deck-header">Your Decks</h2>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody className='table-body' rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

export default TablePage;