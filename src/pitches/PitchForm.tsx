import * as React from 'react';
import {
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    required,
    useGetIdentity,
} from 'react-admin';
import { Stack, Typography } from '@mui/material';
import { Sale } from '../types';

export const PitchForm = () => {
    const { identity } = useGetIdentity<Sale>();

    return (
        <SimpleForm>
            <Stack gap={2} width="100%">
                <Typography variant="h6">Pitch Details</Typography>
                <TextInput
                    source="subject"
                    fullWidth
                    validate={required()}
                    helperText="The subject line of your pitch"
                />
                <TextInput
                    source="body"
                    fullWidth
                    multiline
                    rows={6}
                    validate={required()}
                    helperText="The content of your pitch"
                />
                <ReferenceInput source="contact_id" reference="contacts">
                    <SelectInput
                        fullWidth
                        validate={required()}
                        label="Recipient"
                        optionText={(record) =>
                            record
                                ? `${record.first_name} ${record.last_name}${
                                      record.outlet ? ` (${record.outlet})` : ''
                                  }`
                                : ''
                        }
                        helperText="The contact who will receive this pitch"
                    />
                </ReferenceInput>
                <SelectInput
                    source="status"
                    fullWidth
                    choices={[
                        { id: 'Draft', name: 'Draft' },
                        { id: 'Sent', name: 'Sent' },
                        { id: 'Replied', name: 'Replied' },
                    ]}
                    defaultValue="Draft"
                    helperText="The current status of this pitch"
                />
                {identity && (
                    <TextInput
                        source="sales_id"
                        defaultValue={identity.id}
                        style={{ display: 'none' }}
                    />
                )}
            </Stack>
        </SimpleForm>
    );
};
