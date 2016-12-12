import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import RemoteStorePaging from './components/remote/remote-store-paging';

ReactDOM.render(<RemoteStorePaging sizePerPage={5} currentPage={2} />, document.getElementById('remote-paging-page-2'));
