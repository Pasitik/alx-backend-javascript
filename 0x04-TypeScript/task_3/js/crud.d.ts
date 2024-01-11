/* Write an ambient file within task_3/js, named crud.d.ts containing the type declarations 
for each crud function. At the top of the file import RowID and RowElement from interface.ts. */

import {RowElement,RowID } from './interface';


declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): number;