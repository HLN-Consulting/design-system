// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { DataTable } from './DataTable';

import { Button } from './../elements/Button';
import { MaterialIcon } from './../elements/MaterialIcon';

export default {
    title: 'Components|Tables',
    component: DataTable,
    decorators: [withKnobs]
};

export const dataTable = () => {
    const DataTableSampleData = {
        columns: React.useMemo(
            () => [
                {
                    Header: `Specification Added?`,
                    accessor: `specAdded`,
                    renderOptions: {
                        columnStyles: {
                            textAlign: 'center'
                        },
                        type: `bool`,
                        values: {
                            true: (
                                <MaterialIcon
                                    icon="check_circle_outline"
                                    size={24}
                                    intent="success"
                                />
                            ),
                            false: (
                                <MaterialIcon
                                    icon="not_interested"
                                    size={24}
                                    intent="danger"
                                />
                            )
                        }
                    }
                },
                {
                    Header: `Nationally Notifiable?`,
                    accessor: `notifyNationally`,
                    renderOptions: {
                        columnStyles: {
                            textAlign: 'center'
                        },
                        type: `bool`,
                        values: {
                            true: <span>Y</span>,
                            false: <span>N</span>
                        }
                    }
                },
                {
                    Header: `Specification Name`,
                    accessor: `name`
                },
                {
                    Header: `Version`,
                    accessor: `version`
                },
                {
                    Header: `Category`,
                    accessor: `category`
                },
                {
                    Header: `Status`,
                    accessor: `status`
                },
                {
                    Header: ``,
                    accessor: `controls`
                }
            ],
            []
        ),
        data: React.useMemo(
            () => [
                {
                    name: `Campylobacteriosis`,
                    version: `0.0`,
                    category: `Enteric Diseases`,
                    status: `Published to Production`,
                    specAdded: true,
                    notifyNationally: true
                },
                {
                    name: `Carbon Monoxide Poisoning`,
                    version: `1.0`,
                    category: `Toxic Effects of Non-Medicinal Substances`,
                    status: `In Progress`,
                    specAdded: true,
                    notifyNationally: true
                },
                {
                    name: `Chlamydia`,
                    version: `2.0`,
                    category: `Sexually Transmitted Infections`,
                    status: `Published to Production`,
                    specAdded: true,
                    notifyNationally: true
                }
            ],
            []
        )
    };

    return (
        <>
            <DataTable
                columns={DataTableSampleData.columns}
                controlButtons={[
                    <Button
                        appearance={`primary`}
                        key={`story_datatable_controlButton_00`}
                    >
                        Button
                    </Button>,
                    <Button key={`story_datatable_controlButton_01`}>
                        Button
                    </Button>
                ]}
                data={DataTableSampleData.data}
                fullWidth={boolean(`Full Width Table`, true)}
                enitityLabels={{
                    singular: `specification`,
                    plural: `specifications`
                }}
                id="story_datatable_00"
                label="Reporting Specification Manager"
                showControlDeck={boolean(`Control Deck`, true)}
                showHeader={boolean(`Table Header`, true)}
            />
        </>
    );
};

dataTable.story = {
    name: 'Data Table'
};
