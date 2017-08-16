import React from 'react'
import { storiesOf } from '@storybook/react'
import RadioButtonGroup from '~/src/components/organisms/RadioButtonGroup'

storiesOf('Components/Organisms', module)
  .addWithChapters(
    'RadioButtonGroup',
    {
      subtitle: 'Subtitle',
      info:`
        Radiobutton questions are found in our form as a type of input for our customers. We use the same format on both mobile and desktop
      `,
      chapters: [
        // List of chapters
        {
          title: 'RadioButtonGroup states',
          subtitle: 'subtitle',
          sections: [
            // List of sections
            {
              title: 'default',
              subtitle: 'subtitle',
              sectionFn: () => (
                <RadioButtonGroup listOfItems={
                    [
                      {
                        value: 'under 250',
                        text: 'under £250'
                      },
                      {
                        value: '250 - 500',
                        text: '£250 - £500'
                      },
                      {
                        value: '500 - 750',
                        text: '£500 - £750'
                      },
                      {
                        value: 'over 750',
                        text: 'over £750'
                      },
                    ]
                  }
                />
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              }
            },
            {
              title: 'checked',
              subtitle: 'checked state',
              sectionFn: () => (
                <RadioButtonGroup name='range_amount' listOfItems={
                    [
                      {
                        value: 'under 250',
                        text: 'under £250'
                      },
                      {
                        value: '250 - 500',
                        text: '£250 - £500'
                      },
                      {
                        value: '500 - 750',
                        text: '£500 - £750'
                      },
                      {
                        value: 'over 750',
                        text: 'over £750'
                      },
                    ]
                  }
                />
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              }
            },
          ]
        }
      ]
    }
  )
