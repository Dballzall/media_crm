import * as React from 'react';
import { Create, useNotify, useRedirect } from 'react-admin';
import { PitchForm } from './PitchForm';

export const PitchCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify('Pitch created successfully');
        redirect('list', 'pitches');
    };

    return (
        <Create mutationOptions={{ onSuccess }}>
            <PitchForm />
        </Create>
    );
};
