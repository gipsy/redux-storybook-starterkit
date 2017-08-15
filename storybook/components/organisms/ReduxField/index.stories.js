import React from 'react'
import { storiesOf } from '@storybook/react'
import ReduxField from '~/src/components/organisms/ReduxField'

storiesOf('Components/Organisms', module)
  .addWithChapters(
    'ReduxField',
    {
      subtitle: 'Subtitle',
      info: `
        Here you can see an example of how we implement the full suite of our UI kit, it’s designed so that we don’t need to write ad-hoc elements. Please use this kit first
      `,
      chapters: [
        // List of chapters
        {
          title: 'Input States',
          subtitle: 'Chapter Subtitle',
          sections: [
            // List of sections
            {
              title: 'default',
              subtitle: 'default subtitle',
              sectionFn: () => (
                <ReduxField input={{
                    name: 'name',
                    placeholder: 'enter text here',
                    label: 'Lets’ get started, How would  you describe yourself?',
                    height: 50
                  }} 
                  meta={{
                  }}
                />
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: true,
              },
            },
            {
              title: 'error',
              subtitle: 'error subtitle',
              sectionFn: () => (
                <ReduxField input={{
                    name: 'name',
                    placeholder: 'enter text here',
                    label: 'Lets’ get started, How would  you describe yourself?'
                  }}
                  meta={{
                    touched: true,
                    error: 'Invalid'
                  }}
                />
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
            },
          ]
        },
        {
          title: 'Select States',
          subtitle: 'Chapter Subtitle',
          sections: [
            {
              title: 'type select',
              subtitle: 'type select subtitle',
              sectionFn: () => (
                <ReduxField input={{
                  name: 'name',
                  type: 'select',
                  label: 'Lets’ get started, How would  you describe yourself?' }}
                  meta={{}}
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </ReduxField>
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
            }
          ]
        }
      ]
    }
  )
