import * as React from 'react';
import { Edit, useNotify } from 'react-admin';
import { PitchForm } from './PitchForm';

export const PitchEdit = () => {
    const notify = useNotify();

    const onSuccess = () => {
        notify('Pitch updated successfully');
    };

    return (
        <Edit mutationOptions={{ onSuccess }}>
            <PitchForm />
        </Edit>
    );
};
