import React, {forwardRef, Ref} from 'react';
import {Chip} from '@mui/material'

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { ITableColumn, IVisitor } from '../interfaces'

export const consts = {
    Add: forwardRef((props, ref: Ref<SVGSVGElement>) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref: Ref<SVGSVGElement>) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref: Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref: Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref: Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref: Ref<SVGSVGElement>) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref: Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref: Ref<SVGSVGElement>) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref: Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref: Ref<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref: Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref: Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref: Ref<SVGSVGElement>) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref: Ref<SVGSVGElement>) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref: Ref<SVGSVGElement>) => <ArrowDownward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref: Ref<SVGSVGElement>) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref: Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref} />)
};

export const tableColumns: Array<ITableColumn> = [
    { title: 'Full Name', field: 'fullName' },
    { title: 'Email', field: 'email' },
    { title: 'Department', field: 'department', align: 'right', render: (data: IVisitor) => <Chip label={data.department} /> },
]