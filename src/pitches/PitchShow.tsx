import * as React from 'react';
import {
    Button,
    DateField,
    ReferenceField,
    Show,
    SimpleShowLayout,
    TextField,
    TopToolbar,
    useRecordContext,
    useRedirect,
} from 'react-admin';
import { Box, Chip, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Pitch } from '../types';

const PitchTitle = () => {
    const record = useRecordContext<Pitch>();
    return record ? <span>Pitch: {record.subject}</span> : null;
};

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

    return <Chip label={record.status} color={color as any} />;
};

const PitchActions = () => {
    const record = useRecordContext<Pitch>();
    const redirect = useRedirect();

    if (!record) return null;

    const handleCreateTask = () => {
        redirect('create', 'tasks', {
            contact_id: record.contact_id,
            text: `Follow-up on pitch: ${record.subject}`,
        });
    };

    return (
        <TopToolbar>
            <Button
                onClick={handleCreateTask}
                label="Create Follow-up Task"
                startIcon={<AddTaskIcon />}
            />
        </TopToolbar>
    );
};

export const PitchShow = () => {
    return (
        <Show title={<PitchTitle />} actions={<PitchActions />}>
            <SimpleShowLayout>
                <TextField source="subject" />
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Status
                    </Typography>
                    <PitchStatusField source="status" />
                </Box>
                <ReferenceField source="contact_id" reference="contacts" link="show">
                    <TextField source="first_name" label="Recipient" />
                </ReferenceField>
                <DateField source="created_at" showTime />
                <DateField source="updated_at" showTime />
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Pitch Content
                    </Typography>
                    <Box
                        sx={{
                            p: 2,
                            border: '1px solid #e0e0e0',
                            borderRadius: 1,
                            backgroundColor: '#f5f5f5',
                            whiteSpace: 'pre-wrap',
                        }}
                    >
                        <TextField source="body" />
                    </Box>
                </Box>
            </SimpleShowLayout>
        </Show>
    );
};
