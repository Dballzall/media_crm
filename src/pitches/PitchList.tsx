import * as React from 'react';
import {
    Datagrid,
    DateField,
    List,
    ReferenceField,
    SearchInput,
    SelectInput,
    TextField,
    TextInput,
    useRecordContext,
} from 'react-admin';
import { Chip } from '@mui/material';
import { Pitch } from '../types';

const pitchFilters = [
    <SearchInput source="subject" alwaysOn />,
    <SelectInput
        source="status"
        choices={[
            { id: 'Draft', name: 'Draft' },
            { id: 'Sent', name: 'Sent' },
            { id: 'Replied', name: 'Replied' },
        ]}
    />,
];

const PitchStatusField = () => {
    const record = useRecordContext<Pitch>();
    if (!record) return null;

    let color;
    switch (record.status) {
        case 'Draft':
            color = 'default';
            break;
        case 'Sent':
            color = 'primary';
            break;
        case 'Replied':
            color = 'success';
            break;
        default:
            color = 'default';
    }

    return <Chip label={record.status} color={color as any} size="small" />;
};

export const PitchList = () => {
    return (
        <List filters={pitchFilters}>
            <Datagrid rowClick="show">
                <TextField source="subject" />
                <ReferenceField source="contact_id" reference="contacts" link="show">
                    <TextField source="first_name" label="Recipient" />
                </ReferenceField>
                <PitchStatusField source="status" />
                <DateField source="created_at" showTime />
                <DateField source="updated_at" showTime />
            </Datagrid>
        </List>
    );
};
